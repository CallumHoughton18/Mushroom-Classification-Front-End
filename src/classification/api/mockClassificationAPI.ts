import {FormContents} from "../../shared/types";
import {IClassificationAPI, IFeatureDefinition} from "../interfaces";

const mockClassificationAPI: IClassificationAPI = {
    GetClassification: async (data: FormContents): Promise<boolean> => {
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 400));
        return true;
    },
    GetClassificationFormDefinition: async (): Promise<IFeatureDefinition[]> => {
        const mockDefs: IFeatureDefinition[] = [];
        for (let index = 0; index < 3; index++) {
            const classificationQuestions: IFeatureDefinition = {
                name: `classques-${index}`,
                options: []
            };
            mockDefs[index] = classificationQuestions;
        }
        return mockDefs;
    }
};

export default mockClassificationAPI;
