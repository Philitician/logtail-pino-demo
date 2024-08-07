import { Logtail } from "@logtail/node";
export const nodeLogger = new Logtail(
  process.env.LOGTAIL_SOURCE_TOKEN as string
);
