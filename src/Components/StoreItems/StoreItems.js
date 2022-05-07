import React, { useEffect, useState, useTransition } from 'react';
import ItemCard from './ItemCard';

const StoreItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    console.log(items);
    return (
        <div id='storeItems' className='mt-5' style={{ 'minHeight': 'calc(100vh - 56px)' }}>
            <h1 className='text-center'>store items</h1>
            <div className='container mt-3 d-flex align-items-center justify-content-center'>
                {
                    items.map(item => <ItemCard key={item.id} item={item}></ItemCard>)
                }
            </div>
            <div className='d-flex align-items-center justify-content-center mt-5'>
                <button className='btn btn-danger me-3'>add new Items</button>
                <button className='btn btn-danger ms-3'>More Items</button>
            </div>
        </div>
    );
};

export default StoreItems;