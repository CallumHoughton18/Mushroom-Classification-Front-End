import React from "react";
import {render} from "@testing-library/react";

import TechnologiesUsed from "../TechnologiesUsed";

const mockObserve = jest.fn();
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
    observe: mockObserve,
    unobserve: jest.fn(),
    disconnect: jest.fn()
});

beforeAll(() => {
    // IntersectionObserver isn't available when running tests, has to be mocked
    window.IntersectionObserver = mockIntersectionObserver;
});

describe("<TechnologiesUsed /> rendering test", () => {
    test("should display technologies used icons", () => {
        const renderedTechnologiesUsed = render(
            <TechnologiesUsed
                style="testStyle"
                iconsBackground="testBg"
                iconsColor="testColor"
                iconsSecondaryColor="testSecondaryColor"
                fadeInClass="fade-in-test"
            />
        );
        expect(renderedTechnologiesUsed).toMatchSnapshot();
    });
});

describe("<TechnologiesUsed /> hooks tests", () => {
    test("should apply fade in class to technologies used when in view", () => {
        const renderedTechnologiesUsed = render(
            <TechnologiesUsed
                style="testStyle"
                iconsBackground="testBg"
                iconsColor="testColor"
                iconsSecondaryColor="testSecondaryColor"
                fadeInClass="fade-in-test"
            />
        );
        expect(mockObserve).toHaveBeenCalled();
    });
});
