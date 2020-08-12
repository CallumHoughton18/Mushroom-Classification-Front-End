import {FormContents} from "../../shared/types";
import {IClassificationAPI} from "../interfaces";

const mockClassificationAPI: IClassificationAPI = {
    GetClassification: async (data: FormContents): Promise<boolean> => {
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 400));
        return true;
    },
    GetClassificationFormDefinition: async (): Promise<string> => {
        return Promise.resolve("form definition");
    }
};

export default mockClassificationAPI;
