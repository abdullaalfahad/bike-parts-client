import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ProductRow from './ProductRow';

const ManageProduct = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('https://vast-dawn-74828.herokuapp.com/tools', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mx-2 md:mx-0'>
            <h1 className='my-6 text-xl font-medium lg:text-2xl'>All Products</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Available Quantity</th>
                        <th>Order Quantity</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {parts.map((tool, index) => <ProductRow key={tool._id} tool={tool} index={index} setDeletingProduct={setDeletingProduct}></ProductRow>)}
                </tbody>
            </table>
            {
                deletingProduct && <DeleteConfirmModal
                    deletingProduct={deletingProduct}
                    refetch={refetch}
                    setDeletingProduct={setDeletingProduct}
                ></DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageProduct;