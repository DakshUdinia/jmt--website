'use client';

function JMTShieldLogoFooter() {
  return (
    <svg width="48" height="53" viewBox="0 0 300 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="footer-text-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4d8de" />
          <stop offset="50%" stopColor="#b8bec6" />
          <stop offset="100%" stopColor="#8a919b" />
        </linearGradient>
      </defs>
      <g transform="translate(150,155)">
        <path
          d="M0,-130 L115,-75 L115,25 Q115,105 0,140 Q-115,105 -115,25 L-115,-75 Z"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="4"
        />
        <path
          d="M0,-118 L103,-67 L103,20 Q103,95 0,127 Q-103,95 -103,20 L-103,-67 Z"
          fill="#1f2937"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1.5"
        />
        <path
          d="M-28,-90 L-14,-108 L0,-90 L14,-108 L28,-90"
          fill="none"
          stroke="#c8952e"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="-14" cy="-108" r="2.5" fill="#c8952e" />
        <circle cx="14" cy="-108" r="2.5" fill="#c8952e" />
        <circle cx="0" cy="-90" r="2" fill="#c8952e" opacity="0.5" />
        <line x1="-70" y1="-35" x2="70" y2="-35" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" opacity="0.5" />
        <text
          x="0"
          y="28"
          textAnchor="middle"
          fill="url(#footer-text-gradient)"
          fontSize="80"
          fontFamily="'Cormorant Garamond', serif"
          fontWeight="700"
          letterSpacing="8"
        >
          JMT
        </text>
        <line x1="-70" y1="45" x2="70" y2="45" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" opacity="0.5" />
        <text
          x="0"
          y="72"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontSize="10"
          fill="rgba(255,255,255,0.3)"
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

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Catalog', href: '#products' },
  { label: 'Wall Hangings', href: '/?category=wall_hangings#products' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer
      className="relative z-10"
      style={{
        backgroundColor: '#111827',
        color: 'rgba(255, 255, 255, 0.5)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <JMTShieldLogoFooter />
              <div>
                <span className="block text-white font-cormorant text-xl font-bold leading-none">JMT</span>
                <span className="block text-[9px] text-white/35 font-inter tracking-[2.5px] font-semibold">JEEN MATA TRADERS</span>
              </div>
            </div>
            <p className="text-white/40 text-sm font-inter leading-relaxed max-w-[320px]">
              Manufacturing and exporting premium promotional products, corporate gifts, and everyday essentials since 2022. Proudly serving businesses across India and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/85 font-inter font-semibold text-xs uppercase tracking-[1.5px] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/40 hover:text-white/85 text-sm font-inter transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white/85 font-inter font-semibold text-xs uppercase tracking-[1.5px] mb-6">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm font-inter">
                <span>👤</span>
                <span className="text-white/40">Rajneesh (Owner)</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-inter">
                <span>📱</span>
                <a href="tel:+919953413253" className="text-white/40 hover:text-white/85 transition-colors">
                  +91 99534 13253
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm font-inter">
                <span>☎️</span>
                <a href="tel:01122153095" className="text-white/40 hover:text-white/85 transition-colors">
                  011-22153095
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm font-inter">
                <span>✉️</span>
                <a href="mailto:contact@jeenmatatraders.in" className="text-white/40 hover:text-white/85 transition-colors">
                  contact@jeenmatatraders.in
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm font-inter">
                <span>📍</span>
                <span className="text-white/40">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-inter text-white/40">
          <span>&copy; 2025 JMT — Jeen Mata Traders. All rights reserved.</span>
          <span>Made with 🙏 in India</span>
        </div>
      </div>
    </footer>
  );
}
