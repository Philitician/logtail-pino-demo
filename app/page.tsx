import { NodeLoggerButton } from "@/components/node-logger-button";

import { PinoLoggerButton } from "../components/pino-logger-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <PinoLoggerButton />
      <NodeLoggerButton />
    </main>
  );
}
