import { InngestMiddleware } from "inngest";
import { inngest } from "./client";
// import { Logger } from "pino";
import { Logger, ProxyLogger } from "inngest/middleware/logger";

const loggerMiddleware = new InngestMiddleware({
  name: "logger-middleware",
  init: ({ client }) => {
    return {
      onFunctionRun() {
        const logger = new ProxyLogger(client["logger"]);
        return {
          async beforeResponse() {
            await logger.flush();
          },
        };
      },
    };
  },
});

export const helloWorld = inngest.createFunction(
  { id: "hello-world", middleware: [loggerMiddleware] },
  { event: "test/hello.world" },
  async ({ event, step, logger }) => {
    logger.info("Incoming, running steps...");
    await step.run("Step 1", () => {
      logger.info("Step 1");
    });
    logger.info("Waiting for 1 second...");
    await step.sleep("wait-a-moment", "1s");
    logger.info("1 second has passed!");
    await step.run("Step 2", () => {
      logger.info("Step 2");
    });
    logger.info("Steps completed!");
    return { event, body: "Hello, World!" };
  }
);

export const heartbeat = inngest.createFunction(
  {
    id: "heartbeat",
    middleware: [loggerMiddleware],
  },
  { cron: "0/10 * * * *" },
  async ({ logger }) => {
    logger.info("BEEP");
  }
);

export const heartbeatNoMiddleware = inngest.createFunction(
  { id: "heartbeat-no-middleware" },
  { cron: "0/10 * * * *" },
  async ({ logger }) => {
    logger.info("BOOP (no middleware)");
  }
);
