import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Spinner = (): JSX.Element => {
    const spinnerIcon = (
        <FontAwesomeIcon icon="spinner" spin className="spinner-icon"></FontAwesomeIcon>
    );
    return <div className="loading-spinner">{spinnerIcon}</div>;
};

export default Spinner;
