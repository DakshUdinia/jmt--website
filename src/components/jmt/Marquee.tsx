'use client';

const categories = [
  'Corporate Bags', 'Laptop Bags', 'Table Calendars', 'Wall Calendars', 'Wall Hangings',
  'Fridge Magnets', 'Coasters', 'Keychains', 'Diaries', 'Pen Sets', 'Promotional Items', 'Custom Branding'
];

export default function Marquee() {
  const doubled = [...categories, ...categories];
  return (
    <div className="relative overflow-hidden py-6 border-y border-[rgba(255,153,51,0.1)] bg-[rgba(255,153,51,0.02)]">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((cat, i) => (
          <span key={i} className="mx-6 flex items-center gap-3 text-sm font-inter">
            <span className="text-[#ff9933] font-semibold">{cat}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff9933] opacity-50" />
          </span>
        ))}
      </div>
    </div>
  );
}
