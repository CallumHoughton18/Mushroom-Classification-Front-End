import {useRef, useEffect, MutableRefObject} from "react";

/**
 * hook for detecting click outside of element with the returned reference object.
 * @param clickedOutsideCallback callback function to execute once a click outside is detected
 * @returns {MutableRefObject<HTMLElement>} ref to be placed in content in which clicks INSIDE are not detected
 */
const useClickedOutside = (clickedOutsideCallback: () => void): MutableRefObject<HTMLElement> => {
    const ref = useRef<HTMLElement>();

    const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
            clickedOutsideCallback();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    });

    return ref;
};

export default useClickedOutside;
