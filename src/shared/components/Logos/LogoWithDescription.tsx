import React, {ReactNode} from "react";

type LogoWithDescriptionProps = {
    children?: ReactNode;
    logoClass: string;
    logoTitle: string;
    logoDescription: string;
};

const LogoWithDescription = (props: LogoWithDescriptionProps): JSX.Element => {
    return (
        <div className={props.logoClass}>
            {props.children}
            <h2>{props.logoTitle}</h2>
            <span>{props.logoDescription}</span>
        </div>
    );
};

export default LogoWithDescription;
