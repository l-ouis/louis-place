import { useState, useEffect } from 'react';

export function useMobile() {
    const [isMobile, setIsMobile] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600 ? 2 : window.innerWidth < 1000 ? 1 : 0);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
}
