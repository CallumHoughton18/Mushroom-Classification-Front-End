import React, {ReactElement} from "react";
import {render} from "@testing-library/react";

import ClassificationForm, {ClassificationFormProps} from "../ClassificationForm";
import {GenerateMockClassificationQuestions} from "../../helpers/generateMockData";

type ClassificationFormSUTType = {
    Component: ReactElement<ClassificationFormProps>;
    onSubmit: jest.Mock;
};
function GenerateClassificationFormSUT() {
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
describe("<ClassificationForm /> render test", () => {
    it("should render ClassificationForm component", () => {
        const SUT = GenerateClassificationFormSUT();
        const renderedLinks = render(SUT.Component);
        expect(renderedLinks).toMatchSnapshot();
    });
});
