import React, {FunctionComponent, useState, FormEvent} from "react";

type SelectProps = {
    id: React.ReactText;
    options: Array<string>;
};

const Select: FunctionComponent<SelectProps> = (props) => {
    const [selectedVal, onSelectedVal] = useState(undefined);

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
    return (
        <React.Fragment>
            <label htmlFor={props.id.toString()}>Select an Option</label>
            <select
                title="Select an item"
                onChange={changeHandler}
                value={selectedVal}
                id={props.id.toString()}
            >
                {options}
            </select>
        </React.Fragment>
    );
};

export default Select;
