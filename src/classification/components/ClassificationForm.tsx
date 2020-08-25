import React, {FunctionComponent} from "react";
import Select from "../../shared/components/Forms/Select";
import useForm from "../../shared/hooks/useForm";
import {FormContents} from "../../shared/types";
import {IClassificationQuestion} from "../interfaces";
import {toTitleCase} from "../helpers/converters";

export type ClassificationFormProps = {
    questions: Array<IClassificationQuestion>;
    onSubmit: (formData: FormContents) => void;
    viewInfoCallback: (question: IClassificationQuestion) => void;
    hasInfoPopup: (question: IClassificationQuestion) => boolean;
};

const ClassificationForm: FunctionComponent<ClassificationFormProps> = (props) => {
    const [values, handleChange, handleSubmit] = useForm(props.onSubmit);

    const selects = props.questions.map((question) => {
        const viewInfoCallback = props.hasInfoPopup(question)
            ? () => {
                  props.viewInfoCallback(question);
              }
            : null;
        return (
            <Select
                key={question.id}
                id={question.id}
                name={question.fieldName}
                title={toTitleCase(question.fieldName)}
                value={values[question.fieldName] || ""}
                options={question.options}
                required={question.isRequired}
                onChange={handleChange}
                viewInfoCallback={viewInfoCallback}
            ></Select>
        );
    });

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                {selects}
                <input type="submit" value="Submit" />
            </form>
        </React.Fragment>
    );
};

export default ClassificationForm;
