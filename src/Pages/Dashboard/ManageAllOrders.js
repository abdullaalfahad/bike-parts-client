import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import CancelOrderModal from './CancelOrderModal';

const ManageAllOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const { data: orders, isLoading, refetch } = useQuery('allOrders', () => fetch('http://localhost:5000/orders', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
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
                                <td>{order.status === 'Pending' && <button className='btn btn-xs'>Pending</button>}
                                    {order.status === 'Shipped' && <span className='text-success text-medium'>Shipped</span>}
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