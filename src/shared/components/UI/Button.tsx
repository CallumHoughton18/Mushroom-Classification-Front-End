import React from "react";

type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
};

const Button = (props: ButtonProps): JSX.Element => {
    return <button onClick={props.onClick}>{props.children}</button>;
};

export default Button;
