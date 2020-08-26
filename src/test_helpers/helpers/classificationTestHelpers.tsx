import React, {ReactElement} from "react";
import ClassificationForm, {
    ClassificationFormProps
} from "../../classification/components/ClassificationForm";
import {GenerateMockClassificationQuestions} from "../../classification/helpers/generateMockData";
import {IClassificationQuestion} from "../../classification/interfaces";

export type ClassificationFormSUTType = {
    Component: ReactElement<ClassificationFormProps>;
    onSubmit: jest.Mock;
    hasInfoPopup: jest.Mock;
    viewInfoCallback: jest.Mock;
};

/**
 * Wrapper function to generate ClassificationForm SUT with properties
 * for callback methods for easy assertions
 */
export function generateClassificationFormSUT(): ClassificationFormSUTType {
    const mockOptions = GenerateMockClassificationQuestions();
    const onSubmitMock = jest.fn();
    const hasInfoPopupMock = jest.fn();
    const viewInfoCallbackMock = jest.fn();

    const SUTWrapper: ClassificationFormSUTType = {
        Component: (
            <ClassificationForm
                viewInfoCallback={viewInfoCallbackMock}
                hasInfoPopup={hasInfoPopupMock}
                questions={mockOptions}
                onSubmit={onSubmitMock}
            ></ClassificationForm>
        ),
        onSubmit: onSubmitMock,
        hasInfoPopup: hasInfoPopupMock,
        viewInfoCallback: viewInfoCallbackMock
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
