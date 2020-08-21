import INavigationManager from "../navigation/interfaces/INavigationManager";

export function generateMockNav(): INavigationManager {
    return {
        goToClassificationPage: jest.fn(),
        goToAboutPage: jest.fn(),
        goToClassificationResultPage: jest.fn(),
        goToErrorPage: jest.fn()
    };
}
