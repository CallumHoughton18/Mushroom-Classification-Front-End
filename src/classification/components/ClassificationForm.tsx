import React, {FunctionComponent, useState} from "react";
import Select from "../../shared/components/Forms/Select";
import Question from "../models/types/Question";
import Modal from "../../shared/components/UI/Modal";

type ClassificationFormProps = {
    questions: Array<Question>;
};

const ClassificationForm: FunctionComponent<ClassificationFormProps> = (props) => {
    const [showInfoModal, setShowInfoModal] = useState(false);
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
        // TODO: Using index for key is unsafe in react
        return (
            <Select
                key={indx}
                id={`Select-${indx}`}
                options={question.options}
                required={true}
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
            <form>
                {selects}
                <input type="submit" value="Submit" />
            </form>
        </React.Fragment>
    );
};

export default ClassificationForm;
