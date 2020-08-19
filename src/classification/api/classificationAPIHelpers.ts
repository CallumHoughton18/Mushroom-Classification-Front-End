import {SelectOption, LooseObject, FormContents} from "../../shared/types";

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
