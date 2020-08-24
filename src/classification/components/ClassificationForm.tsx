import React, {FunctionComponent, Fragment} from "react";
import Select from "../../shared/components/Forms/Select";
import useForm from "../../shared/hooks/useForm";
import {FormContents} from "../../shared/types";
import {IClassificationQuestion} from "../interfaces";
import {toFormFieldTitle} from "../helpers/converters";
import {getClassificationDescriptions} from "../helpers/getClassificationDescriptions";
import useModal from "../../shared/hooks/useModal";

export type ClassificationFormProps = {
    questions: Array<IClassificationQuestion>;
    onSubmit: (formData: FormContents) => void;
};

const ClassificationForm: FunctionComponent<ClassificationFormProps> = (props) => {
    const [values, handleChange, handleSubmit] = useForm(props.onSubmit);
    const [RenderModal, toggle] = useModal();

    const selects = props.questions.map((question, indx) => {
        const classDesc = getClassificationDescriptions()[`${question.fieldName}`];

        return (
            <Fragment key={question.id}>
                <RenderModal title={classDesc?.info ?? "bleh"}>
                    <p>This is stuff</p>
                </RenderModal>
                <Select
                    key={question.id}
                    id={question.id}
                    name={question.fieldName}
                    title={toFormFieldTitle(question.fieldName)}
                    value={values[question.fieldName] || ""}
                    options={question.options}
                    required={question.isRequired}
                    onChange={handleChange}
                    viewInfoCallback={toggle}
                ></Select>
            </Fragment>
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
