import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Z1j1SLp/slider-3.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-light">
                        <h1>Providing best Medicale care</h1>
                        <p>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/HYjP9y2/slider-4.webp"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="text-light">
                        <h1>Providing best Medicale care</h1>
                        <p>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;