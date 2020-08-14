import {FormContents, LooseObject} from "../../shared/types";
import {IClassificationAPI} from "../interfaces";
import {FeatureDefinition} from "../types";
import {convertLooseObjectToClassificationObj} from "./classificationAPIHelpers";

const baseUri = "https://mushroomai.site/api";

const classificationAPI: IClassificationAPI = {
    getClassification: async (data: FormContents): Promise<boolean> => {
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 400));
        return true;
    },

    getClassificationFormDefinition: async (): Promise<FeatureDefinition[]> => {
        const formDefinition = await fetch(`${baseUri}/files/features-definition.json`);
        const formJson = await formDefinition.json();
        const defs: FeatureDefinition[] = [];
        for (const name in formJson) {
            const obj: LooseObject<string> = formJson[name];
            const options = convertLooseObjectToClassificationObj(obj);
            const featureDefinition: FeatureDefinition = {
                name,
                options
            };
            defs.push(featureDefinition);
        }
        return defs;
    }
};

export default classificationAPI;
