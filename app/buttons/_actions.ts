"use server";
import { logger } from "@/lib/logger";

export const loggerAction = async () => {
  logger.info("Log from server action", {
    name: "Unkown",
    age: 99,
  });
};
