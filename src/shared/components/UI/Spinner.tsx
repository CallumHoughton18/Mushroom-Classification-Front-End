import React, {FunctionComponent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const Spinner: FunctionComponent = () => {
    const spinnerIcon = (
        <FontAwesomeIcon icon={faSpinner} spin className="spinner-icon"></FontAwesomeIcon>
    );
    return <div className="loading-spinner">{spinnerIcon}</div>;
};

export default Spinner;
