'use client';

import { Globe2, ShieldCheck, Landmark, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const items = [
  {
    icon: Globe2,
    title: 'Connecting Indian Craftsmanship to Global Markets',
    desc: 'From concept to shipment, we align manufacturing precision with export-ready execution for brands that demand consistency at scale.',
    span: 'lg:col-span-7',
    hasMap: true,
  },
  {
    icon: ShieldCheck,
    title: 'Export Quality Guaranteed',
    desc: 'Strict quality checkpoints across materials, finishing, and dispatch to meet international standards.',
    span: 'lg:col-span-5',
  },
  {
    icon: Landmark,
    title: 'Born in Rajasthan, Serving the World',
    desc: 'Rooted in heritage craftsmanship, engineered for modern global supply chains.',
    span: 'lg:col-span-4',
  },
  {
    icon: TrendingUp,
    title: 'Trusted Performance at Scale',
    desc: 'Long-term client trust built on reliability, consistency, and responsive execution.',
    span: 'lg:col-span-8',
    hasStats: true,
  },
];

export default function WhyChoose() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="why-choose" className="py-20 relative overflow-hidden">
      {/* Ambient gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 18% 26%, rgba(255,153,51,0.08) 0%, transparent 34%), radial-gradient(circle at 80% 78%, rgba(255,215,0,0.06) 0%, transparent 34%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div ref={ref} className={`scroll-reveal ${revealed ? 'revealed' : ''}`}>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: 'rgba(255,153,51,0.3)' }} />
              <span className="text-[#ff9933] text-xs font-inter font-bold tracking-[0.2em] uppercase">Why Choose JMT</span>
              <div className="h-px w-8" style={{ backgroundColor: 'rgba(255,153,51,0.3)' }} />
            </div>
            <h2 className="font-jakarta text-3xl sm:text-4xl font-bold text-foreground">
              Global Presence, <span className="text-[#ff9933]">Local Excellence</span>
            </h2>
            <p className="text-[#737373] font-inter mt-3 max-w-lg mx-auto">
              Built in India, trusted by partners across multiple global markets.
            </p>
          </div>

          {/* Bento grid - 12 column layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
            {items.map((item) => (
              <div
                key={item.title}
                className={`group relative p-6 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${item.span}`}
                style={{
                  backgroundColor: 'var(--card)',
                  backdropFilter: 'blur(14px)',
                  border: '1px solid var(--border)',
                  minHeight: item.hasMap ? '250px' : item.hasStats ? '220px' : '220px',
                }}
              >
                {/* Hover border glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(130deg, rgba(255,153,51,0.85), rgba(255,215,0,0.7), rgba(255,153,51,0.85))',
                    mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                    WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '1px',
                  }}
                />

                {/* Map overlay for first card */}
                {item.hasMap && (
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='420' viewBox='0 0 900 420'%3E%3Cg fill='none' stroke='rgba(255,153,51,0.3)' stroke-width='1.2'%3E%3Cpath d='M120 90 L210 120 L340 105 L460 150 L620 130 L760 170'/%3E%3Cpath d='M140 230 L260 210 L390 250 L500 220 L650 270 L760 245'/%3E%3Ccircle cx='210' cy='120' r='4'/%3E%3Ccircle cx='460' cy='150' r='4'/%3E%3Ccircle cx='650' cy='270' r='4'/%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                )}

                {/* Pulse animation for first card */}
                {item.hasMap && (
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      top: '-45%',
                      left: '-22%',
                      width: '144%',
                      height: '190%',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(255,153,51,0.15), transparent 62%)',
                      animation: 'presencePulse 5.2s ease-in-out infinite',
                    }}
                  />
                )}

                <div className="relative z-10 flex flex-col h-full justify-end">
                  <item.icon className="w-10 h-10 mb-3 text-[#ff9933]" style={{ opacity: 0.9 }} />
                  <h3 className="text-foreground font-jakarta font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#a3a3a3] font-inter text-sm leading-relaxed">{item.desc}</p>

                  {item.hasStats && (
                    <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
                      <span className="text-sm text-[#a3a3a3] font-inter">
                        <strong className="text-[#ff9933] text-base font-semibold">500+</strong> Products
                      </span>
                      <span className="text-sm text-[#a3a3a3] font-inter">
                        <strong className="text-[#ff9933] text-base font-semibold">50+</strong> Global Clients
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
