import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({ item }) => {
    const { img, _id, name } = item;
    const navigate = useNavigate();
    console.log(_id);

    /* handle dynamic routes of items */
    const handleItemsNavigate = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='mx-2 my-2 border border-1 rounded rounded-3 shadow-md'>
            <img src={img} style={{ 'height': '200px' }} alt="" />
            <p className='text-center'>{name}</p>
            <button onClick={() => handleItemsNavigate(_id)} className='btn btn-danger w-100'>More</button>
        </div>
    );
};

export default ItemCard;