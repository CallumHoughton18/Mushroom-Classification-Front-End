import React, {FunctionComponent} from "react";
import useGetNavData from "../../navigation/hooks/useGetNavData";
import {ClassificationQueryData} from "../types";

const ClassificationResultPage: FunctionComponent = () => {
    const {classificationData} = useGetNavData<ClassificationQueryData>();
    return (
        <div>
            <h1>Classification Results Page, Form Data:</h1>
            {JSON.stringify(classificationData)}
        </div>
    );
};

export default ClassificationResultPage;
