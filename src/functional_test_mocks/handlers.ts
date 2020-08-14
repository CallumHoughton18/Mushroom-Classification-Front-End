import {rest} from "msw";

export const handlers = [
    rest.get("https://mushroomai.site/api/files/features-definition.json", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
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
        );
    })
];
