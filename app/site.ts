const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = new URL(
  configuredUrl || (productionHost ? `https://${productionHost}` : "https://afnankazi.vercel.app"),
).origin;

export const site = {
  name: "Afnan Kazi",
  title: "Afnan Kazi | Software Developer & Creative Coder",
  description:
    "Explore Afnan Kazi's software development portfolio: full-stack applications, Java and Spring Boot systems, React interfaces, and interactive Three.js experiences.",
  image: "/landing-pages/secret-pathways-assets/kage-sanmon-preview.webp",
  profiles: [
    "https://github.com/Afnankazi",
    "https://www.linkedin.com/in/afnan-kazi-13100a28b/",
    "https://leetcode.com/u/afnankazii/",
  ],
};
