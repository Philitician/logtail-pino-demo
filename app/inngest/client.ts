// import { pinoLogger } from "./pino-logger";
import { logger } from "@/lib/logger";
import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "my-app", logger });
