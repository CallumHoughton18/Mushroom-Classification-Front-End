import {useLocation} from "react-router-dom";

const useGetNavData = <T>(): T => {
    const location = useLocation<T>();
    return location.state;
};

export default useGetNavData;
