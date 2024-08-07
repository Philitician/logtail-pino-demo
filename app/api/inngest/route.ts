import { inngest } from "@/app/inngest/client";
import {
  helloWorld,
  heartbeat,
  heartbeatNoMiddleware,
} from "@/app/inngest/functions";
import { serve } from "inngest/next";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [helloWorld, heartbeat, heartbeatNoMiddleware],
});
