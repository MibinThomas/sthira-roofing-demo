import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const artificFont = localFont({
  src: [
    {
      path: "../../public/fonts/artific-font-family/artifictrial-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/artific-font-family/artifictrial-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/artific-font-family/artifictrial-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/artific-font-family/artifictrial-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/artific-font-family/artifictrial-black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-artific",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sthira Roofing & PEB Structure | Premier Building Solutions Kerala",
  description:
    "Leading provider of Pre-Engineered Steel Buildings (PEB), Industrial Roofing, Galvalume Sheets, PUF Insulated Panels, and Turnkey Structural Fabrication across Kerala.",
  keywords: [
    "Roofing Kerala",
    "PEB Structure Kerala",
    "Pre-Engineered Buildings Kochi",
    "Industrial Warehouse Steel Fabrication",
    "Metal Roofing Sheets Kerala",
    "Sthira Building Solutions",
    "PUF Insulated Roof Panels Thrissur",
  ],
  openGraph: {
    title: "Sthira Roofing & PEB Structure | Kerala",
    description:
      "Engineering Unmatched Structural Strength & Modern PEB Architecture in Kerala.",
    images: ["/logo/sthira logo website.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${artificFont.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-slate-50 text-slate-900 selection:bg-red-600 selection:text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}

