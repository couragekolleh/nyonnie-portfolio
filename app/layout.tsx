import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nyonnie-portfolio.vercel.app"),

  title: {
    default: "Nyonnie Barnnie | Personal Portfolio",
    template: "%s | Nyonnie Barnnie",
  },

  description:
    "Explore Nyonnie Barnnie's personal portfolio, including her bachelor's degree in Exercise Science, soccer background, clinical learning experiences, wellness interests, and journey toward becoming an Athletic Trainer.",

  keywords: [
    "Nyonnie Barnnie",
    "Nyonnie",
    "fitwityoni",
    "Nyonnie Barnnie Portfolio",
    "Personal Portfolio",
    "Exercise Science",
    "Aspiring Athletic Trainer",
    "Athletic Training Student",
    "Athletic Training",
    "Soccer",
    "Fitness",
    "Wellness",
    "Self-Care",
    "Beauty",
    "Esthetics",
  ],

  authors: [{ name: "Nyonnie Barnnie" }],
  creator: "Nyonnie Barnnie",

  verification: {
    google: "3h3q3lvjOceQnaVF1DxIzNpB0JRvV-8qhRHS_Rh2WXU",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Nyonnie Barnnie | Personal Portfolio",
    description:
      "Get to know Nyonnie Barnnie through her personal portfolio — from her Exercise Science background and soccer journey to her clinical learning experiences, wellness interests, and future goals in Athletic Training.",
    url: "https://nyonnie-portfolio.vercel.app",
    siteName: "Nyonnie Barnnie",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nyonnie Barnnie | Personal Portfolio",
    description:
      "Nyonnie Barnnie's personal portfolio documenting her Exercise Science background, soccer journey, wellness interests, clinical learning, and path toward Athletic Training.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}