import {SelectOption, LooseObject} from "../../shared/types";

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
