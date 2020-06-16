import React, {FunctionComponent} from "react";
import ClassificationForm from "../components/ClassificationForm";
import Question from "../models/types/Question";

const ClassificationPage: FunctionComponent = () => {
    const mockOptions: Array<Question> = [];
    for (let index = 0; index < 5; index++) {
        const question: Question = {title: "Test Title", options: ["Opt1", "Opt2", "Opt3"]};
        mockOptions[index] = question;
    }

    return (
        <div>
            <ClassificationForm questions={mockOptions}></ClassificationForm>
        </div>
    );
};

export default ClassificationPage;
