import React, {FunctionComponent, ChangeEvent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SelectOption} from "../../types";

type SelectProps = {
    id: React.ReactText;
    name: string;
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

    const moreInfoIcon = props.viewInfoCallback ? (
        <FontAwesomeIcon
            icon="question-circle"
            onClick={props.viewInfoCallback}
            className="more-info"
        ></FontAwesomeIcon>
    ) : null;

    return (
        <React.Fragment>
            <label htmlFor={props.id.toString()}>
                {props.name} {moreInfoIcon}
            </label>
            <select
                name={props.name}
                required={props.required}
                title={props.name}
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
