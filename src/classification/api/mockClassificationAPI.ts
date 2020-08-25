import {IClassificationAPI} from "../interfaces";
import {FeatureDefinition, APIGet} from "../types";

const mockClassificationAPI: IClassificationAPI = {
    getClassification: async (): Promise<APIGet<boolean>> => {
        await new Promise((resolve) => setTimeout(resolve, 400));
        return {
            success: true,
            result: true
        };
    },
    getClassificationFormDefinition: async (): Promise<APIGet<FeatureDefinition[]>> => {
        const mockDefs: FeatureDefinition[] = [];
        for (let index = 0; index < 3; index++) {
            const classificationQuestions: FeatureDefinition = {
                name: `classques-${index}`,
                options: []
            };
            mockDefs[index] = classificationQuestions;
        }
        return {success: true, result: mockDefs};
    }
};

export default mockClassificationAPI;
