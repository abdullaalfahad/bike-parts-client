import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingProduct, setDeletingProduct, refetch }) => {
    const { name, _id } = deletingProduct;

    const handleDelete = () => {
        fetch(`http://localhost:5000/tool/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${name.slice(0, 20)}... deleted successfully`);
                    setDeletingProduct(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-product-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete ${name.slice(0, 20)}...</h3>
                    <div class="modal-action">
                        <button class="btn btn-xs bg-red-500 text-white border-0" onClick={handleDelete}>Delete</button>
                        <label for="delete-product-modal" class="btn btn-xs btn-success text-white">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;