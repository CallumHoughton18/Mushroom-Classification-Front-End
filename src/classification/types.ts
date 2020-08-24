import {FormContents, SelectOption} from "../shared/types";

export type APIGet<T> = {
    success: boolean;
    result: T;
};

export type ClassificationDescriptions = {
    [classificationKey: string]: ClassificationInfo;
};

export type ClassificationInfo = {
    info: string;
    image?: string;
};

export type ClassificationResponse = {
    poisonous: boolean;
};

export type ClassificationQueryData = {
    classificationData: FormContents;
};

export type FeatureDefinition = {
    name: string;
    options: SelectOption[];
};
