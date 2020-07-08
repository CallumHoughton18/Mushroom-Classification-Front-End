import React, {FunctionComponent, useState} from "react";
import Select from "../../shared/components/Forms/Select";
import Modal from "../../shared/components/UI/Modal";
import IClassificationQuestion from "../models/types/IClassificationQuestion";
import useForm from "../../shared/hooks/useForm";

type ClassificationFormProps = {
    questions: Array<IClassificationQuestion>;
};

const ClassificationForm: FunctionComponent<ClassificationFormProps> = (props) => {
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [values, handleChange, handleSubmit] = useForm();
    const mockModal = (
        <Modal
            title="More Information"
            closeModalCallBack={() => {
                setShowInfoModal(false);
            }}
        >
            <p>Information blah blah blah</p>
        </Modal>
    );
    const selects = props.questions.map((question, indx) => {
        return (
            <Select
                key={question.id}
                id={question.id}
                name={question.fieldName}
                value={values[question.fieldName] || ""}
                options={question.options}
                required={question.isRequired}
                onChange={handleChange}
                viewInfoCallback={
                    indx % 2 === 0
                        ? () => {
                              setShowInfoModal(true);
                          }
                        : null
                }
            ></Select>
        );
    });

    return (
        <React.Fragment>
            {showInfoModal ? mockModal : null}
            <form onSubmit={handleSubmit}>
                {selects}
                <input type="submit" value="Submit" />
            </form>
        </React.Fragment>
    );
};

export default ClassificationForm;
