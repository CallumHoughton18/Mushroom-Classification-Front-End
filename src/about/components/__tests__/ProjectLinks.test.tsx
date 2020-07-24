import React from "react";
import {render} from "@testing-library/react";

import ProjectLinks from "../ProjectLinks";

describe("<ProjectLinks /> render test", () => {
    it("should display Github and Docker project links", () => {
        const renderedLinks = render(
            <ProjectLinks PrimaryLogoColor="green" SecondaryLogoColor="blue" style="" />
        );
        expect(renderedLinks).toMatchSnapshot();
    });
});
