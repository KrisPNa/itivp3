import React, { useState, useEffect } from 'react';
import './Carousel.css';

interface CarouselProps {
    images: string[];
    interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <img 
                    src={images[currentIndex]} 
                    alt={`Slide ${currentIndex + 1}`} 
                    className="carousel-image"
                />
                
                <div className="carousel-dots">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel; 