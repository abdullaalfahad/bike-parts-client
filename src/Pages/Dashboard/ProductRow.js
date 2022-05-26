import React from 'react';

const ProductRow = ({ tool, index, setDeletingProduct }) => {
    const { name, img, available, minimumOrder, price } = tool;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-12 rounded-xl">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name?.slice(0, 20)}...</td>
            <td>${price}</td>
            <td>{available}</td>
            <td>{minimumOrder}</td>
            <td>
                <label htmlFor="delete-product-modal" className="btn modal-button btn-xs bg-red-500 text-white border-0" onClick={() => setDeletingProduct(tool)}>Delete</label>
            </td>
        </tr>
    );
};

export default ProductRow;