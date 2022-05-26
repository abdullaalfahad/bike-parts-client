import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingProduct, setDeletingProduct, refetch }) => {
    const { name, _id } = deletingProduct;

    const handleDelete = () => {
        fetch(`https://vast-dawn-74828.herokuapp.com/tool/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${name?.slice(0, 20)}... deleted successfully`);
                    setDeletingProduct(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-product-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete ${name?.slice(0, 20)}...</h3>
                    <div className="modal-action">
                        <button className="btn btn-xs bg-red-500 text-white border-0" onClick={handleDelete}>Delete</button>
                        <label for="delete-product-modal" className="btn btn-xs btn-success text-white">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;