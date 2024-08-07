import { ClientButton } from "./buttons/client-button";
import { ServerButton } from "./buttons/server-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <ServerButton />
      <ClientButton />
    </main>
  );
}
