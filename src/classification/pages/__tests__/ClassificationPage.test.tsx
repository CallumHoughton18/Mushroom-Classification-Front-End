import {render, waitFor} from "@testing-library/react";
import React from "react";
import ClassificationPage from "../ClassificationPage";
import mockClassificationAPI from "../../../classification/api/mockClassificationAPI";
import {useGetFormDefinition} from "../../api/classificationAPIHooks";
import {mocked} from "ts-jest/utils";
import {generateMockOptions} from "../../../test_helpers/classificationTestHelpers";
import {LoadingState} from "../../../shared/enums";

jest.mock("../../../navigation/hooks/useAppNavigation");
jest.mock("../../api/classificationAPIHooks");

describe("<ClassificationPage /> render tests", () => {
    const useGetFormDefinitionMock = mocked(useGetFormDefinition, true);
    it("Should render ClassificationPage component", () => {
        useGetFormDefinitionMock.mockReturnValueOnce([generateMockOptions(), LoadingState.LOADED]);
        const result = render(<ClassificationPage classificationAPI={mockClassificationAPI} />);
        waitFor(() => expect(result).toMatchSnapshot());
    });
});
