import React, {FunctionComponent} from "react";
import useGetNavData from "../../navigation/hooks/useGetNavData";
import {ClassificationQueryData} from "../types";
import {IClassificationAPI} from "../interfaces";
import {useIsPoisonous} from "../api/classificationAPIHooks";

type ClassificationResultsPageProps = {
    classificationAPI: IClassificationAPI;
};

const ClassificationResultPage: FunctionComponent<ClassificationResultsPageProps> = ({
    classificationAPI
}) => {
    const {classificationData} = useGetNavData<ClassificationQueryData>();
    const isPoisonous = useIsPoisonous(classificationAPI, classificationData);

    return (
        <div>
            <h1>Classification Results Page, Form Data:</h1>
            {JSON.stringify(classificationData)}
            {isPoisonous !== undefined && <p>Mock API response: {isPoisonous.toString()}</p>}
        </div>
    );
};

export default ClassificationResultPage;
