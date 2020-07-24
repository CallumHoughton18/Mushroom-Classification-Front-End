import {IClassificationQuestion} from "../interfaces";

export function GenerateMockClassificationQuestions(): IClassificationQuestion[] {
    const mockOptions: IClassificationQuestion[] = [];
    for (let index = 0; index < 3; index++) {
        const classificationQuestions: IClassificationQuestion = {
            id: `classques-${index}`,
            fieldName: `TestField${index}`,
            options: ["Opt1", "Opt2", "Opt3"],
            isRequired: true,
            value: ""
        };
        mockOptions[index] = classificationQuestions;
    }
    return mockOptions;
}
