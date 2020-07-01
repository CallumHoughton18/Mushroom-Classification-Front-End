import {useState, useEffect, MutableRefObject} from "react";

const useWhenInView = (domRef: MutableRefObject<undefined>): boolean => {
    const [isVisible, setVisible] = useState(true);

    useEffect(() => {
        const currentRef = domRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // Tells us if entry is intersecting viewport
                setVisible(entry.isIntersecting);
            });
        });
        observer.observe(currentRef);
        // clean up function. When component unmounted unobserve the DOM reference
        return () => observer.unobserve(currentRef);
    }, [domRef]);

    return isVisible;
};

export default useWhenInView;
