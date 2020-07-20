import React, {FunctionComponent, useState, useEffect} from "react";
import useGetNavData from "../../navigation/hooks/useGetNavData";
import {ClassificationQueryData} from "../types";
import mockClassificationAPI from "../api/mockClassificationAPI";
import {IClassificationAPI} from "../interfaces";

const ClassificationResultPage: FunctionComponent = () => {
    const {classificationData} = useGetNavData<ClassificationQueryData>();
    const [isPoisonous, setIsPoisonous] = useState(undefined);
    const classificationAPI: IClassificationAPI = mockClassificationAPI;

    //TODO: could be turned into a hook
    useEffect(() => {
        async function doClassification() {
            const test = await classificationAPI.GetClassification(classificationData);
            setIsPoisonous(test);
        }
        doClassification();
    }, [setIsPoisonous, classificationData, classificationAPI]);

    return (
        <div>
            <h1>Classification Results Page, Form Data:</h1>
            {JSON.stringify(classificationData)}
            {isPoisonous !== undefined && <p>Mock API response: {isPoisonous.toString()}</p>}
        </div>
    );
};

export default ClassificationResultPage;
