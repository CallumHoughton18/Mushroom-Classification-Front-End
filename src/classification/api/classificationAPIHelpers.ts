import {SelectOption, LooseObject, FormContents} from "../../shared/types";
import {FeatureDefinition} from "../types";
import {IClassificationQuestion} from "../interfaces";

/**
 * Converts given @param {LooseObject} obj to array of @type {SelectOption}
 * @param obj the loose object, for instance deserialized dynamic json
 */
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

/**
 * Converts given @param data to stringified JSON array.
 * For use with the classification backend API.
 * @param data fields from the completed form.
 */
export const convertFormContentsToJson = (data: FormContents): string => {
    const contents: FormContents[] = [];
    contents.push(data);
    return JSON.stringify(contents);
};

/**
 * Converts given @param formData to array of @interface {FeatureDefinition} with unique IDs
 * Intended to then be used for form elements
 * @param formData data that is used to generate form elements
 */
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
