import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://vast-dawn-74828.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Only admin can make admin')
                }
                return res.json();
            })
            .then(data => {
                if (data.matchedCount > 0) {
                    refetch();
                    toast.success('Admin added successFully');
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} className="btn btn-xs text-white">Make Admin</button> : <span className='text-primary font-medium'>Admin</span>}</td>
            <td><button className="btn btn-xs bg-red-500 text-white border-0">Remove User</button></td>
        </tr>
    );
};

export default UserRow; 