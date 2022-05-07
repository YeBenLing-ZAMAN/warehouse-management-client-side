import React from 'react';
import useAllItemsToLoad from '../../hooks/useAllItemsToLoad';
import ManageItemCard from './ManageItemCard';

const ManageInventories = () => {
    const [items] = useAllItemsToLoad([]);
    return (
        <div className='my-4'>
            <h2 className='text-center'>Manage Inventories</h2>
            {
                items.map(item => <ManageItemCard key={item.id} item={item}></ManageItemCard>)
            }
        </div>
    );
};

export default ManageInventories;