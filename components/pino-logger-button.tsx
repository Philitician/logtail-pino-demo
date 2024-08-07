import { logger } from "@/lib/logger";

export function PinoLoggerButton() {
  return (
    <form
      action={async () => {
        "use server";
        logger.info("Log from server", {
          name: "Philip",
          age: 34,
        });
        logger.flush();
      }}
    >
      <button>Log from Server</button>
    </form>
  );
}
