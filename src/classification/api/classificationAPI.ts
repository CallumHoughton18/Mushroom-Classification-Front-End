import {FormContents, LooseObject} from "../../shared/types";
import {IClassificationAPI} from "../interfaces";
import {FeatureDefinition, APIGet} from "../types";
import {convertLooseObjectToClassificationObj} from "./classificationAPIHelpers";

const baseUri = "https://mushroomai.site/api";

const classificationAPI: IClassificationAPI = {
    getClassification: async (data: FormContents): Promise<boolean> => {
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 400));
        return true;
    },

    getClassificationFormDefinition: async (): Promise<APIGet<FeatureDefinition[]>> => {
        try {
            const formDefinition = await fetch(`${baseUri}/files/features-definition.json`);
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
