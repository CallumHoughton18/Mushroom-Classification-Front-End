import React, {ReactElement} from "react";
import ClassificationForm, {
    ClassificationFormProps
} from "../classification/components/ClassificationForm";
import {GenerateMockClassificationQuestions} from "../classification/helpers/generateMockData";

export type ClassificationFormSUTType = {
    Component: ReactElement<ClassificationFormProps>;
    onSubmit: jest.Mock;
};
export function GenerateClassificationFormSUT(): ClassificationFormSUTType {
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
