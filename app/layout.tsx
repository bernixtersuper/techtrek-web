import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tech Trek — Emprendedurismo en el ITBA",
  description:
    "Tech Trek acerca el emprendedurismo a los estudiantes del ITBA. Hub, Talks y BioHackathon.",
  openGraph: {
    title: "Tech Trek",
    description: "Acercamos el emprendedurismo a los estudiantes del ITBA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full bg-[#0d0d0d] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
