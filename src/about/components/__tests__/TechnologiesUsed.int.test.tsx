import {ReactElement} from "react";
import {render} from "@testing-library/react";
import {TechnologiesUsedProps} from "../TechnologiesUsed";
import {generateTechnologiesUsedSUT} from "../../../test_helpers/helpers/aboutTestHelpers";

let technologiesUsedComponent: ReactElement<TechnologiesUsedProps>;

beforeEach(() => {
    technologiesUsedComponent = generateTechnologiesUsedSUT();
});

describe("useWhenInView integration with TechnologiesUsed component tests", () => {
    const observe = jest.fn();
    const unobserve = jest.fn();
    const mockIntersectionObserver = jest.fn();

    beforeAll(() => {
        mockIntersectionObserver.mockReturnValue({
            observe,
            unobserve,
            disconnect: jest.fn()
        });
        window.IntersectionObserver = mockIntersectionObserver;
    });

    beforeEach(() => {
        mockIntersectionObserver.mockClear();
        observe.mockClear();
        unobserve.mockClear();
    });

    it("should call observe using elements dom reference", () => {
        render(technologiesUsedComponent);

        expect(observe).toHaveBeenCalledTimes(1);
    });

    it("should unobserve elements dom reference on unmount", () => {
        const {unmount} = render(technologiesUsedComponent);
        unmount();

        expect(unobserve).toHaveBeenCalledTimes(1);
    });
});
