import classificationAPI from "../classificationAPI";
import {server} from "../../../functional_test_mocks/server";
import {createFeaturesDefHandler, defaultHandlers} from "../../../functional_test_mocks/handlers";
// this auto polyfills the fetch api for Node
import "whatwg-fetch";

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
