import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alex-ai-engineer-portfolio.vercel.app"),
  title: "Alex Menon | AI Engineer Portfolio",
  description:
    "Premium AI Engineer portfolio featuring LLM systems, full-stack architecture, cloud deployments, and recruiter-focused interactive AI assistant.",
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
    title: "Alex Menon | AI Engineer Portfolio",
    description: "Production-grade AI engineering portfolio with interactive recruiter assistant.",
    type: "website",
    url: "/",
    siteName: "Alex AI Engineer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Menon | AI Engineer Portfolio",
    description: "AI systems, backend architecture, automation, and recruiter-ready experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
