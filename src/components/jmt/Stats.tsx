'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  { value: '100+', label: 'Clients Served' },
  { value: '1L+', label: 'Units Delivered' },
  { value: '50+', label: 'Product Categories' },
  { value: '4+', label: 'Years Experience' },
];

export default function Stats() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section
      className="py-16 relative bg-secondary/30 border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 scroll-reveal ${revealed ? 'revealed' : ''}`}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative text-center p-6 sm:p-8"
            >
              {/* Vertical divider line */}
              {i < stats.length - 1 && (
                <div
                  className="hidden lg:block absolute right-0 top-[20%] h-[60%] w-px bg-primary/30"
                />
              )}
              <div
                className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-foreground"
              >
                {stat.value}
              </div>
              <div className="text-[#737373] text-sm font-inter font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
