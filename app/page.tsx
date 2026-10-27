"use client";

import dynamic from "next/dynamic";

const KageLandingPage = dynamic(() => import("./components/KageLandingPage"), {
  loading: () => <div className="kage-loading" role="status">Entering Afnan&apos;s world…</div>,
});

export default function Home() {
  return <main className="kage-frame"><KageLandingPage /></main>;
}
