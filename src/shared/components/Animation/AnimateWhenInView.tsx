import React, {FunctionComponent, ReactNode, useState, useRef, useEffect} from "react";

type AnimateWhenInViewProps = {
    children?: ReactNode;
    isVisibleClass: string;
    isNotVisibleClass: string;
};

// TODO: this might be better as some form of animation hook rather than a higher order component?
const AnimateWhenInView: FunctionComponent<AnimateWhenInViewProps> = (props) => {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();

    useEffect(() => {
        const currentRef = domRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setVisible(entry.isIntersecting);
            });
        });
        observer.observe(currentRef);
        return () => observer.unobserve(currentRef);
    }, []);

    return (
        <div
            className={`${isVisible ? props.isVisibleClass : props.isNotVisibleClass}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
};

export default AnimateWhenInView;
