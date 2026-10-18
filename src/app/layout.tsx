import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SBD Veľký Krtíš | Stavebné bytové družstvo",
  description:
    "Stavebné bytové družstvo Veľký Krtíš — správa bytových domov, dokumenty, oznamy a kontakt pre vlastníkov a nájomcov.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={`${manrope.variable} bg-white font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
