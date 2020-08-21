import React, {FunctionComponent} from "react";
import useGetNavData from "../../navigation/hooks/useGetNavData";
import useAppNavigation from "../../navigation/hooks/useAppNavigation";
import {ClassificationQueryData} from "../types";
import {IClassificationAPI} from "../interfaces";
import {useIsPoisonous} from "../api/classificationAPIHooks";
import Spinner from "../../shared/components/UI/Spinner";
import Mushroom from "../../shared/components/Icons/Mushroom";
import sassVars from "../../stylesheets/abstractions/_variables.scss";

type ClassificationResultsPageProps = {
    classificationAPI: IClassificationAPI;
};

const ClassificationResultPage: FunctionComponent<ClassificationResultsPageProps> = ({
    classificationAPI
}) => {
    //TODO: for now this is fine, but ideally want a separate 'loading' hook
    const {classificationData} = useGetNavData<ClassificationQueryData>();
    const navManager = useAppNavigation();
    const isPoisonous = useIsPoisonous(classificationAPI, classificationData, () => {
        navManager.goToErrorPage({message: "Error Retrieving Classification Result"});
    });

    const genPoisonousText = (isPoisonous: boolean) => {
        return (
            <h2 className="result-text">
                {isPoisonous
                    ? "The Mushroom is Predicted to be Poisonous!"
                    : "The Mushroom is Predicted to be Edible!"}
            </h2>
        );
    };
    const warningColor = isPoisonous ? sassVars.warningColor : sassVars.secondaryColor;

    const resultSummary =
        isPoisonous === undefined ? (
            <Spinner />
        ) : (
            <section className="result-page">
                <Mushroom color={warningColor} className="left-icon" />
                {genPoisonousText(isPoisonous)}
                <Mushroom color={warningColor} className="right-icon" />
            </section>
        );

    return resultSummary;
};

export default ClassificationResultPage;
