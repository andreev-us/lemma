import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MobilePlaceholder } from "@/components/layout/mobile-placeholder";
import { LayoutWrapper } from "@/components/layout/layout-wrapper";

import { ActiveUnitProvider } from "@/context/active-unit-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "lemma",
  description: "Master English with our learning dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ActiveUnitProvider>
          <MobilePlaceholder />
          <div className="hidden lg:block">
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
          </div>
        </ActiveUnitProvider>
      </body>
    </html>
  );
}
