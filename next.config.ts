import type { NextConfig } from "next";
import { siteUrl } from "./app/site";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/landing-pages/afnan.html",
        headers: [{ key: "Link", value: `<${siteUrl}/>; rel="canonical"` }],
      },
      {
        source: "/landing-pages/kage.html",
        headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }],
      },
    ];
  },
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
