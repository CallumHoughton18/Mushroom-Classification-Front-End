import React, {FunctionComponent} from "react";

import Introduction from "../components/Introduction";
import ProjectLinks from "../../shared/components/UI/ProjectLinks";

import sassVars from "../../stylesheets/abstractions/_variables.scss";

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
        </div>
    );
};

export default AboutPage;
