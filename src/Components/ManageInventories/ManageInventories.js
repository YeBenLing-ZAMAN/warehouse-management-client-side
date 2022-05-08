import axios from 'axios';
import React from 'react';
import useAllItemsToLoad from '../../hooks/useAllItemsToLoad';
import ManageItemCard from './ManageItemCard';

const ManageInventories = () => {
    const [items, setItems] = useAllItemsToLoad();
    // console.log(items);
    const handleDelete = (id) => {
        const proced = window.confirm('Are you sure? to delete');
        if (proced) {
            axios.delete(`http://localhost:5000/item/${id}`)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    const remaining = items.filter(service => items._id !== id);
                    setItems(remaining);
                    /* toast diye popup dekhate hobe  */
                });
        }
    }
    return (
        <div className='my-4'>
            <h2 className='text-center'>Manage Inventories</h2>
            {
                items.map(item =>
                    <ManageItemCard
                        key={item.id}
                        item={item}
                        handleDelete={handleDelete}
                    >
                    </ManageItemCard>)
            }
        </div>
    );
};

export default ManageInventories;