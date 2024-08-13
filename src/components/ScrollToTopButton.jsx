import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 bg-white p-2 rounded-full shadow-md animate-bounce"
            >
                <AiOutlineArrowUp size={24} className="text-[#47B6FE]" />
            </button>
        )
    );
};

export default ScrollToTopButton;