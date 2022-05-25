import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div class="drawer drawer-mobile my-4 lg:my-8">
            <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* Page content here */}
                <h1 className='text-2xl lg:text-5xl text-primary text-center font-extrabold'>Welcome to Dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {!admin && <>
                        <li><Link to='/dashboard/myOrders'>My Orders</Link></li>

                        <li><Link to='/dashboard/addReview'>Add Review</Link></li>
                    </>}
                    {admin && <>
                        <li><Link to='/dashboard/allUser'>All User</Link></li>
                        <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                        <li><Link to='/dashboard/manageProduct'>Manage Product</Link></li>
                    </>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;