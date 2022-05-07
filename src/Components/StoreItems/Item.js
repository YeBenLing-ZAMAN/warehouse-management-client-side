import React from 'react';
import { useParams } from 'react-router-dom';
import useItemLoad from '../../hooks/useItemLoad';

const Item = () => {
    const { itemId } = useParams();
    const [item] = useItemLoad(itemId);

    const { name, img,quantity,supplier,about } = item;
    return (
        <div style={{'height':"100vh"}} className='d-flex flex-column flex-md-row align-items-center justify-content-md-center my-5'>
            <div>
                <img style={{ "height": "300px" }} src={img} alt="" />
            </div>
            <div className='mx-5 mt-2 mt-md-0 '>
                <h3>Name : {name}</h3>
                <p className='d-none d-md-block'>{about}</p>
                <h4>Supplier:{supplier}</h4>
                <h3>Quantity:{quantity}</h3>
            </div>
        </div>
    );
};

export default Item;