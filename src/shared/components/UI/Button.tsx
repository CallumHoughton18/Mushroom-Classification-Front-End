import React, { FunctionComponent } from 'react';

type ButtonProps  = {
    value: string
};

const Button: FunctionComponent<ButtonProps> = (props) => {
    return (
    <button>{props.value}</button>
    )
}

export default Button;