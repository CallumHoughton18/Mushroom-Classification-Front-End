import {FormContents, SelectOption} from "../shared/types";

export type ClassificationQueryData = {
    classificationData: FormContents;
};

export type FeatureDefinition = {
    name: string;
    options: SelectOption[];
};
