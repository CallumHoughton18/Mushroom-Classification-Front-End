import {setupServer} from "msw/node";
import {defaultHandlers} from "./handlers";

// Configures service worker with given request handler
export const server = setupServer(...defaultHandlers);
