import {useState, Fragment, FunctionComponent, ReactNode} from "react";
import Modal from "../components/UI/Modal";
import React from "react";

export type modalProps = {
    title: string;
    children: ReactNode;
};

/**
 * hook for using a modal
 * @param modalRootId HTMLElement ID to render modal into. ie a <div/>
 * @returns modal component, and the toggle method for hiding/showing the modal
 */
const useModal = (modalRootId: string): [FunctionComponent<modalProps>, () => void] => {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => setIsShowing((prevState) => !prevState);

    const RenderModal: FunctionComponent<modalProps> = ({title, children}) => {
        return (
            <Fragment>
                {isShowing && (
                    <Modal
                        title={title}
                        toggle={toggle}
                        isShowing={isShowing}
                        modalRootId={modalRootId}
                    >
                        {children}
                    </Modal>
                )}
            </Fragment>
        );
    };

    return [RenderModal, toggle];
};

export default useModal;
