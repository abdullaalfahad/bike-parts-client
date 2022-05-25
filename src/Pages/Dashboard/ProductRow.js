import React from 'react';

const ProductRow = ({ tool, index, refetch }) => {
    const { name, img, available, minimumOrder, price } = tool;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-12 rounded-xl">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>${price}</td>
            <td>{available}</td>
            <td>{minimumOrder}</td>
            <td>
                {/* <label htmlFor="delete-doctor-modal" class="btn modal-button btn-xs bg-red-500 text-white border-0" onClick={() => setDeletingDoctor(doctor)}>Delete</label> */}
            </td>
        </tr>
    );
};

export default ProductRow;