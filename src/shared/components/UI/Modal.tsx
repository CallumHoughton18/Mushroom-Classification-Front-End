import React, {FunctionComponent, ReactNode} from "react";

import "../../../scss/Modal.scss";
import Button from "./Button";

type ModalProps = {
    title: string;
    children: ReactNode;
    closeModalCallBack: () => void;
};

const Modal: FunctionComponent<ModalProps> = (props) => {
    return (
        <div className="modal">
            <section className="modal-window">
                <div className="modal-header">{props.title}</div>
                <div className="modal-body">{props.children}</div>
                <div className="modal-footer">
                    <Button onClick={props.closeModalCallBack}>Close</Button>
                </div>
            </section>
        </div>
    );
};

export default Modal;
