import {render, waitFor} from "@testing-library/react";
import React from "react";
import ClassificationPage from "../ClassificationPage";
import mockClassificationAPI from "../../../classification/api/mockClassificationAPI";
import {useGetFormDefinition} from "../../api/classificationAPIHooks";
import {mocked} from "ts-jest/utils";
import {generateMockOptions} from "../../../test_helpers/classificationTestHelpers";
import {LoadingState} from "../../../shared/enums";
import getClassificationDescriptions from "../../helpers/getClassificationDescriptions";

jest.mock("../../../navigation/hooks/useAppNavigation");
jest.mock("../../api/classificationAPIHooks");
jest.mock("../../helpers/getClassificationDescriptions");

describe("<ClassificationPage /> render tests", () => {
    const useGetFormDefinitionMock = mocked(useGetFormDefinition, true);
    const mockedGetClassificationDescriptions = mocked(getClassificationDescriptions, true);

    mockedGetClassificationDescriptions.mockImplementation(() => {
        return {
            "classques-1": {info: "information description goes here"},
            "classques-2": {info: "information description goes here", image: "test-image.png"}
        };
    });
    it("Should render ClassificationPage component", () => {
        useGetFormDefinitionMock.mockReturnValueOnce([generateMockOptions(), LoadingState.LOADED]);
        const result = render(<ClassificationPage classificationAPI={mockClassificationAPI} />);
        waitFor(() => expect(result).toMatchSnapshot());
    });
});
