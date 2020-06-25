import React, {FunctionComponent} from "react";

type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
};

const Button: FunctionComponent<ButtonProps> = (props) => {
    return <button onClick={props.onClick}>{props.children}</button>;
};

export default Button;
