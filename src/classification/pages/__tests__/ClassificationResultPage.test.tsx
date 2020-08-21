import {render, waitFor} from "@testing-library/react";
import React from "react";
import {useIsPoisonous} from "../../api/classificationAPIHooks";
import mockClassificationAPI from "../../../classification/api/mockClassificationAPI";
import {mocked} from "ts-jest/utils";
import {sassVariablesType} from "../../../stylesheets/abstractions/_variables.scss";
import ClassificationResultPage from "../ClassificationResultPage";
import useGetNavData from "../../../navigation/hooks/useGetNavData";
import useAppNavigation from "../../../navigation/hooks/useAppNavigation";
import INavigationManager from "../../../navigation/interfaces/INavigationManager";

jest.mock("../../../navigation/hooks/useAppNavigation");
jest.mock("../../api/classificationAPIHooks");
jest.mock("../../../navigation/hooks/useGetNavData");
jest.mock("../../../../stylesheets/abstractions/_variables.scss", () => {
    const mockSassVars: sassVariablesType = {
        maxWidthForHamburger: "600px",
        secondaryColor: "green",
        secondaryColorLighter: "",
        secondaryColorDarkest: "",
        secondaryColorHighlight: "",
        secondaryColorLightest: "",
        primaryColor: "",
        primaryColorAlt: "",
        primaryBackground: "",
        primaryBackgroundLighter: "",
        primaryColorHighlight: "",
        warningColor: "red"
    };
    return mockSassVars;
});

describe("<ClassificationResultPage /> render tests", () => {
    const useGetNavDataMock = mocked(useGetNavData, true);
    useGetNavDataMock.mockReturnValue({});
    const useIsPoisonousMock = mocked(useIsPoisonous, true);

    it("Should render ClassificationResultPage for poisonous result", () => {
        useIsPoisonousMock.mockImplementationOnce(() => true);
        const result = render(
            <ClassificationResultPage classificationAPI={mockClassificationAPI} />
        );
        waitFor(() => expect(result).toMatchSnapshot());
    });

    it("Should render ClassificationResultPage for edible result", () => {
        useIsPoisonousMock.mockImplementationOnce(() => false);
        const result = render(
            <ClassificationResultPage classificationAPI={mockClassificationAPI} />
        );
        waitFor(() => expect(result).toMatchSnapshot());
    });
});
