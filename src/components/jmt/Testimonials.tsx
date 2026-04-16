'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  { name: 'Rajesh Sharma', role: 'MD, Sharma Industries', rating: 5, review: 'Calendar quality was exceptional and delivery was exactly on schedule. Our distributors loved the premium print finish and the team was incredibly responsive throughout.' },
  { name: 'Priya Mehta', role: 'HR Head, TechVision Pvt Ltd', rating: 5, review: 'The laptop bags looked premium and branding was perfectly aligned. We reordered within two weeks for our next onboarding batch. Highly recommend JMT!' },
  { name: 'Amit Patel', role: 'Owner, Patel Enterprises', rating: 5, review: 'Consistent quality on every run, especially for fridge magnets and coasters. Communication stays clear from sampling to dispatch.' },
  { name: 'Sunita Verma', role: 'Director, Verma Exports', rating: 5, review: 'Packaging and finishing felt export-ready. Even urgent quantities were managed without compromising quality. A dependable partner.' },
  { name: 'Nikhil Arora', role: 'Procurement Head, Arora Group', rating: 5, review: 'The team shared practical suggestions that reduced cost and improved final look. Very reliable production partner for bulk orders.' },
  { name: 'Farhan Khan', role: 'Dealer Partner, Lucknow', rating: 5, review: 'Our wall hanging batch came exactly as approved in mockups. Timelines and updates were professional end-to-end.' },
  { name: 'Meera Joshi', role: 'Operations Lead, Joshi & Co', rating: 5, review: 'Quick turnaround and honest pricing. The quality checks before dispatch are clearly visible in final output.' },
  { name: 'Kabir Sethi', role: 'Enterprise Client, Mumbai', rating: 5, review: 'JMT handled custom branding for multiple SKUs smoothly. Their response speed is better than most vendors we tested.' },
  { name: 'Anjali Roy', role: 'Creative Director, Roy Designs', rating: 5, review: 'The team helped us select better material options within budget. Final products looked premium and durable.' },
];

const avatarGradients = [
  ['#ff9933', '#ff6600'],
  ['#ffd700', '#ff9933'],
  ['#ff6600', '#cc4400'],
  ['#ffcc00', '#ff9933'],
  ['#e68a2e', '#cc7a22'],
  ['#d4af37', '#b8860b'],
  ['#ff8800', '#e67700'],
  ['#ffb347', '#ff9933'],
  ['#daa520', '#b8860b'],
];

