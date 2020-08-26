import INavigationManager from "../../navigation/interfaces/INavigationManager";
// This contains generic test helper functions for use across any tests

export function generateMockNav(): INavigationManager {
    return {
        goToClassificationPage: jest.fn(),
        goToAboutPage: jest.fn(),
        goToClassificationResultPage: jest.fn(),
        goToErrorPage: jest.fn()
    };
}
