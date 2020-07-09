import {IFormElement} from "../shared/interfaces";

export interface IClassificationData {
    fieldName: string;
    options: Array<string>;
}

export interface IClassificationQuestion extends IFormElement, IClassificationData {}
