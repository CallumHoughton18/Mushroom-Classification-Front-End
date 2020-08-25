import {render, waitFor} from "@testing-library/react";
import React, {ReactNode} from "react";
import {mocked} from "ts-jest/utils";
import userEvent from "@testing-library/user-event";
import useAppNavigation from "../../../navigation/hooks/useAppNavigation";
import ClassificationPage from "../ClassificationPage";
import mockClassificationAPI from "../../api/mockClassificationAPI";
import {IClassificationAPI} from "../../interfaces";
import {APIGet, FeatureDefinition} from "../../types";
import {generateMockNav} from "../../../test_helpers/testHelpers";
import getClassificationDescriptions from "../../helpers/getClassificationDescriptions";
import {moreInfoRole} from "../../../shared/constants";

jest.mock("../../../navigation/hooks/useAppNavigation");
jest.mock("../../../shared/hooks/domHooks", () => {
    return {
        useGetElement: () => {
            return {};
        }
    };
});
jest.mock("../../helpers/getClassificationDescriptions");
jest.mock("react-dom", () => {
    const org = jest.requireActual("react-dom");
    return {
        ...org,
        createPortal: (node: ReactNode) => node
    };
});

describe("<Classificationpage /> functional tests", () => {
    const mockedUseAppNavigation = mocked(useAppNavigation, true);
    const mockedGetClassificationDescriptions = mocked(getClassificationDescriptions, true);
    const mockNav = generateMockNav();

    beforeAll(() => {
        mockedUseAppNavigation.mockImplementation(() => {
            return mockNav;
        });
        mockedGetClassificationDescriptions.mockImplementation(() => {
            return {
                "classques-1": {info: "information description goes here"},
                "classques-2": {info: "information description goes here", image: "test-image.png"}
            };
        });
    });

    beforeEach(() => {
        mockedUseAppNavigation.mockClear();
        mockedGetClassificationDescriptions.mockClear();
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

    it("Should display modal", () => {
        const page = render(<ClassificationPage classificationAPI={mockClassificationAPI} />);

        waitFor(() => {
            const moreInfoBtns = page.getAllByRole(moreInfoRole)[0];
            moreInfoBtns.click();
            expect(page).toMatchSnapshot();
        });
    });
});
