import React, {FunctionComponent} from "react";
import ClassificationForm from "../components/ClassificationForm";
import useAppNavigation from "../../navigation/hooks/useAppNavigation";
import {FormContents} from "../../shared/types";
import {ClassificationQueryData} from "../types";
import {IClassificationQuestion} from "../interfaces";

const ClassificationPage: FunctionComponent = () => {
    const navManager = useAppNavigation();

    const navToClassificationResult = (formData: FormContents) => {
        const classificationData: ClassificationQueryData = {
            classificationData: formData
        };

        navManager.GoToClassificationResultPage(classificationData);
    };

    const mockOptions: Array<IClassificationQuestion> = [];
    for (let index = 0; index < 3; index++) {
        const classificationQuestions: IClassificationQuestion = {
            id: `classques-${index}`,
            fieldName: `TestField${index}`,
            options: ["Opt1", "Opt2", "Opt3"],
            isRequired: true,
            value: ""
        };
        mockOptions[index] = classificationQuestions;
    }

    return (
        <div>
            <ClassificationForm
                questions={mockOptions}
                onSubmit={navToClassificationResult}
            ></ClassificationForm>
        </div>
    );
};

export default ClassificationPage;
