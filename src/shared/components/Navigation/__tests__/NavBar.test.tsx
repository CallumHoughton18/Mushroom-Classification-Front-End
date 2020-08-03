import React from "react";
import {render} from "@testing-library/react";
import NavBar from "../NavBar";
import useNavBarExpanded from "../../../hooks/useNavbarExpanded";
import {mocked} from "ts-jest/utils";
import {StaticRouter} from "react-router-dom";
import {sassVariablesType} from "../../../../stylesheets/abstractions/_variables.scss";

jest.mock("../../../hooks/useNavbarExpanded");

const hamburgerWidth = 600;
jest.mock("../../../../stylesheets/abstractions/_variables.scss", () => {
    const mockSassVars: sassVariablesType = {
        maxWidthForHamburger: "600px",
        secondaryColor: "",
        secondaryColorLighter: "",
        secondaryColorDarkest: "",
        secondaryColorHighlight: "",
        secondaryColorLightest: "",
        primaryColor: "",
        primaryColorAlt: "",
        primaryBackground: "",
        primaryBackgroundLighter: "",
        primaryColorHighlight: ""
    };
    return mockSassVars;
});

describe("<NavBar/> render tests", () => {
    const useNavBarExpandedMock = mocked(useNavBarExpanded, true);
    beforeAll(() => {
        // default navbar to not be expanded, mock can be changed on test case basis.
        useNavBarExpandedMock.mockReturnValue([false, jest.fn()]);
    });

    afterAll(() => {
        useNavBarExpandedMock.mockClear();
    });

    const renderNavBarInRouter = () => {
        return render(
            <StaticRouter location="someLocation">
                <NavBar />
            </StaticRouter>
        );
    };

    const renderAndAssertOnSnapshot = () => {
        //have to render using StaticRouter as NavBar component uses NavLink components
        const renderedComp = renderNavBarInRouter();
        expect(renderedComp).toMatchSnapshot();
    };

    it("Should parse px maxWidthForHamburger correctly and pass to useNavBar hook", () => {
        renderNavBarInRouter();
        expect(useNavBarExpandedMock.mock.calls[0][0]).toBe(hamburgerWidth);
    });

    describe("Expanded render tests", () => {
        beforeAll(() => {
            useNavBarExpandedMock.mockReturnValue([true, jest.fn()]);
        });
        it("should render NavBar with expanded CSS class", () => {
            renderAndAssertOnSnapshot();
        });
    });

    describe("Collapsed render tests", () => {
        beforeAll(() => {
            useNavBarExpandedMock.mockReturnValue([false, jest.fn()]);
        });
        it("should render NavBar without expanded CSS class", () => {
            renderAndAssertOnSnapshot();
        });
    });
});
