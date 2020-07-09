import {useHistory} from "react-router-dom";
import INavigationManager from "../interfaces/INavigationManager";
import {ClassificationQueryData} from "../../classification/types";

const useAppNavigation = (): INavigationManager => {
    const history = useHistory();

    const appNavigation: INavigationManager = {
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

    return appNavigation;
};

export default useAppNavigation;
