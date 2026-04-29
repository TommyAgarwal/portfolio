import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tommy Agarwal — Product Designer",
  description: "Impact-driven Product Designer rooted in technical reality.",
};

import MouseTrackingBackground from "@/components/MouseTrackingBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="antialiased font-sans bg-bg text-text-primary">
        <MouseTrackingBackground />
        {children}
      </body>
    </html>
  );
}
