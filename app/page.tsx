'use client';

import { LocaleProvider } from '@/contexts/LocaleContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Delivery from '@/components/Delivery';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import ParallaxDonuts from '@/components/ParallaxDonuts';

export default function Home() {
  return (
    <LocaleProvider>
    <main className="relative min-h-screen">
      {/* Background parallax donuts */}
      <ParallaxDonuts />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Sections */}
      <div className="relative z-10">
        <Hero />
        <Products />
        <About />
        <Gallery />
        <Reviews />
        <Delivery />
        <Contacts />
        <Footer />
      </div>
    </main>
    </LocaleProvider>
  );
}
