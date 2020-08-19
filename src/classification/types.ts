import {FormContents, SelectOption} from "../shared/types";

export type APIGet<T> = {
    success: boolean;
    result: T;
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
