import React, {FunctionComponent} from "react";
import "../scss/AboutPage.scss";

const AboutPage: FunctionComponent = () => {
    // TODO: maybe use grid layout as I want a 'footer' below the info and animation
    // linking back to github
    return (
        <div className="page">
            <div className="info">
                <h1>Mushroom Classification - A Machine Learning Example</h1>
                <p>
                    This application is the front end to interact with the{" "}
                    <a href="https://github.com/CallumHoughton18/Mushroom-Classification">
                        mushroom classification RESTful API
                    </a>{" "}
                    Which uses a model exposed via Pythons Flask web framework to predict whether a
                    mushroom is poisonous.
                    <b> It is NOT meant to be USED determine if a mushroom is edible or not!</b> It
                    is instead meant to demonstrate how a machine learning model can be exposed and
                    interacted with. The application owner is not responsible for use of the
                    application.
                </p>
            </div>
            <div className="animation"></div>
        </div>
    );
};

export default AboutPage;
