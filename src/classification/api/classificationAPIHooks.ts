import {useState, useEffect} from "react";
import {IClassificationAPI} from "../interfaces";
import {FormContents} from "../../shared/types";

export const useIsPoisonous = (
    classificationAPI: IClassificationAPI,
    classificationData: FormContents
): boolean => {
    const [isPoisonous, setIsPoisonous] = useState(undefined);

    useEffect(() => {
        async function doClassification() {
            const test = await classificationAPI.GetClassification(classificationData);
            setIsPoisonous(test);
        }
        doClassification();
    }, [setIsPoisonous, classificationData, classificationAPI]);

    return isPoisonous;
};
