import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel className="bannar-container" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='Carousel-item'>
                <img
                    className="d-block w-100 img-fluid overlay-image"
                    src='https://i.ibb.co/xGwPn1B/01.jpg'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>TEMP STORE</h3>
                    <p>it's our temp storage house.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='Carousel-item'>
                <img
                    className="d-block w-100 img-fluid overlay-image"
                    src='https://i.ibb.co/VBvfWtb/05.jpg'
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>OUR DELIVERY ADN LOADING</h3>
                    <p>we are provided Door to Door delivery service.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='Carousel-item'>
                <img
                    className="d-block w-100 img-fliud overlay-image"
                    src='https://i.ibb.co/LxGqLFL/04.jpg'
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>OUR MAIN WAREHOUSE</h3>
                    <p>we are provide this best service of this country.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;


// https://i.ibb.co/LxGqLFL/04.jpg
// https://i.ibb.co/VBvfWtb/05.jpg