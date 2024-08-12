import type { Metadata } from "next";
import "./globals.css";

import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import React from "react";

// import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "SunnySide",
  description: "Your one stop design solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="box-border h-screen min-w-[290px] text-black">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
