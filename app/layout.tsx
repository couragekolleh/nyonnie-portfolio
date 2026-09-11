import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nyonnie-portfolio.vercel.app"),

  title: {
    default: "Nyonnie Barnnie | Athletic Training, Wellness & Self-Care",
    template: "%s | Nyonnie Barnnie",
  },

  description:
    "Explore Nyonnie Barnnie's journey in athletic training, sports medicine, fitness, wellness, beauty, self-care, and athlete advocacy.",

  keywords: [
    "Nyonnie Barnnie",
    "Nyonnie",
    "fitwityoni",
    "Athletic Training",
    "Athletic Trainer",
    "Sports Medicine",
    "Athlete Advocacy",
    "Fitness",
    "Wellness",
    "Self-Care",
    "Beauty",
    "Esthetics",
  ],

  authors: [{ name: "Nyonnie Barnnie" }],
  creator: "Nyonnie Barnnie",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Nyonnie Barnnie | Athletic Training, Wellness & Self-Care",
    description:
      "Follow Nyonnie Barnnie's journey through athletic training, sports medicine, fitness, wellness, self-care, and athlete advocacy.",
    url: "https://nyonnie-portfolio.vercel.app",
    siteName: "Nyonnie Barnnie",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nyonnie Barnnie | Athletic Training, Wellness & Self-Care",
    description:
      "Athletic training, sports medicine, fitness, wellness, self-care, and athlete advocacy.",
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