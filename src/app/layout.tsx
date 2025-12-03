import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from "@/components/layout/sidebar";
import { BottomNav } from "@/components/layout/bottom-nav";

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
          <div className="flex min-h-screen bg-background relative">
            <Sidebar />
            <div className="flex-1 flex flex-col lg:pl-[18.5rem] pb-16 lg:pb-0">
              <main className="flex-1">
                {children}
              </main>
            </div>
            <BottomNav />
          </div>
        </ActiveUnitProvider>
      </body>
    </html>
  );
}
