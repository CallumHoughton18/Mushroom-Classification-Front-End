import {useState, Fragment, FunctionComponent, ReactNode} from "react";
import Modal from "../components/UI/Modal";
import React from "react";

export type modalProps = {
    title: string;
    children: ReactNode;
};
const useModal = (): [FunctionComponent<modalProps>, () => void] => {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => setIsShowing((prevState) => !prevState);

    const RenderModal: FunctionComponent<modalProps> = ({title, children}) => {
        return (
            <Fragment>
                {isShowing && (
                    <Modal title={title} toggle={toggle} isShowing={isShowing}>
                        {children}
                    </Modal>
                )}
            </Fragment>
        );
    };

    return [RenderModal, toggle];
};

export default useModal;
