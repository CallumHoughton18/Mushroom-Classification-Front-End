import {rest, RequestHandler, MockedRequest, restContext, ParsedRestRequest} from "msw";

// These are mock handlers for intercepting API requests when a mock service worker is used
// this is useful when running tests that perform real requests using fetch or axios etc

const baseUrl = process.env.API_BASE_URL;

export const createFeaturesDefHandler = (
    statusCode: number,
    json: Record<string, unknown>
): RequestHandler<MockedRequest, typeof restContext, ParsedRestRequest> => {
    return rest.get(`${baseUrl}/files/features-definition.json`, (req, res, ctx) => {
        return res(ctx.status(statusCode), ctx.json(json));
    });
};

export const createGetClassificationHandler = (
    statusCode: number,
    json: Record<string, unknown>
): RequestHandler<MockedRequest, typeof restContext, ParsedRestRequest> => {
    return rest.get(
        `${baseUrl}/prediction/submit?values=[{"fieldname":"value"}]`,
        (req, res, ctx) => {
            return res(ctx.status(statusCode), ctx.json(json));
        }
    );
};

export const defaultHandlers = [
    createFeaturesDefHandler(200, {
        "cap-shape": {
            b: "bell",
            c: "conical",
            x: "convex",
            f: "flat",
            k: "knobbed",
            s: "sunken"
        },
        "cap-surface": {f: "fibrous", g: "grooves", y: "scaly", s: "smooth"},
        bruises: {t: "yes", f: "no"}
    }),
    createGetClassificationHandler(200, {poisonous: true})
];
