import { logger } from "@/lib/logger";

export function GET() {
  logger.info("Log from Nextjs Route handler");
  return new Response("Hello, World!");
}
