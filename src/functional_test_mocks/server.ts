import {setupServer} from "msw/node";
import {handlers} from "./handlers";

// Configures service worker with given request handler
export const server = setupServer(...handlers);
