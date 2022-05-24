import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;



    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button className="btn text-white">Make Admin</button>}</td>
            <td><button className="btn btn-xs bg-red-500 text-white border-0">Remove User</button></td>
        </tr>
    );
};

export default UserRow; 