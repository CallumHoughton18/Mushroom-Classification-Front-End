import React, {FunctionComponent} from "react";

import Introduction from "../components/Introduction";
import ProjectLinks from "../components/ProjectLinks";

import sassVars from "../../stylesheets/abstractions/_variables.scss";
import TechnologiesRibbon from "../components/TechnologiesUsed";

const AboutPage: FunctionComponent = () => {
    return (
        <section className="about-page">
            <section className="info-section">
                <Introduction />
                <ProjectLinks
                    style="project-links"
                    PrimaryLogoColor={sassVars.secondaryColorLighter}
                    SecondaryLogoColor={sassVars.primaryBackground}
                />
            </section>
            <section className="info-section">
                <TechnologiesRibbon
                    iconsColor={sassVars.secondaryColorLighter}
                    iconsSecondaryColor={sassVars.secondaryColorLightest}
                    iconsBackground={sassVars.primaryBackground}
                    style="technologies-used"
                    fadeInClass="fade-in"
                />
            </section>
        </section>
    );
};

export default AboutPage;
