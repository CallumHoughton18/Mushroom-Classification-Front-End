import React, {FunctionComponent} from "react";
import ClassificationForm from "../components/ClassificationForm";
import useAppNavigation from "../../navigation/hooks/useAppNavigation";
import {FormContents} from "../../shared/types";
import {ClassificationQueryData} from "../types";
import {IClassificationAPI} from "../interfaces";
import {useGetFormDefinition} from "../api/classificationAPIHooks";
import {LoadingState} from "../../shared/enums";
import Spinner from "../../shared/components/UI/Spinner";

type ClassificationPageProps = {
    classificationAPI: IClassificationAPI;
};
const ClassificationPage: FunctionComponent<ClassificationPageProps> = ({classificationAPI}) => {
    const navManager = useAppNavigation();
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
                <ClassificationForm
                    questions={formQuestions}
                    onSubmit={navToClassificationResult}
                ></ClassificationForm>
            </div>
        )
    );
};

export default ClassificationPage;
