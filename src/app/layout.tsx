import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/components/AuthProvider";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = Inter({ 
    subsets: ["latin"],
    variable: "--font-sans"
 });

export const metadata: Metadata = {
  title: "Gemeos Brasil",
  description: "Participe de suas rifas favoritas aqui",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >{children}</body>
      </AuthProvider>
    </html>
  );
}
