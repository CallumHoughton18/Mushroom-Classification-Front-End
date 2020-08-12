import {FormContents} from "../../shared/types";
import {IClassificationAPI} from "../interfaces";

const baseUri = "http://127.0.0.1:5000/api";

const mockClassificationAPI: IClassificationAPI = {
    GetClassification: async (data: FormContents): Promise<boolean> => {
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 400));
        return true;
    },
    GetClassificationFormDefinition: async (): Promise<string> => {
        const formDefinition = await fetch(`${baseUri}/files/features-definition.json`);
        const formJson = await formDefinition.json();
        return formJson;
    }
};

export default mockClassificationAPI;
