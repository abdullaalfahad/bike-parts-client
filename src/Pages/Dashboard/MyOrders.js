import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CancelOrderModal from './CancelOrderModal';

const MyOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const { data: orders, isLoading, refetch } = useQuery(['orders', user], () => fetch(`https://vast-dawn-74828.herokuapp.com/order?email=${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessTOken');
            navigate('/');
        }
        return res.json()
    }))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mx-2 md:mx-0'>
            <h1 className='my-6 text-xl font-medium lg:text-2xl'>Your Total Orders: {orders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
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
                                <td>{order.tool}</td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.price}</td>
                                <td>{order.totalPrice}</td>
                                <td>{(order.totalPrice && !order.paid) && <div><Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs mr-2 btn-success text-white'>Pay</button></Link>
                                </div>} {(order.totalPrice && order.paid) && <div>
                                    <span className='text-success font-bold'>Paid, </span>
                                    <span className='text-success'>TransactionId: {order.transactionId}</span>
                                </div>}</td>
                                <td>{order.status === 'Pending' && <button className='btn btn-xs'>Pending</button>}
                                    {order.status === 'Shipped' && <span className='text-success font-medium'>Shipped</span>}
                                    {!order.paid && <label htmlFor="delete-order-modal" className='btn btn-xs btn-error text-white' onClick={() => setDeletingOrder(order)}>Cancel</label>}
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

export default MyOrders;