import {useHistory} from "react-router-dom";
import INavigationManager from "../interfaces/INavigationManager";
import {ClassificationQueryData} from "../../classification/types";
import {FriendlyAppError} from "../../shared/types";

const useAppNavigation = (): INavigationManager => {
    const history = useHistory();
    return {
        goToClassificationPage: () => {
            history.push("/Classification");
        },
        goToAboutPage: () => {
            history.push("/About");
        },
        goToClassificationResultPage: (data: ClassificationQueryData) => {
            history.push("/ClassificationResult", data);
        },
        goToErrorPage: (errorMsg: FriendlyAppError) => {
            history.push("/Error", errorMsg);
        }
    };
};

export default useAppNavigation;
