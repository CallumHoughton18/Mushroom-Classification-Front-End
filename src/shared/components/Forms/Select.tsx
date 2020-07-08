import React, {FunctionComponent, ChangeEvent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";

type SelectProps = {
    id: React.ReactText;
    name: string;
    value: string;
    options: Array<string>;
    required: boolean;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    viewInfoCallback?: () => void;
};

const Select: FunctionComponent<SelectProps> = (props) => {
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
                name={props.name}
                required={props.required}
                title="Select an option"
                onChange={props.onChange}
                value={props.value}
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
