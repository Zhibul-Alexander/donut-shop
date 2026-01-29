import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { defaultLocale, seo } from "@/site.config";
import "./globals.css";

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
