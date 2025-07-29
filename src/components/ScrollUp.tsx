import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

function ScrollUp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            setIsVisible(scrollTop > 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            onClick={handleScrollUp}
            className={`fixed bottom-10 cursor-pointer ${isVisible ? "block" : "hidden"} right-10 bg-gradient-primary text-white rounded-full p-[.1rem] z-10 px-3 py-3`}
        >
            <ChevronUp className="w-6 h-6" />
        </div>
    );
};

export default ScrollUp;