'use client';

import { useState } from 'react';
import { X, Send } from 'lucide-react';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickQuoteModal({ isOpen, onClose }: QuickQuoteModalProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', product: '', quantity: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setForm({ name: '', email: '', phone: '', company: '', product: '', quantity: '', message: '' });
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-md" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-card border border-border rounded-[2.5rem] overflow-hidden animate-in zoom-in-95 duration-200 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <div>
            <h2 className="text-foreground font-jakarta font-bold text-xl uppercase tracking-tighter">Quick Quote</h2>
            <p className="text-muted-foreground text-[10px] font-inter uppercase tracking-widest font-bold">Response within 24 hours</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-[rgba(255,153,51,0.1)] flex items-center justify-center mb-4">
              <Send className="w-7 h-7 text-[#ff9933]" />
            </div>
            <h3 className="text-white font-jakarta font-bold text-lg mb-2">Quote Request Sent!</h3>
            <p className="text-[#737373] font-inter text-sm">We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Name *"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder-muted-foreground text-sm font-inter focus:outline-none focus:border-[#ff9933] transition-all"
              />
              <input
                type="email"
                placeholder="Email *"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder-muted-foreground text-sm font-inter focus:outline-none focus:border-[#ff9933] transition-all"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="tel"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder-muted-foreground text-sm font-inter focus:outline-none focus:border-[#ff9933] transition-all"
              />
              <input
                type="text"
                placeholder="Company"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder-muted-foreground text-sm font-inter focus:outline-none focus:border-[#ff9933] transition-all"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Product Interest"
                value={form.product}
                onChange={(e) => setForm({ ...form, product: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder-muted-foreground text-sm font-inter focus:outline-none focus:border-[#ff9933] transition-all"
              />
              <input
                type="text"
                placeholder="Quantity"
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder-muted-foreground text-sm font-inter focus:outline-none focus:border-[#ff9933] transition-all"
              />
            </div>
            <textarea
              placeholder="Additional details..."
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-3 py-2.5 rounded-lg bg-[#0a0a0a] border border-[rgba(255,153,51,0.15)] text-[#f3f3f3] placeholder-[#737373] text-sm font-inter focus:outline-none focus:border-[#ff9933] resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#ff9933] hover:bg-[#e68a2e] text-black font-inter font-semibold text-sm rounded-lg transition-all hover:shadow-lg hover:shadow-[rgba(255,153,51,0.2)]"
            >
              Submit Quote Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
