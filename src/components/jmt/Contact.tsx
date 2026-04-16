'use client';

import { Phone, Mail, MapPin, User, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const contactCards = [
  { icon: User, title: 'Owner', value: 'Rajneesh', sub: 'Direct Contact', href: 'tel:+919953413253', color: '#9c27b0' },
  { icon: Phone, title: 'Mobile', value: '+91 99534 13253', sub: 'Mon-Sat, 10AM-7PM', href: 'tel:+919953413253', color: '#2196f3' },
  { icon: Phone, title: 'Landline', value: '011-22153095', sub: 'Office Hours', href: 'tel:01122153095', color: '#f44336' },
  { icon: Mail, title: 'Email', value: 'contact@jeenmatatraders.in', sub: 'Response within 24hrs', href: 'mailto:contact@jeenmatatraders.in', color: '#e1bee7' },
];

export default function Contact() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="contact" className="py-20 relative">
      {/* Decorative gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(255,153,51,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,215,0,0.04) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div ref={ref} className={`scroll-reveal ${revealed ? 'revealed' : ''}`}>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(255,153,51,0.1)] border border-[rgba(255,153,51,0.2)] mb-4">
              <span className="text-[#ff9933] text-xs font-inter font-medium tracking-wider uppercase">Contact</span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Let&apos;s work together
            </h2>
            <p className="text-[#a3a3a3] font-inter mt-3 max-w-lg mx-auto text-base">
              Tell us what you need — we will get back within 24 hours
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {contactCards.map((card, i) => (
              <a
                key={card.title}
                href={card.href}
                className="group p-5 rounded-xl bg-[#141414] border border-[rgba(255,153,51,0.08)] hover:border-[rgba(255,153,51,0.25)] transition-all text-center hover:-translate-y-1 hover:shadow-lg"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div
                  className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${card.color}20` }}
                >
                  <card.icon className="w-5 h-5" style={{ color: card.color }} />
                </div>
                <span className="block text-[10px] uppercase tracking-[0.15em] font-inter font-semibold text-[#737373] mb-1">
                  {card.title}
                </span>
                <span className="block text-white font-inter font-semibold text-sm">
                  {card.value}
                </span>
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center">
            <a
              href="https://wa.me/919953413253"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-inter font-semibold text-base rounded-full transition-all hover:shadow-lg hover:shadow-[rgba(37,211,102,0.3)] hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Inquiry
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
