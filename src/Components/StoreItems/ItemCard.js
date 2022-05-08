import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({ item }) => {
    const { img, _id, name,about,supplier,quantity } = item;
    const navigate = useNavigate();
    console.log(_id);

    /* handle dynamic routes of items */
    const handleItemsNavigate = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='mx-2 my-2 border border-1 rounded rounded-3 shadow-md p-1'>
            <img src={img} style={{ 'height': '300px' }} alt="" />
            <h4 className=''>{name}</h4>
            <h5 className=''>supplier: {supplier}</h5>
            <h5>Quantity: <span className='text-danger'>{quantity}</span></h5>
            <button onClick={() => handleItemsNavigate(_id)} className='btn btn-danger w-100'>More & Update</button>
        </div>
    );
};

export default ItemCard;