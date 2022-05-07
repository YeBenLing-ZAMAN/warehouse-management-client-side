import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    const [img, setImg] = useState([]);
    useEffect(() => {
        fetch('bannarImage.json')
            .then(res => res.json())
            .then(data => setImg(data));
    }, [])
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel className="bannar-container" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='Carousel-item'>
                <img
                    className="d-block w-100 img-fluid overlay-image"
                    src={img[0]?.img}
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
                    src={img[1]?.img}
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
                    src={img[2]?.img}
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