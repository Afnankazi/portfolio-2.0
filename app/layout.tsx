import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afnan Kazi | Software Developer & Creative Coder",
  description: "Selected work by Afnan Kazi. Full-stack applications, backend systems, and interactive experiences for the web.",
  openGraph: {
    title: "Afnan Kazi | Software Developer & Creative Coder",
    description: "Full-stack applications, backend systems, and interactive experiences for the web.",
    type: "website",
  },
  icons: { icon: "/kage.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