function Avatar({ name, index }: { name: string; index: number }) {
  const initials = name.split(' ').map(n => n[0]).join('');
  const gradient = avatarGradients[index % avatarGradients.length];

  return (
    <div
      className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-jakarta font-bold shrink-0 shadow-md"
      style={{
        background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
        border: '2.5px solid rgba(255, 255, 255, 0.2)',
        boxShadow: `0 2px 8px ${gradient[0]}40`,
      }}
    >
      {initials}
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? '#d4af37' : '#444444'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, revealed } = useScrollReveal();
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-advance
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(next, 4500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next, isPaused]);

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(deltaX) < 40) return;
    if (deltaX < 0) next();
    else prev();
  };

  const totalDots = maxIndex + 1;

  // Get visible testimonials
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-24 relative overflow-hidden"
      style={{ backgroundColor: '#f7f5f0' }}
    >
      {/* Subtle decorative background elements */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,153,51,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)' }}
      />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 relative z-10 scroll-reveal ${revealed ? 'revealed' : ''}`}
      >
        {/* Header with decorative lines */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4">
            <div className="h-px flex-1 max-w-[60px] sm:max-w-[120px]" style={{ backgroundColor: 'rgba(212,175,55,0.4)' }} />
            <h2
              className="font-jakarta text-xl sm:text-2xl lg:text-3xl font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase"
              style={{ color: '#b8860b' }}
            >
              Testimonials
            </h2>
            <div className="h-px flex-1 max-w-[60px] sm:max-w-[120px]" style={{ backgroundColor: 'rgba(212,175,55,0.4)' }} />
          </div>
          <p className="text-sm sm:text-base font-inter" style={{ color: '#888888' }}>
            Here&apos;s what they have to say
          </p>
        </div>

        {/* Cards container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 sm:-left-2 lg:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-xl"
            style={{
              backgroundColor: '#1e1e1e',
              color: '#d4af37',
              border: '1px solid rgba(212,175,55,0.25)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 sm:-right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-xl"
            style={{
              backgroundColor: '#1e1e1e',
              color: '#d4af37',
              border: '1px solid rgba(212,175,55,0.25)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards row with smooth transition */}
          <div className="overflow-hidden mx-10 sm:mx-14 lg:mx-16">
            <div
              className="grid gap-5 sm:gap-6"
              style={{
                gridTemplateColumns: `repeat(${cardsPerView}, 1fr)`,
              }}
            >
              {visibleTestimonials.map((t, i) => {
                const globalIndex = currentIndex + i;
                return (
                  <div
                    key={`${currentIndex}-${i}`}
                    className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                    style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
                  >
                    <div
                      className="h-full flex flex-col relative overflow-hidden"
                      style={{
                        backgroundColor: '#1e1e1e',
                        borderRadius: '12px',
                        padding: '1.75rem 1.5rem',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.1)',
                        border: '1px solid rgba(255,255,255,0.05)',
                      }}
                    >
                      {/* Decorative large quote mark */}
                      <div
                        className="absolute top-2 right-4 pointer-events-none select-none"
                        style={{ color: 'rgba(212,175,55,0.1)', fontSize: '5rem', lineHeight: '1', fontFamily: 'Playfair Display, serif' }}
                      >
                        &rdquo;
                      </div>

                      {/* Stars */}
                      <div className="relative z-10">
                        <StarRating rating={t.rating} />
                      </div>

                      {/* Opening quote mark */}
                      <div className="mt-3 mb-1 relative z-10">
                        <span
                          className="text-4xl leading-none font-playfair block"
                          style={{ color: 'rgba(212,175,55,0.35)' }}
                        >
                          &ldquo;
                        </span>
                      </div>

                      {/* Review text */}
                      <p
                        className="text-sm relative z-10 flex-1"
                        style={{
                          color: '#cccccc',
                          lineHeight: '1.75',
                          letterSpacing: '0.01em',
                        }}
                      >
                        {t.review}
                      </p>

                      {/* Divider + Avatar + name + role */}
                      <div
                        className="flex items-center gap-3 mt-5 pt-4 relative z-10"
                        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
                      >
                        <Avatar name={t.name} index={globalIndex} />
                        <div>
                          <div
                            className="text-sm font-semibold font-inter"
                            style={{ color: '#ffffff' }}
                          >
                            {t.name}
                          </div>
                          <div
                            className="text-xs font-inter mt-0.5"
                            style={{ color: '#888888' }}
                          >
                            {t.role}
                          </div>
                        </div>
                      </div>

                      {/* Subtle bottom accent line */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-[3px]"
                        style={{
                          background: 'linear-gradient(90deg, #d4af37, #ff9933, #d4af37)',
                          opacity: 0.6,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center items-center gap-2.5 mt-10">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: currentIndex === i ? '28px' : '8px',
                height: '8px',
                backgroundColor: currentIndex === i ? '#d4af37' : '#cccccc',
                opacity: currentIndex === i ? 1 : 0.5,
              }}
              aria-label={`Go to testimonial group ${i + 1}`}
            />
          ))}
        </div>

        {/* Trust badge */}
        <div className="text-center mt-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              backgroundColor: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.15)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#d4af37" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span className="text-xs font-inter font-medium" style={{ color: '#b8860b' }}>
              Verified Reviews from {testimonials.length}+ Happy Clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
