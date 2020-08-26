import {useLocation} from "react-router-dom";

/**
 * hook for retrieving navigation data, based on given @type {T}
 * internally uses react-routers useLocation() hook and its state
 */
const useGetNavData = <T>(): T => {
    const location = useLocation<T>();
    return location.state;
};

export default useGetNavData;
