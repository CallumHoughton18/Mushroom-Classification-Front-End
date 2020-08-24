import data from "../../assets/files/more-info.json";
import {ClassificationDescriptions} from "../types";

export const getClassificationDescriptions = (): ClassificationDescriptions => {
    return (data as unknown) as ClassificationDescriptions;
};
