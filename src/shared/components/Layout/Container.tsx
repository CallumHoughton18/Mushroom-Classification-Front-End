import React, {FunctionComponent, ReactNode} from "react";

type SectionProps = {
    sectionStyle: string;
    InnerContent: ReactNode;
    OuterContent?: ReactNode;
};

const Container: FunctionComponent<SectionProps> = (props) => {
    return (
        <div className={props.sectionStyle}>
            <div>{props.InnerContent}</div>
            {props.OuterContent}
        </div>
    );
};

export default Container;
