'use client';

import { MessageCircle, Instagram, Truck } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-black text-white/70 text-xs font-inter border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/919953413253"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#ff9933] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <a
            href="https://instagram.com/jmt.traders"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#ff9933] transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">@jmt.traders</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <Truck className="w-3.5 h-3.5 text-[#ff9933]" />
          <span>Pan India Shipping</span>
          <span className="hidden sm:inline ml-2">|</span>
          <span className="hidden sm:inline ml-2">📞 +91-9953413253</span>
        </div>
      </div>
    </div>
  );
}
