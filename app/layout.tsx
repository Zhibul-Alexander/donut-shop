import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
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
  title: "Donut Dreams — Свежие пончики каждый день",
  description: "Магазин свежих пончиков с доставкой. Натуральные ингредиенты, уникальные вкусы, доставка за 45 минут.",
  keywords: "пончики, донатс, десерты, доставка, свежая выпечка",
  icons: {
    icon: "/logo.webp",
  },
  openGraph: {
    title: "Donut Dreams — Свежие пончики каждый день",
    description: "Магазин свежих пончиков с доставкой",
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
