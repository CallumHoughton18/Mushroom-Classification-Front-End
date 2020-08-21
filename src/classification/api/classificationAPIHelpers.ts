import {SelectOption, LooseObject, FormContents} from "../../shared/types";
import {FeatureDefinition} from "../types";
import {IClassificationQuestion} from "../interfaces";

export const convertLooseObjectToClassificationObj = (obj: LooseObject<string>): SelectOption[] => {
    const options: SelectOption[] = [];
    Object.keys(obj).forEach((prop) => {
        const option: SelectOption = {
            displayname: obj[prop],
            value: prop
        };
        options.push(option);
    });
    return options;
};

export const convertFormContentsToJson = (data: FormContents): string => {
    const contents: FormContents[] = [];
    contents.push(data);
    return JSON.stringify(contents);
};

export const convertFeatureDefToClassQues = (
    formData: FeatureDefinition[]
): IClassificationQuestion[] => {
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
