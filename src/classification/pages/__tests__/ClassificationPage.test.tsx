import {render, RenderResult, act, waitForElement, waitFor} from "@testing-library/react";
import React from "react";
import ClassificationPage from "../ClassificationPage";
import mockClassificationAPI from "../../../classification/api/mockClassificationAPI";

jest.mock("../../../navigation/hooks/useAppNavigation");

describe("<ClassificationPage /> render tests", () => {
    it("Should render ClassificationPage component", () => {
        const result = render(<ClassificationPage classificationAPI={mockClassificationAPI} />);
        waitFor(() => expect(result).toMatchSnapshot());
    });
});
