import "@logtail/pino";
import pino from "pino";

const transport = pino.transport({
  target: "@logtail/pino",
  options: {
    sourceToken: process.env.LOGTAIL_SOURCE_TOKEN,
  },
});
export const logger = pino(transport);
