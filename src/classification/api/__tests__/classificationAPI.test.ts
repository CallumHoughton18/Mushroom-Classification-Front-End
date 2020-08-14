import classificationAPI from "../classificationAPI";
import {server} from "../../../functional_test_mocks/server";
import "whatwg-fetch";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("getClassificationFormDefinition tests", () => {
    it("Should return expected FeatureDefinition array", async () => {
        const formDef = await classificationAPI.getClassificationFormDefinition();
        expect(formDef.length).toEqual(3);
    });
});
