import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tommy Agarwal — Product Designer",
  description: "Impact-driven Product Designer rooted in technical reality.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoMono.variable}>
      <body className="antialiased font-sans bg-bg text-text-primary">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
