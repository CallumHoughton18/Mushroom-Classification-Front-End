import React, {ReactElement} from "react";
import ClassificationForm, {
    ClassificationFormProps
} from "../classification/components/ClassificationForm";
import {GenerateMockClassificationQuestions} from "../classification/helpers/generateMockData";
import {IClassificationQuestion} from "../classification/interfaces";

export type ClassificationFormSUTType = {
    Component: ReactElement<ClassificationFormProps>;
    onSubmit: jest.Mock;
};
export function generateClassificationFormSUT(): ClassificationFormSUTType {
    const mockOptions = GenerateMockClassificationQuestions();
    const onSubmitMock = jest.fn();
    const SUTWrapper: ClassificationFormSUTType = {
        Component: (
            <ClassificationForm
                questions={mockOptions}
                onSubmit={onSubmitMock}
            ></ClassificationForm>
        ),
        onSubmit: onSubmitMock
    };
    return SUTWrapper;
}

export function generateMockOptions(): IClassificationQuestion[] {
    const mockOptions: IClassificationQuestion[] = [];
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
    return mockOptions;
}
