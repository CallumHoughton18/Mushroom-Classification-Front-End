import {FormContents, LooseObject} from "../../shared/types";
import {IClassificationAPI} from "../interfaces";
import {FeatureDefinition, APIGet, ClassificationResponse} from "../types";
import {
    convertLooseObjectToClassificationObj,
    convertFormContentsToJson as convertFormContentsToJsonString
} from "./classificationAPIHelpers";
import {API_BASE_URL} from "../../utils/envConfig";

const classificationAPI: IClassificationAPI = {
    getClassification: async (data: FormContents): Promise<APIGet<boolean>> => {
        try {
            const valuesJSONArray = convertFormContentsToJsonString(data);
            const searchParams = new URLSearchParams({values: valuesJSONArray});
            const formDefinition = await fetch(`${API_BASE_URL}/prediction/submit?${searchParams}`);
            const classification = (await formDefinition.json()) as ClassificationResponse;

            const isSuccess = formDefinition.status === 200;

            return {
                success: isSuccess,
                result: isSuccess ? classification.poisonous : null
            };
        } catch (err) {
            return {
                success: false,
                result: null
            };
        }
    },

    getClassificationFormDefinition: async (): Promise<APIGet<FeatureDefinition[]>> => {
        try {
            const formDefinition = await fetch(`${API_BASE_URL}/files/features-definition.json`);
            const defs: FeatureDefinition[] = [];
            const formJson = await formDefinition.json();
            for (const name in formJson) {
                const obj: LooseObject<string> = formJson[name];
                const options = convertLooseObjectToClassificationObj(obj);
                const featureDefinition: FeatureDefinition = {
                    name,
                    options
                };
                defs.push(featureDefinition);
            }

            return {
                success: formDefinition.status === 200,
                result: defs
            };
        } catch (err) {
            return {
                success: false,
                result: []
            };
        }
    }
};

export default classificationAPI;
