import classificationAPI from "../classificationAPI";
import {server} from "../../../functional_test_mocks/mockServer";
import {
    createFeaturesDefHandler,
    createGetClassificationHandler,
    defaultHandlers
} from "../../../functional_test_mocks/handlers";
// this auto polyfills the fetch api for Node
import "whatwg-fetch";
import {FormContents} from "../../../shared/types";

beforeAll(() => server.listen());
afterEach(() => {
    server.use(...defaultHandlers);
    server.resetHandlers();
});
afterAll(() => server.close());

describe("getClassificationFormDefinition tests", () => {
    it("Should return expected FeatureDefinition array", async () => {
        const expectedFormDef = {
            result: [
                {
                    name: "cap-shape",
                    options: [
                        {displayname: "bell", value: "b"},
                        {displayname: "conical", value: "c"},
                        {displayname: "convex", value: "x"},
                        {displayname: "flat", value: "f"},
                        {displayname: "knobbed", value: "k"},
                        {displayname: "sunken", value: "s"}
                    ]
                },
                {
                    name: "cap-surface",
                    options: [
                        {displayname: "fibrous", value: "f"},
                        {displayname: "grooves", value: "g"},
                        {displayname: "scaly", value: "y"},
                        {displayname: "smooth", value: "s"}
                    ]
                },
                {
                    name: "bruises",
                    options: [
                        {displayname: "yes", value: "t"},
                        {displayname: "no", value: "f"}
                    ]
                }
            ],
            success: true
        };
        const actualFormDef = await classificationAPI.getClassificationFormDefinition();
        expect(actualFormDef).toEqual(expectedFormDef);
    });

    it.each([[null], [undefined]])("Should handle error response with no json", async (jsonRes) => {
        server.use(createFeaturesDefHandler(403, jsonRes));

        const actualFormDef = await classificationAPI.getClassificationFormDefinition();
        expect(actualFormDef).toEqual({result: [], success: false});
    });
});

describe("getClassification tests", () => {
    const mockContent: FormContents = {
        fieldname: "value"
    };

    it("Should return success with poisonous is true", async () => {
        const result = await classificationAPI.getClassification(mockContent);
        expect(result).toEqual({success: true, result: true});
    });

    it.each([[null], [undefined]])("Should handle error response with no json", async (jsonRes) => {
        server.use(createGetClassificationHandler(403, jsonRes));
        const result = await classificationAPI.getClassification(mockContent);
        expect(result).toEqual({success: false, result: null});
    });
});
