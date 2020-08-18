export type FormContents = {
    [name: string]: string;
};

export type GenericFormElement = {
    name: string;
    value: string;
};

export type SelectOption = {
    displayname: string;
    value: string;
};

export type LooseObject<T> = {
    [name: string]: T;
};

export type FriendlyAppError = {
    message: string;
};
