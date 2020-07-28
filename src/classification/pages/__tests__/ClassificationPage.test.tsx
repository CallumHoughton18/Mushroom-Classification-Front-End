import {render} from "@testing-library/react";
import React from "react";
import ClassificationPage from "../ClassificationPage";

jest.mock("../../../navigation/hooks/useAppNavigation");

describe("<ClassificationPage /> render test", () => {
    it("Should render ClassificationPage component", () => {
        const renderedClassificationPage = render(<ClassificationPage />);
        expect(renderedClassificationPage).toMatchSnapshot();
    });
});
