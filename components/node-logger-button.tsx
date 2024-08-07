import { logger } from "@/lib/logger";

export function NodeLoggerButton() {
  return (
    <form
      action={async () => {
        "use server";
        logger.info("Node logger button clicked", {
          name: "Philip",
          age: 34,
        });
        logger.flush();
      }}
    >
      <button>Node logger</button>
    </form>
  );
}
