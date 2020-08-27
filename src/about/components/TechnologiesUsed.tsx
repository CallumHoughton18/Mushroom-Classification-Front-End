import React, {ReactNode, Fragment, useRef} from "react";
import ReactLogo from "../../shared/components/Logos/ReactLogo";
import PythonLogo from "../../shared/components/Logos/PythonLogo";
import TypeScriptLogo from "../../shared/components/Logos/TypeScriptLogo";
import LogoWithDescription from "../../shared/components/Logos/LogoWithDescription";
import useWhenInView from "../../shared/hooks/useWhenInView";

export type TechnologiesUsedProps = {
    style: string;
    iconsBackground: string;
    iconsColor: string;
    iconsSecondaryColor: string;
    fadeInClass: string;
    children?: ReactNode;
};

const TechnologiesUsed = (props: TechnologiesUsedProps): JSX.Element => {
    const domRef = useRef();
    const isInView = useWhenInView(domRef);
    const style = `${props.style} ${isInView ? props.fadeInClass : "hide"}`;
    return (
        <Fragment>
            <h1>Powered By</h1>
            <div className={style} ref={domRef}>
                <LogoWithDescription
                    logoClass="logo-with-description"
                    logoTitle="ReactJS"
                    logoDescription="Front-End"
                >
                    <ReactLogo LogoPrimaryColor={props.iconsColor} Link="https://reactjs.org/" />
                </LogoWithDescription>
                <LogoWithDescription
                    logoClass="logo-with-description"
                    logoTitle="TypeScript"
                    logoDescription="Front-End"
                >
                    <TypeScriptLogo
                        Link="https://www.typescriptlang.org/"
                        LogoPrimaryColor={props.iconsColor}
                        LogoSecondaryColor={props.iconsBackground}
                    />
                </LogoWithDescription>
                <LogoWithDescription
                    logoClass="logo-with-description"
                    logoTitle="Python"
                    logoDescription="Back-End"
                >
                    <PythonLogo
                        Link="https://www.python.org/"
                        LogoPrimaryColor={props.iconsColor}
                        LogoSecondaryColor={props.iconsSecondaryColor}
                    />
                </LogoWithDescription>
            </div>
        </Fragment>
    );
};

export default TechnologiesUsed;
