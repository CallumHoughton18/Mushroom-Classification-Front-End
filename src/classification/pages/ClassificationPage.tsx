import React, {FunctionComponent} from "react";
import ClassificationForm from "../components/ClassificationForm";
import useAppNavigation from "../../navigation/hooks/useAppNavigation";
import {FormContents} from "../../shared/types";
import {ClassificationQueryData} from "../types";
import {IClassificationQuestion, IClassificationAPI} from "../interfaces";
import {useGetFormDefinition} from "../api/classificationAPIHooks";

type ClassificationPageProps = {
    classificationAPI: IClassificationAPI;
};
const ClassificationPage: FunctionComponent<ClassificationPageProps> = ({classificationAPI}) => {
    const navManager = useAppNavigation();
    const formQuestions =
        useGetFormDefinition(classificationAPI, () => {
            navManager.goToErrorPage({message: "Error fetching form definition"});
        }) ?? [];

    const navToClassificationResult = (formData: FormContents) => {
        const classificationData: ClassificationQueryData = {
            classificationData: formData
        };

        navManager.goToClassificationResultPage(classificationData);
    };

    const mockOptions: Array<IClassificationQuestion> = [];
    for (let index = 0; index < 3; index++) {
        const classificationQuestions: IClassificationQuestion = {
            id: `classques-${index}`,
            fieldName: `TestField${index}`,
            options: [],
            isRequired: true,
            value: ""
        };
        mockOptions[index] = classificationQuestions;
    }

    return (
        <div>
            <ClassificationForm
                questions={formQuestions}
                onSubmit={navToClassificationResult}
            ></ClassificationForm>
        </div>
    );
};

export default ClassificationPage;
