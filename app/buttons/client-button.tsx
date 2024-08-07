import { logger } from "@/lib/logger";

export function ClientButton() {
  return (
    <button
      onClick={() => {
        logger.info("Log from client", {
          name: "Unkown",
          age: 99,
        });
      }}
    >
      Log from client
    </button>
  );
}
