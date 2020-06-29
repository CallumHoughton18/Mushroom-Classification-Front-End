import React, {FunctionComponent, ReactNode, Fragment} from "react";
import ReactLogo from "../../shared/components/Logos/ReactLogo";
import PythonLogo from "../../shared/components/Logos/PythonLogo";

type TechnologiesRibbonProps = {
    ribbonStyle: string;
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
                <PythonLogo
                    LogoPrimaryColor={props.iconsColor}
                    LogoSecondaryColor={props.iconsSecondaryColor}
                />
            </div>
        </Fragment>
    );
};

export default TechnologiesRibbon;
