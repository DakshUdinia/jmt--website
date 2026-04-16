'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqs = [
  {
    q: 'What is the Minimum Order Quantity (MOQ)?',
    a: 'We maintain flexible MOQs to support businesses of all sizes. Generally, it\'s 100 units for custom calendars and 50 units for bags. For smaller promotional items, please inquire for specifics.',
  },
  {
    q: 'How long does production and delivery take?',
    a: 'Our standard production timeline is 7-10 business days depending on order complexity. Shipping typically takes another 3-5 days across India. We also offer expedited services for urgent corporate requirements.',
  },
  {
    q: 'Do you provide design services for custom orders?',
    a: 'Yes! We provide free basic design support and layout mockups for bulk orders. If you have existing brand assets, our team will ensure they are perfectly adapted for manufacturing.',
  },
  {
    q: 'Can I request a physical sample before bulk production?',
    a: 'Absolutely. We highly recommend physical samples for large orders. While there is a nominal sampling fee, it is fully refundable once the bulk order is confirmed.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bank transfers (NEFT/RTGS/IMPS), UPI payments, and cheques. For new clients, we typically require 50% advance and 50% before dispatch. Credit terms available for repeat clients.',
  },
  {
    q: 'Do you offer custom branding/logo printing?',
    a: 'Custom branding is our specialty. We offer screen printing, embroidery, heat transfer, UV printing, and more. Share your logo and we\'ll recommend the best method for your product and budget.',
  },
];

const quickLinks = [
  { label: 'MOQ & Budget Help', href: 'https://wa.me/919953413253?text=Hi%20JMT%2C%20please%20share%20MOQ%20and%20minimum%20budget%20details.' },
  { label: 'Delivery Timeline', href: 'https://wa.me/919953413253?text=Hi%20JMT%2C%20please%20share%20production%20and%20delivery%20timelines%20for%20my%20order.' },
  { label: 'Samples & Design', href: 'https://wa.me/919953413253?text=Hi%20JMT%2C%20I%20want%20a%20sample%20and%20design%20support%20for%20my%20project.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="faq" className="py-20 relative" style={{ backgroundColor: 'rgba(255,153,51,0.02)' }}>
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,153,51,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,153,51,0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <div ref={ref} className={`scroll-reveal ${revealed ? 'revealed' : ''}`}>
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12" style={{ backgroundColor: 'rgba(212,175,55,0.3)' }} />
              <span className="text-[#d4af37] text-xs font-inter font-bold tracking-[0.2em] uppercase">FAQ</span>
              <div className="h-px w-12" style={{ backgroundColor: 'rgba(212,175,55,0.3)' }} />
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Common Inquiries
            </h2>
            <p className="text-[#a3a3a3] font-inter mt-3 max-w-lg mx-auto text-base">
              Everything you need to know about starting your project with us
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-border text-foreground font-inter font-semibold text-sm hover:border-[#ff9933]/50 hover:-translate-y-0.5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden transition-all"
                style={{
                  backgroundColor: 'var(--card)',
                  border: `1px solid ${openIndex === i ? 'var(--primary)' : 'var(--border)'}`,
                  boxShadow: openIndex === i ? '0 4px 20px rgba(255,153,51,0.08)' : 'none',
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-foreground font-inter font-semibold text-base pr-4">{faq.q}</span>
                  <span
                    className="text-2xl leading-none shrink-0 transition-transform duration-400 font-light"
                    style={{
                      color: '#ff9933',
                      transform: openIndex === i ? 'rotate(0deg)' : 'rotate(45deg)',
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openIndex === i ? '200px' : '0' }}
                >
                  <p className="px-6 pb-5 text-[#a3a3a3] font-inter text-sm leading-relaxed max-w-[90%]">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
