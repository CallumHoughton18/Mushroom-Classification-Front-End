import {useState, useEffect, useRef} from "react";
import {IClassificationAPI, IClassificationQuestion} from "../interfaces";
import {FormContents} from "../../shared/types";
import {FeatureDefinition} from "../types";

export const useIsPoisonous = (
    classificationAPI: IClassificationAPI,
    classificationData: FormContents,
    onErrorCallback: () => void
): boolean => {
    const [isPoisonous, setIsPoisonous] = useState<boolean>(undefined);

    useEffect(() => {
        async function doClassification() {
            try {
                const classificationRes = await classificationAPI.getClassification(
                    classificationData
                );
                if (!classificationRes.success) throw "Error retrieving classification from API";

                setIsPoisonous(classificationRes.result);
            } catch (err) {
                onErrorCallback();
            }
        }
        doClassification();
    }, [setIsPoisonous, classificationData, classificationAPI, onErrorCallback]);

    return isPoisonous;
};

export const useGetFormDefinition = (
    classificationAPI: IClassificationAPI,
    onErrorCallBack: () => void
): IClassificationQuestion[] => {
    const [formDef, setFormDef] = useState<IClassificationQuestion[]>(undefined);
    const componentIsMounted = useRef(true);

    useEffect(() => {
        async function retrieveFormDefinition() {
            try {
                const formDataResponse = await classificationAPI.getClassificationFormDefinition();
                if (!formDataResponse.success) throw "Form response unsuccessful";

                const questions = convertFeatureDefToClassQues(formDataResponse.result);
                componentIsMounted.current && setFormDef(questions);
            } catch (err) {
                onErrorCallBack();
            }
        }
        retrieveFormDefinition();

        return () => {
            componentIsMounted.current = false;
        };
    }, [setFormDef, classificationAPI, onErrorCallBack]);

    return formDef;
};

const convertFeatureDefToClassQues = (formData: FeatureDefinition[]) => {
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
    return questions;
};
