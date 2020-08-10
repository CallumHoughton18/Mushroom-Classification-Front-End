import React, {FunctionComponent, Fragment} from "react";
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
    // for Spinner rendering, and isPoisonous could return an object indicating
    // if there was an API error for better error handling
    const {classificationData} = useGetNavData<ClassificationQueryData>();
    const isPoisonous = useIsPoisonous(classificationAPI, classificationData);
    return (
        <Fragment>
            {isPoisonous === undefined ? (
                <Spinner />
            ) : (
                <div className="page">
                    <h1>Classification Results Page, Form Data:</h1>
                    {JSON.stringify(classificationData)}
                    {isPoisonous !== undefined && (
                        <p>Mock API response: {isPoisonous.toString()}</p>
                    )}
                </div>
            )}
        </Fragment>
    );
};

export default ClassificationResultPage;
