import {ClassificationQueryData} from "../../classification/types";

export default interface INavigationManager {
    GoToAboutPage: () => void;
    GoToClassificationPage: () => void;
    GoToClassificationResultPage: (classifcationData: ClassificationQueryData) => void;
}
