import {render} from "@testing-library/react";
import {generateClassificationFormSUT} from "../../../test_helpers/classificationTestHelpers";
//TODO: Need to wrap some rendering in act()

// These are purely unit tests, so shouldn't be dependent on internal hook implementation
// but it would be overdoing it to mock the useForm hook as it shouldn't lead to a flakey test

describe("<ClassificationForm /> render test", () => {
    it("should render ClassificationForm component", () => {
        const sut = generateClassificationFormSUT();
        const renderedClassificationForm = render(sut.Component);
        expect(renderedClassificationForm).toMatchSnapshot();
    });
});

//TODO: add test for when form definition is null
