import {render, waitFor} from "@testing-library/react";
import React from "react";
import {mocked} from "ts-jest/utils";
import userEvent from "@testing-library/user-event";
import useAppNavigation from "../../../navigation/hooks/useAppNavigation";
import ClassificationPage from "../ClassificationPage";
import INavigationManager from "../../../navigation/interfaces/INavigationManager";
import mockClassificationAPI from "../../api/mockClassificationAPI";
import {IClassificationAPI} from "../../interfaces";
import {APIGet, FeatureDefinition} from "../../types";
import {generateMockNav} from "../../../test_helpers/testHelpers";

jest.mock("../../../navigation/hooks/useAppNavigation");

describe("<Classificationpage /> functional tests", () => {
    const mockedUseAppNavigation = mocked(useAppNavigation, true);
    const mockNav = generateMockNav();

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

        waitFor(() => {
            userEvent.click(getByRole("button"));
            expect(mockNav.goToClassificationResultPage).toHaveBeenCalledTimes(1);
        });
    });

    it("Should navigate to error page if getFormDef hook fails", () => {
        const classificationAPIUnSuccesseMock: IClassificationAPI = {
            getClassification: mockClassificationAPI.getClassification,
            getClassificationFormDefinition: () => {
                const fail: APIGet<FeatureDefinition[]> = {
                    success: false,
                    result: []
                };
                return Promise.resolve(fail);
            }
        };

        render(<ClassificationPage classificationAPI={classificationAPIUnSuccesseMock} />);
        waitFor(() => {
            expect(mockNav.goToErrorPage).toHaveBeenCalledTimes(1);
        });
    });
});
