import "@logtail/pino";
import pino from "pino";

const transport = pino.transport({
  target: "@logtail/pino",
  options: {
    sourceToken: process.env.LOGTAIL_SOURCE_TOKEN,
    ignoreExceptions: false,
    throwExceptions: true,
    retryCount: 10,
    sendLogsToConsoleOutput: true,
  },
});
export const logger = pino(transport);
