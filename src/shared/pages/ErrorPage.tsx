import React from "react";
import useGetNavData from "../../navigation/hooks/useGetNavData";
import {FriendlyAppError} from "../types";

const ErrorPage = (): JSX.Element => {
    const errorMsg = useGetNavData<FriendlyAppError>();
    return (
        <section className="centred-content">
            <h2>Oops! An Error Occured :(</h2>
            <p>{errorMsg?.message}</p>
        </section>
    );
};

export default ErrorPage;
