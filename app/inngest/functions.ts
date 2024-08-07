import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
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
