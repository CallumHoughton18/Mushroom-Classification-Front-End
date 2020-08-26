import data from "../../assets/files/more-info.json";
import {ClassificationDescriptions} from "../types";

/**
 * @returns {ClassificationDescriptions} JSON stored in "more-info.json".
 */
const getClassificationDescriptions = (): ClassificationDescriptions => {
    return (data as unknown) as ClassificationDescriptions;
};

export default getClassificationDescriptions;
