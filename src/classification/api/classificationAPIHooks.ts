import {useState, useEffect, useRef} from "react";
import {IClassificationAPI, IClassificationQuestion} from "../interfaces";
import {FormContents} from "../../shared/types";
import {LoadingState} from "../../shared/enums";
import {convertFeatureDefToClassQues} from "./classificationAPIHelpers";

// To me there seems to be a fair amount of boilerplate here to get
// a safe async hook to work for API requests...if I wanted to spend more time
// on this it'd be worth refactoring onto a more generic 'getAPIData'.

/**
 * Hook to check if given @param classificationData leads to a poisonous or edible prediction.
 * @param classificationAPI an instance of @type {IClassificationAPI}
 * @param classificationData completed form data to be used for a prediction
 * @param onErrorCallback callback to call if any errors occur calling the API
 * @returns @type {boolean} poisonous/not poisonous @type {LoadingState} state of loading data from API
 */
export const useIsPoisonous = (
    classificationAPI: IClassificationAPI,
    classificationData: FormContents,
    onErrorCallback: () => void
): [boolean, LoadingState] => {
    const [isPoisonous, setIsPoisonous] = useState<boolean>(undefined);
    const [isLoading, setIsLoading] = useState<LoadingState>(LoadingState.LOADING);
    const componentIsMounted = useRef(true);

    useEffect(() => {
        async function doClassification() {
            try {
                const classificationRes = await classificationAPI.getClassification(
                    classificationData
                );
                if (!classificationRes.success) throw "Error retrieving classification from API";
                if (!componentIsMounted.current) return;

                setIsPoisonous(classificationRes.result);
                setIsLoading(LoadingState.LOADED);
            } catch (err) {
                onErrorCallback();
                if (!componentIsMounted.current) return;
                setIsLoading(LoadingState.ERROR);
            }
        }
        doClassification();

        return () => {
            componentIsMounted.current = false;
        };
    }, [setIsPoisonous, classificationData, classificationAPI, onErrorCallback]);

    return [isPoisonous, isLoading];
};

/**
 * Hook to retrieve form definition from API to generate the classification form from.
 * @param classificationAPI an instance of @type{ IClassificationAPI}
 * @param onErrorCallback callback to call if any errors occur calling the API
 * @returns array of classification questions, and the state of loading data from API
 */
export const useGetFormDefinition = (
    classificationAPI: IClassificationAPI,
    onErrorCallBack: () => void
): [IClassificationQuestion[], LoadingState] => {
    const [formDef, setFormDef] = useState<IClassificationQuestion[]>(undefined);
    const [isLoading, setIsLoading] = useState<LoadingState>(LoadingState.LOADING);
    const componentIsMounted = useRef(true);

    useEffect(() => {
        async function retrieveFormDefinition() {
            try {
                const formDataResponse = await classificationAPI.getClassificationFormDefinition();
                if (!formDataResponse.success) throw "Form response unsuccessful";

                const questions = convertFeatureDefToClassQues(formDataResponse.result);
                if (componentIsMounted.current) {
                    setFormDef(questions);
                    setIsLoading(LoadingState.LOADED);
                }
            } catch (err) {
                onErrorCallBack();
                if (!componentIsMounted.current) return;
                setIsLoading(LoadingState.ERROR);
            }
        }
        retrieveFormDefinition();

        return () => {
            componentIsMounted.current = false;
        };
    }, [setFormDef, classificationAPI, onErrorCallBack]);

    return [formDef, isLoading];
};
