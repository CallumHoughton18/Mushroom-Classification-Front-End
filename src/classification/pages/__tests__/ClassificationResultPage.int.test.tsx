import {render, waitFor} from "@testing-library/react";
import React from "react";
import mockClassificationAPI from "../../../classification/api/mockClassificationAPI";
import {mocked} from "ts-jest/utils";
import ClassificationResultPage from "../ClassificationResultPage";
import useGetNavData from "../../../navigation/hooks/useGetNavData";
import useAppNavigation from "../../../navigation/hooks/useAppNavigation";
import INavigationManager from "../../../navigation/interfaces/INavigationManager";
import {APIGet} from "../../types";
import {IClassificationAPI} from "../../interfaces";
import {generateMockNav} from "../../../test_helpers/testHelpers";

jest.mock("../../../navigation/hooks/useAppNavigation");
jest.mock("../../../navigation/hooks/useGetNavData");

describe("<ClassificationResultPage /> functionality tests", () => {
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
    const useGetNavDataMock = mocked(useGetNavData, true);
    useGetNavDataMock.mockReturnValue({});

    it("Should nav to error page on API Error", () => {
        const classificationAPIUnsuccessMock: IClassificationAPI = {
            getClassification: () => {
                const fail: APIGet<boolean> = {
                    success: false,
                    result: undefined
                };
                return Promise.resolve(fail);
            },
            getClassificationFormDefinition: mockClassificationAPI.getClassificationFormDefinition
        };
        render(<ClassificationResultPage classificationAPI={classificationAPIUnsuccessMock} />);

        waitFor(() => expect(mockNav.goToErrorPage).toHaveBeenCalledTimes(1));
    });
});
