import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductRow from './ProductRow';

const ManageProduct = () => {
    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('http://localhost:5000/tools', {
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
                        <th>Minimum Order Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {parts.map((tool, index) => <ProductRow key={tool._id} tool={tool} index={index} refetch={refetch}></ProductRow>)}
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;