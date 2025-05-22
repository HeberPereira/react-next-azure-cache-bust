"use client";
import { useEffect, useState } from "react";

export default function BuildTag() {
  const [buildId, setBuildId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/build.json", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => setBuildId(d.buildId))
      .catch(() => {});
  }, []);

  if (!buildId) return null;

  return (
    <footer style={{ marginTop: "2rem", fontSize: "0.8rem", opacity: 0.6, textAlign:"center" }}>
      footer  - v{buildId}
    </footer>
  );
}
