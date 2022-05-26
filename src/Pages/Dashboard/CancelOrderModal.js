import React from 'react';
import { toast } from 'react-toastify';

const CancelOrderModal = ({ deletingOrder, setDeletingOrder, refetch }) => {
    const { tool, _id } = deletingOrder;

    const handleDelete = () => {
        fetch(`https://vast-dawn-74828.herokuapp.com/order/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${tool?.slice(0, 20)}... order delete successfully`);
                    setDeletingOrder(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-error">Are you sure you want to delete {tool?.slice(0, 20)}...?</h3>
                    <div className="modal-action">
                        <button className="btn btn-xs bg-error text-white border-0" onClick={handleDelete}>Delete</button>
                        <label for="delete-order-modal" className="btn btn-xs btn-success text-white">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelOrderModal;