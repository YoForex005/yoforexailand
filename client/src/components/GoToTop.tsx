import { useLocation } from "wouter";
import { useEffect } from "react";

function GoToTop() {
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, [routePath]);

    return null;
};

export default GoToTop;