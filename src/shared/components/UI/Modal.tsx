import React, {ReactNode} from "react";

import Button from "./Button";
import {createPortal} from "react-dom";
import {useGetElement} from "../../hooks/domHooks";
import useClickedOutside from "../../hooks/useClickedOutside";

type ModalProps = {
    modalRootId: string;
    title: string;
    isShowing: boolean;
    toggle: () => void;
    children: ReactNode;
};

const Modal = ({modalRootId, title, children, toggle, isShowing}: ModalProps): JSX.Element => {
    // There is probably a more 'react' way of doing this using refs.
    // also really the element should be passed in the modal via props, or the id should anyway
    const modalRootEle = useGetElement(modalRootId);
    const contentRef = useClickedOutside(toggle);
    if (!modalRootEle) return null;

    return isShowing
        ? createPortal(
              <div className="modal">
                  <section className="modal-window" ref={contentRef}>
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
