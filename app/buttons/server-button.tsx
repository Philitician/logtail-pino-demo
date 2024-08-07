import { logger } from "@/lib/logger";

export function ServerButton() {
  return (
    <form
      action={async () => {
        "use server";
        logger.info("Log from server", {
          name: "Philip",
          age: 34,
        });
      }}
    >
      <button>Log from Server</button>
    </form>
  );
}
