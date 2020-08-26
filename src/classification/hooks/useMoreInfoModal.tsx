import React, {useState, Dispatch, SetStateAction} from "react";
import {IClassificationQuestion} from "../interfaces";
import useModal from "../../shared/hooks/useModal";
import {ClassificationDescriptions} from "../types";
import {toTitleCase} from "../helpers/converters";

const useMoreInfoModal = (
    modalRootId: string,
    classificationDescriptions: ClassificationDescriptions
): [JSX.Element, Dispatch<SetStateAction<IClassificationQuestion>>, () => void] => {
    const [RenderModal, toggle] = useModal(modalRootId);
    const [selectedQuestion, setSelectedQuestion] = useState<IClassificationQuestion>(null);
    const option = classificationDescriptions[selectedQuestion?.fieldName ?? ""];

    const modal =
        selectedQuestion === null ? (
            <RenderModal title="">
                <div />
            </RenderModal>
        ) : (
            <RenderModal title={toTitleCase(selectedQuestion.fieldName)}>
                <div className="classification-info">
                    <p>{option?.info}</p>
                    {option?.image && (
                        <a href={option.image} target="_blank" rel="noopener noreferrer">
                            <img src={option.image}></img>
                        </a>
                    )}
                </div>
            </RenderModal>
        );
    return [modal, setSelectedQuestion, toggle];
};

export default useMoreInfoModal;
