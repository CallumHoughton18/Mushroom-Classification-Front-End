import {useState, useEffect} from "react";

const useAllRequiredInputsFilled = (): boolean => {
    const [allRequiredInputsFilled, setAllRequiredInputsFilled] = useState(true);

    // useEffect(() => {
    //     // clean up function.
    //     return () => {};
    // }, []);

    return allRequiredInputsFilled;
};

export default useAllRequiredInputsFilled;
