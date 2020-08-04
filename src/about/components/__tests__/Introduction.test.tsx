import React from "react";
import {render} from "@testing-library/react";

import Introduction from "../Introduction";

describe("<Introduction /> render test", () => {
    it("should display introduction text and graphic", () => {
        const renderedIntroduction = render(<Introduction />);
        expect(renderedIntroduction).toMatchSnapshot();
    });
});