import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={handleClick}
                    style={{
                        display: 'block',
                        position: 'fixed',
                        bottom: '20px',
                        right: '30px',
                        zIndex: '99',
                        fontSize: '18px',
                        border: 'none',
                        outline: 'none',
                        cursor: 'pointer',
                        padding: '6px',
                        borderRadius: '16vh',
                        color: 'white',
                        background: '#3d6ae8',
                        boxShadow: '0 0 0 5px #3b83f65f',
                        height: '40px',
                        width: '40px',
                        textAlign: 'center',
                    }}
                    title="Go to top"
                >
                    <svg style={{
                        height: '15px',
                        fill: 'white'
                    }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                    </svg>
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;
