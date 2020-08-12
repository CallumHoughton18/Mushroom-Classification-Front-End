import {IFormElement} from "../shared/interfaces";
import {FormContents} from "../shared/types";

export interface IClassificationData {
    fieldName: string;
    options: Array<string>;
}

export interface IClassificationQuestion extends IFormElement, IClassificationData {}

export interface IClassificationAPI {
    GetClassification: (data: FormContents) => Promise<boolean>;
    GetClassificationFormDefinition: () => Promise<string>;
}
