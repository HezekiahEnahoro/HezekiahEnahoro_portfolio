import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Hezekiah Enahoro - Software Developer & Data Engineer",
  description:
    "Portfolio of Hezekiah Enahoro - Software Developer specializing in full-stack development and data engineering. Building scalable applications and efficient data pipelines.",
  keywords: [
    "Hezekiah Enahoro",
    "Software Developer",
    "Data Engineer",
    "Python",
    "React",
    "Next.js",
    "Data Pipelines",
    "ETL",
    "Lagos",
    "Remote",
    "Nigeria",
  ],
  authors: [{ name: "Hezekiah Enahoro" }],
  openGraph: {
    title: "Hezekiah Enahoro - Software Developer & Data Engineer",
    description:
      "Portfolio showcasing software development and data engineering projects",
    url: "https://yourportfolio.com",
    siteName: "Hezekiah Enahoro Portfolio",
    images: [
      {
        url: "/images/og-image.jpg", // Create this 1200x630px image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hezekiah Enahoro - Software Developer & Data Engineer",
    description:
      "Portfolio showcasing software development and data engineering projects",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
