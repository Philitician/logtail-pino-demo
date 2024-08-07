import { nodeLogger } from "@/lib/node-logger";

export function NodeLoggerButton() {
  return (
    <form
      action={async () => {
        "use server";
        nodeLogger.info("Node logger button clicked", {
          name: "Rene",
          age: 40,
        });
        nodeLogger.flush();
      }}
    >
      <button>Node logger</button>
    </form>
  );
}
