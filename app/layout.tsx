import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nyonnie | Athletic Training",
  description:
    "Future Athletic Trainer, athlete advocate, and sports medicine professional.",
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