import React, {FunctionComponent} from "react";
import useGetNavData from "../../navigation/hooks/useGetNavData";
import {ClassificationQueryData} from "../types";
import {IClassificationAPI} from "../interfaces";
import {useIsPoisonous} from "../api/classificationAPIHooks";
import Spinner from "../../shared/components/UI/Spinner";

type ClassificationResultsPageProps = {
    classificationAPI: IClassificationAPI;
};

const ClassificationResultPage: FunctionComponent<ClassificationResultsPageProps> = ({
    classificationAPI
}) => {
    //TODO: for now this is fine, but ideally want a separate 'loading' hook
    const {classificationData} = useGetNavData<ClassificationQueryData>();
    const isPoisonous = useIsPoisonous(classificationAPI, classificationData);

    const genPoisonousText = (isPoisonous: boolean) => {
        return (
            <h2>
                {isPoisonous
                    ? "The Mushroom is Predicted to be Poisonous!"
                    : "The Mushroom is Predicted to be Edible!"}
            </h2>
        );
    };
    const resultSummary =
        isPoisonous === undefined ? (
            <Spinner />
        ) : (
            <section className="container">{genPoisonousText(isPoisonous)}</section>
        );

    return resultSummary;
};

export default ClassificationResultPage;
