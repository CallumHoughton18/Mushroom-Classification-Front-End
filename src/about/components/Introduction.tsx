import React, {FunctionComponent, Fragment} from "react";
import Container from "../../shared/components/Layout/Container";
import Mushroom from "../../shared/components/Icons/Mushroom";

type introductionPropsType = {
    mushroomColor: string;
};
const Introduction: FunctionComponent<introductionPropsType> = ({mushroomColor}) => {
    const IntroductionText = (
        <Fragment>
            <h1>Mushroom Classification - A Machine Learning Example</h1>
            <p>
                This application is the front end to interact with the{" "}
                <a href="https://github.com/CallumHoughton18/Mushroom-Classification">
                    mushroom classification RESTful API
                </a>{" "}
                Which uses a model exposed via Flask, a web framework for Python, to predict whether
                a mushroom is poisonous.
                <b> It is NOT meant to be USED to determine if a mushroom is edible or not!</b> It
                is instead meant to demonstrate how a machine learning model can be exposed and
                interacted with. The application owner is not responsible for your use of the
                application.
            </p>
        </Fragment>
    );

    const introIcon = <Mushroom color={mushroomColor} className="mushroom" />;

    return (
        <Container
            sectionStyle="inner-content"
            InnerContent={IntroductionText}
            OuterContent={introIcon}
        ></Container>
    );
};

export default Introduction;
