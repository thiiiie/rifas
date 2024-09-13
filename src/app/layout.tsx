import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/components/AuthProvider";
import { cn } from "@/lib/utils";
import "./globals.css";
import Script from "next/script";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Cobertura Ryansp",
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
        >
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NQN2TZP8');`,
            }}
          />

          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NQN2TZP8"
              height="0"
              width="0"
              style={{
                display: 'none',
                visibility: 'hidden',
              }}
            ></iframe>
          </noscript>

          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
