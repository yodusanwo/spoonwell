import type { Metadata } from "next";
import { Dancing_Script, Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: "600",
});

export const metadata: Metadata = {
  title: {
    default: "Spoonwell Living",
    template: "%s · Spoonwell Living",
  },
  description:
    "A small, intimate home for veterans — near Fort Benning, Georgia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full min-w-0 flex-col overflow-x-hidden bg-brand-cream text-foreground">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
