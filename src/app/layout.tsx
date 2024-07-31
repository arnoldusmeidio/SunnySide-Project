import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUNNYSIDE",
  description: "Your one stop design partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="box-border h-screen text-2xl">{children}</body>
    </html>
  );
}
