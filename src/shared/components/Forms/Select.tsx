import React, {FunctionComponent, useState, FormEvent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";

type SelectProps = {
    id: React.ReactText;
    options: Array<string>;
    required: boolean;
    viewInfoCallback?: () => void;
};

const Select: FunctionComponent<SelectProps> = (props) => {
    const [selectedVal, onSelectedVal] = useState("");

    const changeHandler = (event: FormEvent<HTMLSelectElement>) => {
        event.preventDefault();
        onSelectedVal(event.currentTarget.value);
    };

    const options = props.options.map((optionVal, indx) => {
        return (
            <option value={optionVal} key={`${optionVal}-${indx}`}>
                {optionVal}
            </option>
        );
    });

    const moreInfoIcon = props.viewInfoCallback ? (
        <FontAwesomeIcon
            icon={faQuestionCircle}
            onClick={props.viewInfoCallback}
            className="more-info"
        ></FontAwesomeIcon>
    ) : null;
    return (
        <React.Fragment>
            <label htmlFor={props.id.toString()}>Select an Option {moreInfoIcon}</label>
            <select
                required={props.required}
                title="Select an option"
                onChange={changeHandler}
                value={selectedVal}
                id={props.id.toString()}
            >
                <option value="" disabled selected>
                    Select an option
                </option>
                {options}
            </select>
        </React.Fragment>
    );
};

export default Select;
