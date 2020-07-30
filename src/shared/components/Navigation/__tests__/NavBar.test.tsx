import React from "react";
import {render} from "@testing-library/react";
import NavBar from "../NavBar";
import useNavBarExpanded from "../../../hooks/useNavbarExpanded";
import {mocked} from "ts-jest/utils";
import {StaticRouter} from "react-router-dom";

jest.mock("../../../hooks/useNavbarExpanded");

describe("<NavBar/> render tests", () => {
    const renderAndAssertOnSnapshot = () => {
        //have to render using StaticRouter as NavBar component uses NavLink components
        const component = render(
            <StaticRouter location="someLocation">
                <NavBar />
            </StaticRouter>
        );
        expect(component).toMatchSnapshot();
    };

    describe("Expanded render tests", () => {
        beforeAll(() => {
            const useNavBarExpandedMock = mocked(useNavBarExpanded, true);
            useNavBarExpandedMock.mockReturnValue([true, jest.fn()]);
        });
        it("should render NavBar with expanded CSS class", () => {
            renderAndAssertOnSnapshot();
        });
    });

    describe("Collapsed render tests", () => {
        beforeAll(() => {
            const useNavBarExpandedMock = mocked(useNavBarExpanded, true);
            useNavBarExpandedMock.mockReturnValue([false, jest.fn()]);
        });
        it("should render NavBar without expanded CSS class", () => {
            renderAndAssertOnSnapshot();
        });
    });
});
