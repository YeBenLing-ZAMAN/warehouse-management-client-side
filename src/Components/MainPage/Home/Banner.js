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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='Carousel-item'>
                <img
                    className="d-block w-100 img-fluid overlay-image"
                    src='https://i.ibb.co/M5Xp5ts/03.jpg'
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='Carousel-item'>
                <img
                    className="d-block w-100 img-fliud overlay-image"
                    src='https://i.ibb.co/sHMmfH6/02.jpg'
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;