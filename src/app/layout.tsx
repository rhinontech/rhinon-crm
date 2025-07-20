import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Common/providers/ThemeProvider";
import { KBarCommandPalette } from "@/components/Common/kbar/KBarProvider";
import { SonnerProvider } from "@/context/SonnerProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rhinon Tech",
  description: "Rhinon Tech - Your AI Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <KBarCommandPalette>{children}</KBarCommandPalette>
          <SonnerProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
