"use client";
import { useEffect, useState } from "react";

export default function VersionWatcher() {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    async function check() {
      try {
        const res = await fetch("/build.json", { cache: "no-store" });
        const { buildId } = await res.json();
        if (!current) {
          setCurrent(buildId); // primeira leitura
        } else if (current !== buildId) {
          // nova versão detectada
          window.location.reload();
        }
      } catch (err) {
        // ignore fetch errors offline
      }
    }

    const handle = setInterval(check, 2000); // 2s for testing
    return () => clearInterval(handle);
  }, [current]);

  return null;
}
