import React, {ReactNode} from "react";

type SectionProps = {
    sectionStyle: string;
    InnerContent: ReactNode;
    OuterContent?: ReactNode;
};

/**
 * A container with outer content, and internal content wrapped in an inner div
 * @param props
 */
const Container = (props: SectionProps): JSX.Element => {
    return (
        <div className={props.sectionStyle}>
            <div>{props.InnerContent}</div>
            {props.OuterContent}
        </div>
    );
};

export default Container;
