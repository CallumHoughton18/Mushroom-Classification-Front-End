import React from "react";
import ClassificationForm from "../components/ClassificationForm";
import useAppNavigation from "../../navigation/hooks/useAppNavigation";
import {FormContents} from "../../shared/types";
import {ClassificationQueryData} from "../types";
import {IClassificationAPI} from "../interfaces";
import {useGetFormDefinition} from "../api/classificationAPIHooks";
import {LoadingState} from "../../shared/enums";
import Spinner from "../../shared/components/UI/Spinner";
import useMoreInfoModal from "../hooks/useMoreInfoModal";
import getClassificationDescriptions from "../helpers/getClassificationDescriptions";

type ClassificationPageProps = {
    classificationAPI: IClassificationAPI;
};

const ClassificationPage = ({classificationAPI}: ClassificationPageProps): JSX.Element => {
    const classificationDescs = getClassificationDescriptions();

    const navManager = useAppNavigation();
    const [modal, setQuesForInfo, toggle] = useMoreInfoModal("modal-root", classificationDescs);
    const [formQuestions, loading] = useGetFormDefinition(classificationAPI, () => {
        navManager.goToErrorPage({message: "Error fetching form definition"});
    });

    if (loading === LoadingState.LOADING) return <Spinner />;

    const navToClassificationResult = (formData: FormContents) => {
        const classificationData: ClassificationQueryData = {
            classificationData: formData
        };

        navManager.goToClassificationResultPage(classificationData);
    };

    return (
        loading === LoadingState.LOADED && (
            <div>
                {modal}
                <ClassificationForm
                    questions={formQuestions}
                    onSubmit={navToClassificationResult}
                    hasInfoPopup={(question) => {
                        return classificationDescs[question.fieldName] != null;
                    }}
                    viewInfoCallback={(question) => {
                        setQuesForInfo(question);
                        toggle();
                    }}
                ></ClassificationForm>
            </div>
        )
    );
};

export default ClassificationPage;
