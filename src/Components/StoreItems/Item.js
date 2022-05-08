import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useItemLoad from '../../hooks/useItemLoad';

const Item = () => {
    const { itemId } = useParams();

    /* data load using custiom useState hooks */
    // const [item] = useItemLoad(itemId);

    const [item, setItem] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [itemId, item]);


    let { name, img, quantity, supplier, about } = item;

    /* incress item handle */
    const incressItem = async (event) => {
        event.preventDefault();
        const newQuantity = event.target.newQuantity.value;
        if (newQuantity >= 1) {
            const updateQuantity = parseInt(newQuantity) + quantity;
            const url = `http://localhost:5000/item/${itemId}`;
            await axios.put(url, { quantity: updateQuantity })
                .then(res => {
                    console.log(res);
                    if (res?.data?.acknowledged === true) {
                        alert('items Quantity update successfully !');
                        item.quantity = updateQuantity;
                    } else {
                        alert('Unsuccessfully!! please try again');
                    }
                    event.target.reset();
                });

        } else {
            alert('Please Enter a Postive Number')
        }

    }

    const handleDelevered = async (event) => {
        if(quantity>0){
            const updateQuantity = quantity - 1;
            const url = `http://localhost:5000/item/${itemId}`;
            await axios.put(url, { quantity: updateQuantity })
            .then(res => {
                console.log(res);
                if (res?.data?.acknowledged === true) {
                    alert('1 item delivered successfully !');
                    item.quantity = updateQuantity;
                } else {
                    alert('Unsuccessfully!! please try again');
                }
            });
        }else{
            alert("Stock out !! please restore");
        }
    }

    return (
        <Row style={{ 'height': "100vh", "margin": "0px" }} className='align-items-center justify-content-md-center my-5'>
            <Col className='d-flex justify-content-center justify-content-md-end'>
                <img style={{ "height": "300px" }} src={img} alt="" />
            </Col>
            <Col className='mx-5 mt-2 mt-md-0 d-flex align-items-start align-items-center'>
                <div>
                    <h3>Name : {name}</h3>
                    <p className='d-none d-md-block'>{about}</p>
                    <h4>Supplier:{supplier}</h4>
                    <h3 id="itemQuantity">Quantity:{quantity} Kg</h3>
                    <div className='mt-md-4 d-flex flex-column flex-md-row align-items-md-center justify-content-start'>
                        <form onSubmit={incressItem} className="d-flex align-items-center">
                            <input name='newQuantity' className='me-3' style={{ 'width': '70px', "height": "33px" }} type="number" required />
                            <input className='btn btn-dark' type="submit" value="Add" />
                        </form>
                        <div>
                            <button onClick={handleDelevered} className='btn btn-danger ms-5 mt-2 mt-md-0'>delivered</button>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Item;