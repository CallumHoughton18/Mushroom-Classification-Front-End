import React, {FunctionComponent, ChangeEvent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SelectOption} from "../../types";
import {moreInfoRole} from "../../constants";

type SelectProps = {
    id: React.ReactText;
    name: string;
    title: string;
    value: string;
    options: SelectOption[];
    required: boolean;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    viewInfoCallback?: () => void;
};

const Select: FunctionComponent<SelectProps> = (props) => {
    const options = props.options.map((optionVal, indx) => {
        return (
            <option value={optionVal.value} key={`${optionVal}-${indx}`}>
                {optionVal.displayname}
            </option>
        );
    });

    // Wrapped in anchor tag due to FontAwesomeIcon having to be mocked for tests
    // so this makes the onclick handler more testable
    const moreInfoIcon = props.viewInfoCallback ? (
        <a
            onClick={(e) => {
                e.preventDefault();
                props.viewInfoCallback();
            }}
            role={moreInfoRole}
        >
            <FontAwesomeIcon
                icon="question-circle"
                onClick={props.viewInfoCallback}
                className="more-info"
            ></FontAwesomeIcon>
        </a>
    ) : null;

    return (
        <React.Fragment>
            <label htmlFor={props.id.toString()}>
                {props.title} {moreInfoIcon}
            </label>
            <select
                name={props.name}
                required={props.required}
                title={props.title}
                onChange={props.onChange}
                value={props.value}
                id={props.id.toString()}
            >
                <option value="" disabled>
                    Select an option
                </option>
                {options}
            </select>
        </React.Fragment>
    );
};

export default Select;
