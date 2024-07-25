import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import "./style.css"

const SwippeableGallery = ({ items }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [animation, setAnimation] = useState(false)

    const handlers = useSwipeable({
        onSwipedLeft: () => prevSlide(),
        onSwipedRight: () => nextSlide(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const totalLevels = items.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handleClick = () => {
        setAnimation(!animation)
    }


    return (
        <div className='swippeableGalleryContainer'>
            <div {...handlers} className='swippeableGalleryWindow'>
                <div className='swippeableGalleryWrapper' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {items.map((item, index) => (
                        <div key={index} className="swippeableGallery-item" onClick={handleClick}>
                            <img src={item.img} alt="" />
                            <h2>{item.title}</h2>
                            <div className={`swippeableGallery-item-bannerText ${animation ? "swippeableGallery-item-bannerText-animation" : ""}`}>
                                <p>{item.desc}</p>
                                <h3>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="cardCarousel-levelContainer">
                {Array.from({ length: totalLevels }).map((_, index) => (
                    <div
                        key={index}
                        className={`cardCarousel-level margin-30 ${currentIndex === index ? "cardCarousel-level-selected" : ""}`}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default SwippeableGallery