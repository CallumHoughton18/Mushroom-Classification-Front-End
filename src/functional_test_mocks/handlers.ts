import {rest, RequestHandler, MockedRequest, restContext, ParsedRestRequest} from "msw";

export const createFeaturesDefHandler = (
    statusCode: number,
    json: Record<string, unknown>
): RequestHandler<MockedRequest, typeof restContext, ParsedRestRequest> => {
    return rest.get(
        "https://mushroomai.site/api/files/features-definition.json",
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
    })
];
