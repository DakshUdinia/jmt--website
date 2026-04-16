'use client';

import { useState } from 'react';
import Header from '@/components/jmt/Header';
import Hero from '@/components/jmt/Hero';
import Marquee from '@/components/jmt/Marquee';
import About from '@/components/jmt/About';
import Stats from '@/components/jmt/Stats';
import Products from '@/components/jmt/Products';
import Testimonials from '@/components/jmt/Testimonials';
import WhyChoose from '@/components/jmt/WhyChoose';
import Contact from '@/components/jmt/Contact';
import FAQ from '@/components/jmt/FAQ';
import PDFArchive from '@/components/jmt/PDFArchive';
import Footer from '@/components/jmt/Footer';
import QuickQuoteModal from '@/components/jmt/QuickQuoteModal';
import { MessageCircle } from 'lucide-react';

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-inter transition-colors duration-300">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Products />
        <Testimonials />
        <WhyChoose />
        <Contact />
        <FAQ />
        <PDFArchive />
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919953413253"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg shadow-[rgba(37,211,102,0.3)] hover:scale-110 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>

        {/* Floating Quote Button */}
        <button
          onClick={() => setQuoteOpen(true)}
          className="fixed bottom-6 left-6 z-50 px-4 py-3 bg-[#ff9933] hover:bg-[#e68a2e] text-black font-inter font-semibold text-sm rounded-full shadow-lg shadow-[rgba(255,153,51,0.3)] hover:scale-105 transition-all"
        >
          Get Quote
        </button>

        {/* Quick Quote Modal */}
        <QuickQuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      </div>
    </div>
  );
}
