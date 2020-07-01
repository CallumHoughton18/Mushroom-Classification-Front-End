import React, {FunctionComponent, ReactNode, Fragment} from "react";
import ReactLogo from "../../shared/components/Logos/ReactLogo";
import PythonLogo from "../../shared/components/Logos/PythonLogo";
import TypeScriptLogo from "../../shared/components/Logos/TypeScriptLogo";
import LogoWithDescription from "../../shared/components/Logos/LogoWithDescription";

type TechnologiesRibbonProps = {
    ribbonStyle: string;
    iconsBackground: string;
    iconsColor: string;
    iconsSecondaryColor: string;
    children?: ReactNode;
};

const TechnologiesRibbon: FunctionComponent<TechnologiesRibbonProps> = (props) => {
    return (
        <Fragment>
            <h1>Powered By:</h1>
            <div className={props.ribbonStyle}>
                <LogoWithDescription
                    logoClass="logo-with-description"
                    logoTitle="ReactJS"
                    logoDescription="Front-End"
                >
                    <ReactLogo LogoPrimaryColor={props.iconsColor} />
                </LogoWithDescription>
                <LogoWithDescription
                    logoClass="logo-with-description"
                    logoTitle="TypeScript"
                    logoDescription="Front-End"
                >
                    <TypeScriptLogo
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
                        LogoPrimaryColor={props.iconsColor}
                        LogoSecondaryColor={props.iconsSecondaryColor}
                    />
                </LogoWithDescription>
            </div>
        </Fragment>
    );
};

export default TechnologiesRibbon;
