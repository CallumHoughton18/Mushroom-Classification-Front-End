import React, {FunctionComponent} from "react";
import "../scss/AboutPage.scss";
import GithubLogo from "../shared/components/Logos/GithubLogo";
import DockerLogo from "../shared/components/Logos/DockerLogo";
const AboutPage: FunctionComponent = () => {
    //TODO: this really needs to be split up into separate components, e.g InfoBody, ProjectLinks, Mushroom
    return (
        <div className="page">
            <div className="info-body">
                <div className="info">
                    <h1>Mushroom Classification - A Machine Learning Example</h1>
                    <p>
                        This application is the front end to interact with the{" "}
                        <a href="https://github.com/CallumHoughton18/Mushroom-Classification">
                            mushroom classification RESTful API
                        </a>{" "}
                        Which uses a model exposed via Pythons Flask web framework to predict
                        whether a mushroom is poisonous.
                        <b>
                            {" "}
                            It is NOT meant to be USED determine if a mushroom is edible or not!
                        </b>{" "}
                        It is instead meant to demonstrate how a machine learning model can be
                        exposed and interacted with. The application owner is not responsible for
                        use of the application.
                    </p>
                </div>
                <div className="mushroom"></div>
            </div>
            <div className="links">
                <GithubLogo LogoPrimaryColor="#3a5a40" />
                <DockerLogo LogoPrimaryColor="#3a5a40" LogoSecondaryColor="#eceff4" />
            </div>
        </div>
    );
};

export default AboutPage;
