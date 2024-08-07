import { NodeLoggerButton } from "@/components/node-logger-button";
import { ClientButton } from "../components/buttons/client-button";
import { ServerButton } from "../components/buttons/server-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <ServerButton />
      <ClientButton />
      <NodeLoggerButton />
    </main>
  );
}
