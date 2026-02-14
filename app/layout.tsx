import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { AssessmentProvider } from "@/lib/assessment-context";
import { I18nProvider } from "@/lib/i18n-context";
import { RumInit } from "@/components/analytics/rum-init";
import { Anek_Malayalam, Poppins, Inter } from "next/font/google";

const anekMalayalam = Anek_Malayalam({
  subsets: ["latin"],
  variable: "--font-anek-malayalam",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "KARE - Kerala United Against Rare Diseases",
  description:
    "Support KARE, Kerala's pioneering government program providing comprehensive treatment and care for children with rare diseases like SMA, Gaucher, Pompe, and MPS. India's first state-funded rare disease treatment programme.",
  metadataBase: new URL("https://kare.kerala.gov.in"),
  icons: {
    icon: [
      { url: "/kare-logo.jpg", type: "image/jpeg" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: [{ url: "/kare-logo.jpg", type: "image/jpeg" }],
  },
  openGraph: {
    title: "KARE - Kerala United Against Rare Diseases",
    description:
      "Support Kerala's pioneering rare disease treatment programme. India's first state-funded initiative for SMA, Gaucher, Pompe, and MPS. Donate to help transform lives.",
    url: "https://kare.kerala.gov.in",
    siteName: "KARE - Kerala United Against Rare Diseases",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KARE - Kerala United Against Rare Diseases",
    description:
      "Support Kerala's pioneering rare disease treatment programme. Donate to help transform lives.",
  },
  keywords: [
    "KARE",
    "Kerala rare diseases",
    "SMA treatment Kerala",
    "rare disease support",
    "Government of Kerala",
    "Spinal Muscular Atrophy",
    "Gaucher disease",
    "Pompe disease",
    "MPS treatment",
    "donate rare disease",
    "Kerala healthcare",
    "child health Kerala",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} ${poppins.variable} ${anekMalayalam.variable}`}>
      <body className={`antialiased min-h-screen bg-white font-sans`}>
        <RumInit />
        <I18nProvider>
          <AssessmentProvider>{children}</AssessmentProvider>
        </I18nProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
