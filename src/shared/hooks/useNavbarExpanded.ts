import {useEffect, useState, Dispatch, SetStateAction} from "react";

/**
 * Hook for determining if navbar should show its expanded menu or not
 * @param widthForResize if the width of the window is less than this
 * the navbar should not be expanded (ie display mobile version with hamburger menu)
 * @param eventListenerType event to listen to.
 */
const useNavbarExpanded = (
    widthForResize: number,
    eventListenerType: keyof WindowEventMap
): [boolean, Dispatch<SetStateAction<boolean>>] => {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= widthForResize) {
                setExpanded(false);
            }
        };
        window.addEventListener(eventListenerType, handleResize);
    });

    // setExpanded is returned as when the window is resized, back to large
    // the component should specify that the navbars expanded menu should always
    // be closed
    return [expanded, setExpanded];
};

export default useNavbarExpanded;
