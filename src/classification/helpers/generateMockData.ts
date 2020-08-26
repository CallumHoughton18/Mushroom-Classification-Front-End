import {IClassificationQuestion} from "../interfaces";

/**
 * @returns {IClassificationQuestion} array with three instance members.
 */
export function GenerateMockClassificationQuestions(): IClassificationQuestion[] {
    const mockOptions: IClassificationQuestion[] = [];
    for (let index = 0; index < 3; index++) {
        const classificationQuestions: IClassificationQuestion = {
            id: `classques-${index}`,
            fieldName: `TestField${index}`,
            options: [
                {displayname: "Option1", value: "Opt1"},
                {displayname: "Option2", value: "Opt2"},
                {displayname: "Option3", value: "Opt3"}
            ],
            isRequired: true,
            value: ""
        };
        mockOptions[index] = classificationQuestions;
    }
    return mockOptions;
}
