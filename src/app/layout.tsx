import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AstralBorder - Borderlands 4 Legendaries Guide",
  description: "Complete tier list and character build guide for Borderlands 4 legendary items",
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

