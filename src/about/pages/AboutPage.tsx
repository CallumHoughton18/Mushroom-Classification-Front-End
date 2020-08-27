import React from "react";

import Introduction from "../components/Introduction";
import ProjectLinks from "../components/ProjectLinks";

import sassVars from "../../stylesheets/abstractions/_variables.scss";
import TechnologiesRibbon from "../components/TechnologiesUsed";

const AboutPage = (): JSX.Element => {
    return (
        <section className="about-page">
            <section className="info-section">
                <Introduction mushroomColor={sassVars.secondaryColor} />
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
