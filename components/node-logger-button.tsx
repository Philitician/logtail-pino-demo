import { nodeLogger } from "@/lib/node-logger";

export function NodeLoggerButton() {
  return (
    <form
      action={async () => {
        "use server";
        nodeLogger.info("Node logger button clicked");
      }}
    >
      <button>Node logger</button>
    </form>
  );
}
