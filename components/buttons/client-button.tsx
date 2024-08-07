"use client";
import { loggerAction } from "./_actions";

export function ClientButton() {
  return (
    <button
      onClick={() => {
        void loggerAction();
      }}
    >
      Log from Client
    </button>
  );
}
