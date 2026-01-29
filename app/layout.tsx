import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { defaultLocale, seo } from "@/site.config";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F7F2EB",
};

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: seo.title[defaultLocale],
  description: seo.description[defaultLocale],
  keywords: seo.keywords[defaultLocale],
  icons: {
    icon: "/logo.webp",
  },
  openGraph: {
    title: seo.title[defaultLocale],
    description: seo.description[defaultLocale],
    type: "website",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: seo.title[defaultLocale],
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
