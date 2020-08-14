import {useState, useEffect} from "react";
import {IClassificationAPI, IClassificationQuestion} from "../interfaces";
import {FormContents} from "../../shared/types";

export const useIsPoisonous = (
    classificationAPI: IClassificationAPI,
    classificationData: FormContents
): boolean => {
    const [isPoisonous, setIsPoisonous] = useState(undefined);

    useEffect(() => {
        async function doClassification() {
            const test = await classificationAPI.getClassification(classificationData);
            setIsPoisonous(test);
        }
        doClassification();
    }, [setIsPoisonous, classificationData, classificationAPI]);

    return isPoisonous;
};

export const useGetFormDefinition = (
    classificationAPI: IClassificationAPI
): IClassificationQuestion[] => {
    const [formDef, setFormDef] = useState<IClassificationQuestion[]>(undefined);
    // seems messy...
    useEffect(() => {
        async function retrieveFormDefinition() {
            const formData = await classificationAPI.getClassificationFormDefinition();
            const questions = formData.map((def, indx) => {
                const classificationQuestion: IClassificationQuestion = {
                    id: `classques-${indx}`,
                    fieldName: def.name,
                    options: def.options,
                    isRequired: true,
                    value: ""
                };
                return classificationQuestion;
            });

            setFormDef(questions);
        }
        retrieveFormDefinition();
    }, [setFormDef, classificationAPI]);

    return formDef;
};
