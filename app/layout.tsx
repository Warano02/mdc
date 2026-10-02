import type { Metadata } from "next";
import { Rubik, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

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

const SITE_URL = "https://mdcapply.ca"
const SITE_NAME = "MDC Canada"
const OWNER_NAME = "MDC Canada"
const SITE_DESCRIPTION = "Looking to work, study, or live in Canada? MDC Canada’s certified consultants simplify the visa and immigration process for you. Apply today!"
const EMAIL = "contact@mdcapply.ca"
const sameAs = ["https://mdccanada.ca"]

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "MDC Canada",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    author: { "@id": `${SITE_URL}/#person` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: OWNER_NAME,
    url: SITE_URL,
    email: `mailto:${EMAIL}`,
    jobTitle: "Easy Steps for Canadian Visa Applications | MDC Canada",
    sameAs,
  },
];

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  title: "Easy Steps for Canadian Visa Applications | MDC Canada",
  description: SITE_DESCRIPTION,
  keywords: [
    OWNER_NAME,
    "mdc apply",
    " live in canada",
    " work in canada",
    "live in canada",
    "study in canada"
  ],
  alternates: { canonical: "/" },
  twitter: { card: "summary_large_image", title: "MDC Canada", images: ["/og-image.jpg"] },
  authors: [{ name: OWNER_NAME, url: SITE_URL }],
  creator: OWNER_NAME,
  publisher: OWNER_NAME,
  category: "technology",
  classification: "Visa",
  manifest: "/manifest.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/",
        width: 1920,
        height: 1080,
        alt: `${SITE_NAME} desktop preview`,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="fr" className={cn(rubik.variable, playfairDisplay.variable, "font-sans", geist.variable)} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://api.github.com" />
        <link rel="preconnect" href="https://api.jamendo.com" />
        <link rel="preconnect" href="https://prod-1.storage.jamendo.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wttr.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}