import React, {FunctionComponent} from "react";
import useGetNavData from "../navigation/hooks/useGetNavData";
import {FriendlyAppError} from "../shared/types";

const ErrorPage: FunctionComponent = () => {
    const errorMsg = useGetNavData<FriendlyAppError>();
    return (
        <section className="centred-content">
            <h2>Oops! An Error Occured :(</h2>
            <p>{errorMsg?.message}</p>
        </section>
    );
};

export default ErrorPage;
