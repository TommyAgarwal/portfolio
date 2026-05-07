import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
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
    <html lang="en" className={hostGrotesk.variable}>
      <body className="antialiased font-sans bg-bg text-text-primary">
        {children}
      </body>
    </html>
  );
}
