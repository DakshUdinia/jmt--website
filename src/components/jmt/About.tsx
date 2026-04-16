'use client';

import { Factory, Globe2, BadgeIndianRupee, Truck } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  { icon: Factory, title: 'In-house Manufacturing', desc: 'Complete control over quality with our own production facility' },
  { icon: Globe2, title: 'Export Ready', desc: 'Products crafted to meet international quality standards' },
  { icon: BadgeIndianRupee, title: 'Best Pricing', desc: 'Competitive rates without compromising on quality' },
  { icon: Truck, title: 'Pan-India Delivery', desc: 'Reliable shipping to every corner of India' },
];

export default function About() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center scroll-reveal ${revealed ? 'revealed' : ''}`}
        >
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-[rgba(255,153,51,0.15)] aspect-[4/3]">
              <img
                src="https://picsum.photos/seed/jmt-about/800/600"
                alt="JMT Manufacturing"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#ff9933] rounded-2xl flex items-center justify-center">
              <div className="text-center text-black">
                <div className="font-jakarta font-bold text-2xl leading-none">4+</div>
                <div className="text-xs font-inter font-medium">Years</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(255,153,51,0.1)] border border-[rgba(255,153,51,0.2)]">
              <span className="text-[#ff9933] text-xs font-inter font-medium tracking-wider uppercase">About JMT</span>
            </div>

            <h2 className="font-jakarta text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Your trusted partner for <span className="text-[#ff9933]">premium branding</span> solutions
            </h2>

            <p className="text-[#a3a3a3] font-inter leading-relaxed">
              Founded in 2022, Jeen Mata Traders (JMT) has rapidly grown into a trusted name in the corporate gifting and promotional products industry. We specialize in manufacturing and supplying high-quality bags, calendars, wall hangings, fridge magnets, and custom-branded merchandise.
            </p>

            <p className="text-[#737373] font-inter leading-relaxed">
              With an in-house production facility and a commitment to excellence, we ensure every product meets the highest standards before it reaches your hands. Our clients range from startups to Fortune 500 companies.
            </p>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feat) => (
                <div
                  key={feat.title}
                  className="p-4 rounded-xl bg-card border border-border hover:border-[#ff9933]/50 transition-all group"
                >
                  <feat.icon className="w-5 h-5 text-[#ff9933] mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-foreground font-jakarta font-semibold text-sm mb-1">{feat.title}</h3>
                  <p className="text-[#737373] text-xs font-inter leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
