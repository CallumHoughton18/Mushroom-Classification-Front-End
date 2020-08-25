import React, {FunctionComponent, ReactNode} from "react";

import Button from "./Button";
import {createPortal} from "react-dom";
import {useGetElement} from "../../hooks/domHooks";

type ModalProps = {
    title: string;
    isShowing: boolean;
    toggle: () => void;
    children: ReactNode;
};

const Modal: FunctionComponent<ModalProps> = ({title, children, toggle, isShowing}) => {
    const modalRootEle = useGetElement("modal-root");
    if (!modalRootEle) return null;

    return isShowing
        ? createPortal(
              <div className="modal">
                  <section className="modal-window">
                      <div className="modal-header">{title}</div>
                      <div className="modal-body">{children}</div>
                      <div className="modal-footer">
                          <Button onClick={toggle}>Close</Button>
                      </div>
                  </section>
              </div>,
              modalRootEle
          )
        : null;
};

export default Modal;
