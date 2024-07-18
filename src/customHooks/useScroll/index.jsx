import { useState, useEffect, useRef } from 'react';

const useScroll = () => {
    const [isAtTop, setIsAtTop] = useState(false);
    const elementRef = useRef(null);
    const scrollContainerRef = useRef(null);

    const handleScroll = () => {
        if (scrollContainerRef.current && elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            const containerRect = scrollContainerRef.current.getBoundingClientRect();
            setIsAtTop(rect.top <= containerRect.top);
            console.log(rect.top <= containerRect.top)
        }
    };

    useEffect(() => {
        const currentScrollContainer = scrollContainerRef.current;

        if (currentScrollContainer) {
            currentScrollContainer.addEventListener('scroll', handleScroll);
            handleScroll(); // Ejecutar una vez para configurar el estado inicial
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
