import React, {FunctionComponent} from "react";

import Introduction from "../components/Introduction";
import ProjectLinks from "../../shared/components/UI/ProjectLinks";

import sassVars from "../../stylesheets/abstractions/_variables.scss";
import TechnologiesRibbon from "../components/TechnologiesRibbon";
import AnimateWhenInView from "../../shared/components/Animation/AnimateWhenInView";

const AboutPage: FunctionComponent = () => {
    return (
        <div className="about-page">
            <div className="info-section">
                <Introduction />
                <ProjectLinks
                    style="links"
                    PrimaryLogoColor={sassVars.secondaryColorLighter}
                    SecondaryLogoColor={sassVars.primaryBackground}
                />
            </div>
            <div className="info-section">
                <AnimateWhenInView isVisibleClass="visible" isNotVisibleClass="fade-in-section">
                    <TechnologiesRibbon
                        iconsColor={sassVars.secondaryColorLighter}
                        iconsSecondaryColor={sassVars.secondaryColorLightest}
                        iconsBackground={sassVars.primaryBackground}
                        ribbonStyle="technologies-ribbon"
                    />
                </AnimateWhenInView>
            </div>
        </div>
    );
};

export default AboutPage;
