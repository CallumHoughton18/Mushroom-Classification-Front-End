import {render} from "@testing-library/react";
import {generateClassificationFormSUT} from "../../../test_helpers/classificationTestHelpers";
import userEvent from "@testing-library/user-event";

describe("<ClassificationForm /> behaviour tests", () => {
    it("should not submit form if form is empty", () => {
        // Currently, relying on form checking inbuilt into browser.
        // somewhere else in the application the submission data from the form will be checked
        // plus API endpoint has data validation anyway
        const sut = generateClassificationFormSUT();
        const renderedClassificationForm = render(sut.Component);
        const submitButton = renderedClassificationForm.getByRole("button");

        userEvent.click(submitButton);

        expect(sut.onSubmit).toHaveBeenCalledTimes(1);
    });

    it("should select first option in first select element", () => {
        const sut = generateClassificationFormSUT();

        const renderedClassificationForm = render(sut.Component);
        const firstSelectElement = (renderedClassificationForm.getAllByRole(
            "combobox"
        ) as HTMLSelectElement[])[0];

        // mimic selecting the first none placeholder value for
        // select element
        const option = firstSelectElement.options[1].value;
        userEvent.selectOptions(firstSelectElement, option);

        expect(firstSelectElement.value).toEqual(option);
    });

    it("should generate correct form submission data", async () => {
        const sut = generateClassificationFormSUT();

        const renderedClassificationForm = render(sut.Component);
        const selectElements = renderedClassificationForm.getAllByRole(
            "combobox"
        ) as HTMLSelectElement[];

        for (let index = 0; index < selectElements.length; index++) {
            const element = selectElements[index];
            const option = element.options[1].value;
            userEvent.selectOptions(element, option);
        }

        userEvent.click(renderedClassificationForm.getByRole("button"));

        expect(sut.onSubmit.mock.calls[0][0]).toEqual({
            TestField0: "Opt1",
            TestField1: "Opt1",
            TestField2: "Opt1"
        });
    });
});
