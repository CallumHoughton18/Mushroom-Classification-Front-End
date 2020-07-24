import {render} from "@testing-library/react";
import {GenerateClassificationFormSUT} from "../../../test_helpers/classificationTestHelpers";

describe("<ClassificationForm /> behaviour tests", () => {
    it("should not submit form if form is empty", () => {
        const sut = GenerateClassificationFormSUT();

        const renderedClassificationForm = render(sut.Component);
        const submitButton = renderedClassificationForm.getByDisplayValue("Submit");
        submitButton.click();

        expect(sut.onSubmit).not.toHaveBeenCalled();
    });

    it("should select chosen value in select element", () => {
        const sut = GenerateClassificationFormSUT();

        const renderedClassificationForm = render(sut.Component);
        const firstSelectElement = renderedClassificationForm.getByTestId("classques-0");

        fail("Not implemented");
    });
});
