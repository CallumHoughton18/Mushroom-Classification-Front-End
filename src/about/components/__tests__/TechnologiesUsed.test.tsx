import {ReactElement} from "react";
import {render} from "@testing-library/react";
import {mocked} from "ts-jest/utils";
import useWhenInView from "../../../shared/hooks/useWhenInView";
import {TechnologiesUsedProps} from "../TechnologiesUsed";
import {generateTechnologiesUsedSUT} from "../../../test_helpers/helpers/aboutTestHelpers";

jest.mock("../../../shared/hooks/useWhenInView");

let technologiesUsedComponent: ReactElement<TechnologiesUsedProps>;

beforeEach(() => {
    technologiesUsedComponent = generateTechnologiesUsedSUT();
});
describe("<TechnologiesUsed /> hidden rendering test", () => {
    it("should display technologies used icons, with hidden style", () => {
        const renderedTechnologiesUsed = render(technologiesUsedComponent);
        expect(renderedTechnologiesUsed).toMatchSnapshot();
    });
});

describe("<TechnologiesUsed /> fade-in rendering test", () => {
    beforeEach(() => {
        const mockedUseWhenInView = mocked(useWhenInView, true);
        mockedUseWhenInView.mockImplementation(() => {
            return true;
        });
    });
    it("should apply fade in class to technologies used when in view", () => {
        const renderedTechnologiesUsed = render(technologiesUsedComponent);
        expect(renderedTechnologiesUsed).toMatchSnapshot();
    });
});
