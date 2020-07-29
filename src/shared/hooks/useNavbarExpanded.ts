import {useEffect, useState, Dispatch, SetStateAction} from "react";

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
    return [expanded, setExpanded];
};

export default useNavbarExpanded;
