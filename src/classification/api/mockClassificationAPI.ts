import {FormContents} from "../../shared/types";
import {IClassificationAPI} from "../interfaces";
import {FeatureDefinition} from "../types";

const mockClassificationAPI: IClassificationAPI = {
    getClassification: async (data: FormContents): Promise<boolean> => {
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 400));
        return true;
    },
    getClassificationFormDefinition: async (): Promise<FeatureDefinition[]> => {
        const mockDefs: FeatureDefinition[] = [];
        for (let index = 0; index < 3; index++) {
            const classificationQuestions: FeatureDefinition = {
                name: `classques-${index}`,
                options: []
            };
            mockDefs[index] = classificationQuestions;
        }
        return mockDefs;
    }
};

export default mockClassificationAPI;
