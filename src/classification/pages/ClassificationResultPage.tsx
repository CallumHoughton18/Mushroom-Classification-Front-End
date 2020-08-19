import React, {FunctionComponent, Fragment} from "react";
import useGetNavData from "../../navigation/hooks/useGetNavData";
import {ClassificationQueryData} from "../types";
import {IClassificationAPI} from "../interfaces";
import {useIsPoisonous} from "../api/classificationAPIHooks";
import Spinner from "../../shared/components/UI/Spinner";
import Container from "../../shared/components/Layout/Container";

type ClassificationResultsPageProps = {
    classificationAPI: IClassificationAPI;
};

const ClassificationResultPage: FunctionComponent<ClassificationResultsPageProps> = ({
    classificationAPI
}) => {
    //TODO: for now this is fine, but ideally want a separate 'loading' hook
    const {classificationData} = useGetNavData<ClassificationQueryData>();
    const isPoisonous = useIsPoisonous(classificationAPI, classificationData);
    return (
        <Fragment>
            {isPoisonous === undefined ? (
                <Spinner />
            ) : (
                <div className="result-summary">
                    {JSON.stringify(classificationData)}
                    {isPoisonous !== undefined && (
                        <h2>
                            {isPoisonous
                                ? "The Mushroom is Predicted to be Poisonous!"
                                : "The Mushroom is Predicted to be Edible!"}
                        </h2>
                    )}
                </div>
            )}
        </Fragment>
    );
};

export default ClassificationResultPage;
