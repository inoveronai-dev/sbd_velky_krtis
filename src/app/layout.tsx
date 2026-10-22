import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

/** Matches BYTEX Nitra section headings (Playfair Display). */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
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
      <body className={`${manrope.variable} ${playfair.variable} bg-white font-sans antialiased`}>
        <Script
          id="sbd-splash-gate"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(sessionStorage.getItem('sbd-vk-splash-seen'))return;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;document.documentElement.classList.add('sbd-splash-pending');}catch(e){}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
