'use client';

import { ArrowRight, Users, Package } from 'lucide-react';
import { useState, useEffect } from 'react';

function FloatingCard({ icon: Icon, value, label, delay, className }: { icon: React.ElementType; value: string; label: string; delay: number; className?: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`absolute bg-[#141414]/95 backdrop-blur-md border border-[rgba(255,153,51,0.25)] rounded-xl px-4 py-3 flex items-center gap-3 animate-float transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className || ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-10 h-10 rounded-lg bg-[rgba(255,153,51,0.15)] flex items-center justify-center">
        <Icon className="w-5 h-5 text-[#ff9933]" />
      </div>
      <div>
        <div className="text-white font-jakarta font-bold text-lg leading-none">{value}</div>
        <div className="text-[#737373] text-xs font-inter">{label}</div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-24 overflow-hidden mesh-bg">
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[rgba(255,153,51,0.06)] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[rgba(255,215,0,0.04)] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(255,153,51,0.1)] border border-[rgba(255,153,51,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#ff9933] animate-glow-pulse" />
              <span className="text-[#ff9933] text-xs font-inter font-medium tracking-wider uppercase">Import &amp; Export — Est. 2022</span>
            </div>

            {/* Heading */}
            <h1 className="font-jakarta text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight">
              We craft <em className="text-[#ffd700] not-italic font-playfair italic underline decoration-[#ff9933]/30">premium</em> products for your brand.
            </h1>

            {/* Description */}
            <p className="text-[#a3a3a3] font-inter text-base sm:text-lg max-w-lg leading-relaxed">
              From table calendars and fridge magnets to wooden wall hangings, we manufacture and export high-quality products that help brands stand out. Your vision, our craft.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/?category=wall_hangings#products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-inter font-semibold text-sm rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                View Wall Hangings
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-[rgba(255,153,51,0.3)] text-[#ff9933] font-inter font-semibold text-sm rounded-full hover:bg-[rgba(255,153,51,0.1)] transition-all hover:-translate-y-0.5"
              >
                Chat With Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right - Image with floating cards */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden border border-[rgba(255,153,51,0.2)] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] h-full shadow-2xl">
                <img
                  src="https://picsum.photos/seed/jmt-hero-modern/800/600"
                  alt="JMT Premium Products"
                  className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>

              {/* Floating stat cards */}
              <FloatingCard icon={Package} value="1L+" label="Units Delivered" delay={200} className="bottom-[-20px] left-[-20px]" />
              <FloatingCard icon={Users} value="100+" label="Happy Clients" delay={400} className="top-[-15px] right-[-15px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
