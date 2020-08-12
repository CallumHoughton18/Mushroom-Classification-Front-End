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

export const useGetFormDefinition = (classificationAPI: IClassificationAPI): string => {
    const [formDef, setFormDef] = useState<string>(undefined);
    useEffect(() => {
        async function retrieveFormDefinition() {
            const formData = await classificationAPI.GetClassificationFormDefinition();
            setFormDef(formData);
        }
        retrieveFormDefinition();
    }, [setFormDef, classificationAPI]);

    return formDef;
};
