import React, {FunctionComponent, ReactNode, Fragment} from "react";
import ReactLogo from "../../shared/components/Logos/ReactLogo";
import PythonLogo from "../../shared/components/Logos/PythonLogo";
import TypeScriptLogo from "../../shared/components/Logos/TypeScriptLogo";

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
                <ReactLogo LogoPrimaryColor={props.iconsColor} />
                <TypeScriptLogo
                    LogoPrimaryColor={props.iconsColor}
                    LogoSecondaryColor={props.iconsBackground}
                />
                <PythonLogo
                    LogoPrimaryColor={props.iconsColor}
                    LogoSecondaryColor={props.iconsSecondaryColor}
                />
            </div>
        </Fragment>
    );
};

export default TechnologiesRibbon;
