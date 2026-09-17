import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { LocaleProvider } from "@/lib/locale";
import { Site } from "@/components/site";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Flottiee — Portfolio",
  description: "Independent design and development. Selected work, practice, and contact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <LocaleProvider>
          <Site />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
