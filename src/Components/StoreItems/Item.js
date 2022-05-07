import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useItemLoad from '../../hooks/useItemLoad';

const Item = () => {
    const { itemId } = useParams();
    const [item] = useItemLoad(itemId);
    const { name, img, quantity, supplier, about } = item;

    /* incress item handle */
    const incressItem=(event)=>{
        event.preventDefault();
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
                    <h3>Quantity:{quantity}</h3>
                    <div className='d-flex flex-column flex-md-row align-items-md-center'>
                        <form onSubmit={incressItem} className="d-flex align-items-center">
                            <input className='me-3' style={{'width':'70px',"height":"33px"}} type="number" />
                            <input className='btn btn-dark' type="submit" value="Add" />
                        </form>
                        <button className='btn btn-danger ms-5 mt-2 mt-md-0'>delivered</button>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Item;