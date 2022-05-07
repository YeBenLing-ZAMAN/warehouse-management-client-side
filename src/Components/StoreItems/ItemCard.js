import React from 'react';

const ItemCard = ({item}) => {
    const {img, id, name}=item;

    /* handle dynamic routes of items */
    return (
        <div className='mx-2 border border-1 rounded rounded-3 shadow-md'>
            <img src={img} style={{'height':'200px'}} alt="" />
            <p className='text-center'>{name}</p>
            <button onClick={()=>handleItems(id)} className='btn btn-danger w-100'>More</button>
        </div>
    );
};

export default ItemCard;