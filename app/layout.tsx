import type { Metadata } from "next";
import { Rubik, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});
export const metadata: Metadata = {
  title: "MDC Canada",
  description: "MDC Canada",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn(rubik.variable, playfairDisplay.variable, "font-sans", geist.variable)}>
      <body>
        {children}
        </body>
    </html>
  );
}