import {FormContents} from "../../shared/types";
import {IClassificationAPI, IFeatureDefinition, IOption} from "../interfaces";

const baseUri = "https://mushroomai.site/api";

const mockClassificationAPI: IClassificationAPI = {
    GetClassification: async (data: FormContents): Promise<boolean> => {
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 400));
        return true;
    },
    GetClassificationFormDefinition: async (): Promise<IFeatureDefinition[]> => {
        const formDefinition = await fetch(`${baseUri}/files/features-definition.json`);
        const formJson = await formDefinition.json();
        const defs: IFeatureDefinition[] = [];
        for (const key in formJson) {
            // this conversion here doesn't seem to be working...
            const subEntry = formJson[key] as IOption[];
            const featureDefinition: IFeatureDefinition = {
                name: key,
                options: subEntry
            };
            defs.push(featureDefinition);
        }
        return defs;
    }
};

export default mockClassificationAPI;
