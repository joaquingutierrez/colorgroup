import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import "./style.css";
import Card from "../Card";
import useWindowSize from "../../customHooks/useWindowSize";

const CardsCarousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemCountInView, setItemCountInView] = useState(1);
    const [totalLevels, setTotalLevels] = useState(0);
    const { width } = useWindowSize();

    useEffect(() => {
        if (width > 1024) {
            setItemCountInView(3);
        } else if (width > 799) {
            setItemCountInView(2);
        } else {
            setItemCountInView(1);
        }
    }, [width]);

    useEffect(() => {
        setTotalLevels(Math.ceil(items.length / itemCountInView));
    }, [items.length, itemCountInView]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalLevels);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalLevels) % totalLevels);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <>
            <div className="cardCarouselContainer-outer" {...handlers}>
                <div
                    className="cardCarouselContainer"
                    style={{ transform: `translateX(-${currentIndex * (width < 800 ? 80 : 100)}%)` }}
                >
                    {items.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </div>
            </div>
            <div className="cardCarousel-utils">
                <div className="cardCarousel-levelContainer">
                    {Array.from({ length: totalLevels }).map((_, index) => (
                        <div
                            key={index}
                            className={`cardCarousel-level ${currentIndex === index ? "cardCarousel-level-selected" : ""}`}
                        ></div>
                    ))}
                </div>
                <div className="cardCarousel-buttons">
                    <div onClick={prevSlide} className="cardCarousel-buttons-buttonContainer">
                        <div className="cardCarousel-buttons-horizontalLine">
                            <div className="cardCarousel-buttons-leftButton-diagonalTop"></div>
                            <div className="cardCarousel-buttons-leftButton-diagonalBottom"></div>
                        </div>
                    </div>
                    <div onClick={nextSlide} className="cardCarousel-buttons-buttonContainer">
                        <div className="cardCarousel-buttons-horizontalLine">
                            <div className="cardCarousel-buttons-rightButton-diagonalTop"></div>
                            <div className="cardCarousel-buttons-rightButton-diagonalBottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardsCarousel;
