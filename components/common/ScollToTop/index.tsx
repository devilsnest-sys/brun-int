'use client'

import React from 'react';

const ScollToTop = () => {

    const [showScroll, setShowScroll] = React.useState(false);

    const checkScrollTop = () => {
        if (!window) return;
        if (!window.scrollY) {
            return;
        }
        if (window.scrollY > 300) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        }
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <span className={`bg-white border border-black px-3 py-3 grid place-items-center fixed bottom-6 right-4 cursor-pointer ${!showScroll && 'hidden'}`} onClick={handleScrollToTop}>
            <span className="material-symbols-rounded">
                arrow_upward
            </span>
        </span>
    )
}

export default ScollToTop