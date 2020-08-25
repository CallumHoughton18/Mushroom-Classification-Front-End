import data from "../../assets/files/more-info.json";
import {ClassificationDescriptions} from "../types";

const getClassificationDescriptions = (): ClassificationDescriptions => {
    return (data as unknown) as ClassificationDescriptions;
};

export default getClassificationDescriptions;
