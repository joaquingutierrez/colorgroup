import { useState, useEffect, useRef } from 'react';

const useScroll = () => {
    const [isAtTop, setIsAtTop] = useState(false);
    const elementRef = useRef(null);
    const scrollContainerRef = useRef(null);

    const handleScroll = () => {
        if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            if (scrollContainerRef.current) {
                const containerRect = scrollContainerRef.current.getBoundingClientRect();
                setIsAtTop(rect.top <= containerRect.top);
            } else {
                setIsAtTop(rect.top <= 0);
            }
        }
    };

    useEffect(() => {
        const currentScrollContainer = scrollContainerRef.current || window;

        if (currentScrollContainer) {
            currentScrollContainer.addEventListener('scroll', handleScroll);
            handleScroll();
        }

        return () => {
            if (currentScrollContainer) {
                currentScrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return { isAtTop, elementRef, scrollContainerRef };
};

export default useScroll;
