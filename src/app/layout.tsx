import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sayen-vv-portfolio.vercel.app"),
  title: "Sayen VV — AI Engineer",
  description:
    "AI Engineer building production LLM systems, full-stack platforms, and cloud-native architecture. Based in Kochi, working globally.",
  keywords: [
    "AI Engineer",
    "Full Stack Engineer",
    "Python Developer",
    "FastAPI",
    "Django",
    "Next.js",
    "LLM",
    "MCP Server",
  ],
  openGraph: {
    title: "Sayen VV — AI Engineer",
    description: "Production LLM systems, full-stack platforms, and cloud-native architecture.",
    type: "website",
    url: "/",
    siteName: "Sayen VV",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayen VV — AI Engineer",
    description: "Production LLM systems, full-stack platforms, and cloud-native architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
