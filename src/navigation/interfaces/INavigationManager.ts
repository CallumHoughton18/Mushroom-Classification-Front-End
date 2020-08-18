import {ClassificationQueryData} from "../../classification/types";
import {FriendlyAppError} from "../../shared/types";

export default interface INavigationManager {
    goToAboutPage: () => void;
    goToClassificationPage: () => void;
    goToClassificationResultPage: (classificationData: ClassificationQueryData) => void;
    goToErrorPage: (errorMsg: FriendlyAppError) => void;
}
