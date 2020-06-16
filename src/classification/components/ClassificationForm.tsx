import React, {FunctionComponent} from "react";
import Select from "../../shared/components/Forms/Select";
import Question from "../models/types/Question";

import "../../scss/Form.scss";

type ClassificationFormProps = {
    questions: Array<Question>;
};

const ClassificationForm: FunctionComponent<ClassificationFormProps> = (props) => {
    const selects = props.questions.map((question, indx) => {
        // TODO: Using index for key is unsafe in react
        return <Select key={indx} id={`Select-${indx}`} options={question.options}></Select>;
    });
    return <form>{selects}</form>;
};

export default ClassificationForm;
