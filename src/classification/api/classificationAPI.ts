import {FormContents} from "../../shared/types";
import {IClassificationAPI} from "../interfaces";

const baseUri = "https://mushroomai.site/api/";

const mockClassificationAPI: IClassificationAPI = {
    GetClassification: async (data: FormContents): Promise<boolean> => {
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 400));
        return true;
    },
    GetClassificationFormDefinition: async (): Promise<string> => {
        const formDefinition = await fetch(`${baseUri}/files/features-definition.json`);
        console.log(formDefinition);
        return formDefinition.json();
    }
};

export default mockClassificationAPI;
