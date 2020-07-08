import React, {FunctionComponent} from "react";
import ClassificationForm from "../components/ClassificationForm";
import IClassificationQuestion from "../models/types/IClassificationQuestion";

const ClassificationPage: FunctionComponent = () => {
    const mockOptions: Array<IClassificationQuestion> = [];
    for (let index = 0; index < 5; index++) {
        const classificationQuestions: IClassificationQuestion = {
            id: `classques-${index}`,
            fieldName: `TestField${index}`,
            options: ["Opt1", "Opt2", "Opt3"],
            isRequired: true,
            value: ""
        };
        mockOptions[index] = classificationQuestions;
    }

    return (
        <div>
            <ClassificationForm questions={mockOptions}></ClassificationForm>
        </div>
    );
};

export default ClassificationPage;
