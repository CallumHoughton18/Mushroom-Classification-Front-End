import {useHistory} from "react-router-dom";
import INavigationManager from "../interfaces/INavigationManager";
import {ClassificationQueryData} from "../../classification/types";

const useAppNavigation = (): INavigationManager => {
    const history = useHistory();
    return {
        GoToClassificationPage: () => {
            history.push("/Classification");
        },
        GoToAboutPage: () => {
            history.push("/About");
        },
        GoToClassificationResultPage: (data: ClassificationQueryData) => {
            history.push("/ClassificationResult", data);
        }
    };
};

export default useAppNavigation;
