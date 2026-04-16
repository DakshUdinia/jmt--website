'use client';

import { useState, useEffect } from 'react';
import { Search, MessageCircle, Menu, X, Sun, Moon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Wall Hangings', href: '/?category=wall_hangings#products' },
  { label: 'Benefits', href: '#why-choose' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

function JMTShieldLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={Math.round(size * 1.1)} viewBox="0 0 300 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(150,155)">
        <path
          d="M0,-130 L115,-75 L115,25 Q115,105 0,140 Q-115,105 -115,25 L-115,-75 Z"
          fill="none"
          stroke="#ffd700"
          strokeWidth="3"
        />
        <path
          d="M0,-118 L103,-67 L103,20 Q103,95 0,127 Q-103,95 -103,20 L-103,-67 Z"
          fill="#1a0a00"
          stroke="#ffd700"
          strokeWidth="1"
        />
        <path
          d="M0,-105 L92,-60 L92,15 Q92,83 0,114 Q-92,83 -92,15 L-92,-60 Z"
          fill="none"
          stroke="rgba(255,153,51,0.2)"
          strokeWidth="0.5"
        />
        <text
          x="0"
          y="28"
          textAnchor="middle"
          fill="#ffd700"
          fontSize="80"
          fontFamily="'Cormorant Garamond', serif"
          fontWeight="700"
          letterSpacing="8"
        >
          JMT
        </text>
        <text
          x="0"
          y="72"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontSize="10"
          fill="#a3a3a3"
          letterSpacing="6"
          fontWeight="600"
          opacity="0.75"
        >
          TRADERS
        </text>
      </g>
    </svg>
  );
}

export default function Header({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Scrolls away */}
      <div className={`w-full transition-colors duration-300 ${isDark ? 'bg-black text-white/50' : 'bg-neutral-100 text-black/50'} border-b ${isDark ? 'border-white/5' : 'border-black/5'} relative z-[1002]`}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-[10px] sm:text-xs font-inter uppercase tracking-widest font-semibold">
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="https://wa.me/919953413253" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff9933] transition-colors font-bold text-[#ff9933]">WhatsApp Support</a>
            <a href="https://instagram.com/jmt.traders" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff9933] transition-colors">Instagram</a>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#ff9933]" /> Pan India Shipping</span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-bold text-[#ff9933]">📞 +91 99534-13253</span>
          </div>
          <div className="sm:hidden font-bold text-[#ff9933]">📞 Call Now</div>
        </div>
      </div>

      {/* Main Header Wrapper */}
      <div className="sticky top-0 z-[1000] w-full px-4 pt-4 pointer-events-none">
        <header
          className={`mx-auto transition-all duration-500 pointer-events-auto ${scrolled ? 'max-w-[1240px]' : 'max-w-[1280px]'}`}
        >
          <nav
            className={`flex items-center justify-between gap-3 px-4 sm:px-6 py-2 rounded-full border transition-all duration-300 ${
              isDark
                ? scrolled 
                  ? 'bg-black/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50' 
                  : 'bg-black/40 backdrop-blur-md border-[rgba(255,153,51,0.15)]'
                : scrolled
                  ? 'bg-white/90 backdrop-blur-xl border-black/5 shadow-xl shadow-black/5'
                  : 'bg-white/60 backdrop-blur-md border-black/10'
            }`}
          >
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 shrink-0 group">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <JMTShieldLogo size={scrolled ? 30 : 34} />
              </div>
              <div className="hidden md:block">
                <span className={`font-cormorant text-lg font-bold leading-none block ${isDark ? 'text-[#ffd700]' : 'text-[#ff9933]'}`}>JMT</span>
                <span className={`block text-[8px] font-inter tracking-[2px] font-semibold ${isDark ? 'text-[#a3a3a3]' : 'text-neutral-500'}`}>JEEN MATA TRADERS</span>
              </div>
            </a>

            {/* Desktop Nav - Middle */}
            <div className={`hidden lg:flex items-center gap-1 p-1 rounded-full border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/5'}`}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-xs font-inter font-bold uppercase tracking-wider rounded-full transition-all ${
                    isDark 
                      ? 'text-[#a3a3a3] hover:text-white hover:bg-white/10' 
                      : 'text-neutral-500 hover:text-black hover:bg-black/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              {/* Search Icon (Trigger) */}
              <button 
                onClick={() => toast({ title: "Search Coming Soon", description: "Product search functionality is being integrated." })}
                className={`p-2.5 rounded-full transition-colors ${isDark ? 'bg-white/5 text-[#a3a3a3] hover:text-[#ff9933]' : 'bg-black/5 text-neutral-500 hover:text-[#ff9933]'}`}
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-full transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-[#ff9933]/50' 
                    : 'bg-black/5 border border-black/5 text-black hover:bg-black/10 hover:border-[#ff9933]/50'
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4 text-[#ffd700]" /> : <Moon className="w-4 h-4 text-[#ff9933]" />}
              </button>

              {/* WhatsApp Button (Hidden on small mobile) */}
              <a
                href="https://wa.me/919953413253"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] hover:scale-105 active:scale-95 text-white text-xs font-inter font-bold uppercase tracking-wider rounded-full transition-all shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire</span>
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2.5 rounded-full transition-colors ${isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-black'}`}
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>

          {/* Mobile menu overlay */}
          {mobileOpen && (
            <div className="absolute top-full left-0 right-0 mt-3 lg:hidden animate-in slide-in-from-top-2 duration-300 pointer-events-auto">
              <div className={`rounded-3xl border shadow-2xl p-6 space-y-3 ${
                isDark ? 'bg-black/95 backdrop-blur-2xl border-white/10' : 'bg-white/95 backdrop-blur-2xl border-black/10'
              }`}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3 px-6 rounded-2xl text-lg font-jakarta font-bold transition-all ${
                      isDark ? 'text-white hover:bg-white/5 hover:text-[#ff9933]' : 'text-black hover:bg-black/5 hover:text-[#ff9933]'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <div className={`h-px my-4 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                <a
                  href="https://wa.me/919953413253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white text-md font-inter font-bold rounded-2xl shadow-xl shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  );
}
