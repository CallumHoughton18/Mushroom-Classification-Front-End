import {useState, useEffect, MutableRefObject} from "react";

const useWhenInView = (domRef: MutableRefObject<Element>): boolean => {
    const [isVisible, setVisible] = useState(true);

    useEffect(() => {
        const currentRef = domRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // boolean for if entry is intersecting viewport
                setVisible(entry.isIntersecting);
            });
        });
        observer.observe(currentRef);
        // clean up function. When component unmounted unobserve the element in the DOM
        return () => observer.unobserve(currentRef);
    }, [domRef]);

    return isVisible;
};

export default useWhenInView;
