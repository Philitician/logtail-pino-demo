import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step, logger }) => {
    logger.info("Hello, World!");
    await step.sleep("wait-a-moment", "1s");
    logger.info("Hello, World! (after 1s)");
    return { event, body: "Hello, World!" };
  }
);
