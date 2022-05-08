import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAllItemsToLoad from '../../hooks/useAllItemsToLoad';
import Loading from '../CommonComponent/Loading';
import ManageItemCard from './ManageItemCard';

const ManageInventories = () => {
    const navigate = useNavigate();
    const [items, setItems] = useAllItemsToLoad();
    // console.log(items);
    const handleDelete = async (id) => {
        const proced = window.confirm('Are you sure? to delete');
        if (proced) {
            await axios.delete(`https://mysterious-scrubland-93327.herokuapp.com/item/${id}`)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                    /* toast diye popup dekhate hobe  */
                    alert("items detele succssfully!")
                });
        }
    }
    const navigateToAddPage = ()=>{
        navigate('/additem');
    }
    if (items === undefined) {
        return <Loading></Loading>
    }
    return (
        <div className='my-4'>
            <div className='container d-flex align-items-center justify-content-between'>
                <h2 className=''>Manage Inventories</h2>
                <button onClick={navigateToAddPage} className='btn btn-danger'>Add Items</button>
            </div>
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