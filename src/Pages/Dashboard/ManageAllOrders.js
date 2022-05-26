import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import CancelOrderModal from './CancelOrderModal';

const ManageAllOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const { data: orders, isLoading, refetch } = useQuery('allOrders', () => fetch('https://vast-dawn-74828.herokuapp.com/orders', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleShipped = order => {
        const action = {
            status: 'Shipped'
        }
        fetch(`https://vast-dawn-74828.herokuapp.com/order/${order._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            },
            body: JSON.stringify(action)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast('Order shipped');
                    refetch();
                }
            })
    }

    return (
        <div className='mx-2 md:mx-0'>
            <h1 className='my-6 text-xl font-medium lg:text-2xl'>Manage All Orders {orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Order Person</th>
                            <th>Tool Name</th>
                            <th>Order Quantity</th>
                            <th>Unit Price</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Status/Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <th>{order.name}</th>
                                <td>{order.tool}</td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.price}</td>
                                <td>{order.totalPrice}</td>
                                <td>{(order.totalPrice && !order.paid) && <div><span className='text-error font-medium'>Unpaid</span>
                                </div>} {(order.totalPrice && order.paid) && <div>
                                    <span className='text-success font-bold'>Paid</span>
                                </div>}</td>
                                <td>{order.status === 'Pending' && <button className='btn btn-xs' onClick={() => handleShipped(order)}>Pending</button>}
                                    {order.status === 'Shipped' && <span className='text-success font-medium'>Shipped</span>}
                                    {(order.totalPrice && !order.paid) && <label htmlFor="delete-order-modal" className='btn btn-xs btn-error text-white ml-2' onClick={() => setDeletingOrder(order)}>Cancel</label>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingOrder && <CancelOrderModal
                    deletingOrder={deletingOrder}
                    setDeletingOrder={setDeletingOrder}
                    refetch={refetch}
                ></CancelOrderModal>
            }
        </div>
    );
};

export default ManageAllOrders;