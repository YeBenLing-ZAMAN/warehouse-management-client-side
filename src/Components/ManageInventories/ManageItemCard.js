import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageItemCard = ({ item }) => {
    const { img, _id, name, quantity, supplier } = item;
    const navigate = useNavigate();
    console.log(_id);

    /* handle dynamic routes of items */
    const handleItemsNavigate = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='container'>
            <Row className='mt-2 border border-1 rounded rounded-3 shadow-md d-flex align-items-center justify-content-around'>
                <Col xs={12} md={4} className='d-flex align-items-center p-0 '>
                    <img src={img} style={{ 'height': '50px' }} alt="" />
                    <div className='ms-2'>
                        <p className='text-left m-0'> Supplier Name :<strong>{supplier}</strong> </p>
                        <p className='text-left m-0'> Product Name :<strong>{name}</strong> </p>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <p className='text-left m-0'>Quantity:{quantity}</p>
                </Col>
                <Col xs={12} md={4} className='d-flex p-0 p-md-2'>
                    <button onClick={() => handleItemsNavigate(_id)} className='btn btn-dark w-50 '>More Details</button>
                    <button className='btn btn-danger w-50 ms-2'>Delete Item</button>
                </Col>
            </Row>
        </div>
    );
};

export default ManageItemCard;