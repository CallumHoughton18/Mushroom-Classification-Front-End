import {render} from "@testing-library/react";
import React from "react";
import {mocked} from "ts-jest/utils";
import userEvent from "@testing-library/user-event";
import useAppNavigation from "../../../navigation/hooks/useAppNavigation";
import ClassificationPage from "../ClassificationPage";
import INavigationManager from "../../../navigation/interfaces/INavigationManager";
import mockClassificationAPI from "../../../classification/api/mockClassificationAPI";

jest.mock("../../../navigation/hooks/useAppNavigation");

describe("<Classificationpage /> functional tests", () => {
    const mockedUseAppNavigation = mocked(useAppNavigation, true);
    const mockNav: INavigationManager = {
        GoToClassificationPage: jest.fn(),
        GoToAboutPage: jest.fn(),
        GoToClassificationResultPage: jest.fn()
    };

    beforeAll(() => {
        mockedUseAppNavigation.mockImplementation(() => {
            return mockNav;
        });
    });

    beforeEach(() => {
        mockedUseAppNavigation.mockClear();
    });

    it("Should perform navigation on successful form submission", () => {
        const {getByRole} = render(
            <ClassificationPage classificationAPI={mockClassificationAPI} />
        );

        userEvent.click(getByRole("button"));

        expect(mockNav.GoToClassificationResultPage).toHaveBeenCalledTimes(1);
    });
});
