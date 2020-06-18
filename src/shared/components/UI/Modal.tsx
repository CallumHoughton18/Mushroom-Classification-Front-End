import React, {FunctionComponent, ReactNode} from "react";

import "../../../scss/Modal.scss";

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
                    <button onClick={props.closeModalCallBack}>Close</button>
                </div>
            </section>
        </div>
    );
};

export default Modal;
