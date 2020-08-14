import {IFormElement} from "../shared/interfaces";
import {FormContents, SelectOption} from "../shared/types";
import {FeatureDefinition} from "./types";

export interface IClassificationData {
    fieldName: string;
    options: SelectOption[];
}

export interface IClassificationQuestion extends IFormElement, IClassificationData {}

export interface IClassificationAPI {
    getClassification: (data: FormContents) => Promise<boolean>;
    getClassificationFormDefinition: () => Promise<FeatureDefinition[]>;
}
