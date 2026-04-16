'use client';

import { useState, useCallback, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ShoppingBag, MessageCircle, ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { products, productTabs, Product } from '@/lib/data';

const ITEMS_PER_PAGE = 9;

function ProductLightbox({
  product,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  product: Product;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      {/* Content */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#141414] border border-[rgba(255,153,51,0.2)] rounded-3xl overflow-hidden animate-in zoom-in-95 duration-200 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row max-h-[90vh]">
          {/* Image */}
          <div className="relative md:w-1/2 aspect-square bg-black flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
            {/* Nav arrows on image */}
            {hasPrev && (
              <button
                onClick={onPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {hasNext && (
              <button
                onClick={onNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Details */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              {product.itemCode && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[rgba(255,153,51,0.1)] border border-[rgba(255,153,51,0.2)] text-[#ff9933] text-xs font-inter font-bold tracking-wider uppercase mb-3">
                  {product.itemCode}
                </span>
              )}
              <h2 className="text-white font-jakarta text-2xl font-bold mb-2">
                {product.name}
              </h2>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#ff9933] font-jakarta text-3xl font-bold">{product.price}</span>
                <span className="text-[#737373] text-sm font-inter">per unit</span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-[#a3a3a3] text-sm font-inter">
                  <span className="w-2 h-2 rounded-full bg-[#ff9933]" />
                  Premium quality finish
                </div>
                <div className="flex items-center gap-2 text-[#a3a3a3] text-sm font-inter">
                  <span className="w-2 h-2 rounded-full bg-[#ff9933]" />
                  Bulk order available
                </div>
                <div className="flex items-center gap-2 text-[#a3a3a3] text-sm font-inter">
                  <span className="w-2 h-2 rounded-full bg-[#ff9933]" />
                  Custom branding support
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={`https://wa.me/919953413253?text=${encodeURIComponent(`Hi JMT, I am interested in *${product.name}* (${product.itemCode || 'N/A'}) at ${product.price}/unit. Please share more details and MOQ.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-inter font-bold text-sm rounded-xl transition-all shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4" />
                Enquire on WhatsApp
              </a>
              <a
                href={`https://wa.me/919953413253?text=${encodeURIComponent(`Hi JMT, I'd like to request a sample for *${product.name}* (${product.itemCode || 'N/A'}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-transparent border border-[rgba(255,153,51,0.3)] text-[#ff9933] font-inter font-bold text-sm rounded-xl hover:bg-[rgba(255,153,51,0.1)] transition-all"
              >
                Request Sample
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [activeTab, setActiveTab] = useState('wall_hangings');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [lightboxProduct, setLightboxProduct] = useState<Product | null>(null);
  const { ref, revealed } = useScrollReveal();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');

    if (category && productTabs.some((tab) => tab.key === category)) {
      setActiveTab(category);
    }
  }, []);

  const filtered = activeTab === 'all' ? products : products.filter((p) => p.category === activeTab);
  const visibleProducts = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
    setVisibleCount(ITEMS_PER_PAGE);
  }, []);

  // Lightbox navigation
  const currentLightboxIndex = lightboxProduct ? filtered.findIndex((p) => p.id === lightboxProduct.id) : -1;
  const handlePrevProduct = useCallback(() => {
    if (currentLightboxIndex > 0) {
      setLightboxProduct(filtered[currentLightboxIndex - 1]);
    }
  }, [currentLightboxIndex, filtered]);
  const handleNextProduct = useCallback(() => {
    if (currentLightboxIndex < filtered.length - 1) {
      setLightboxProduct(filtered[currentLightboxIndex + 1]);
    }
  }, [currentLightboxIndex, filtered]);

  // Category counts
  const categoryCounts: Record<string, number> = {};
  products.forEach((p) => {
    categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
  });

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Ambient glassmorphism accents */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[rgba(255,153,51,0.04)] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[rgba(255,215,0,0.03)] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div ref={ref} className={`scroll-reveal ${revealed ? 'revealed' : ''}`}>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(255,153,51,0.1)] border border-[rgba(255,153,51,0.2)] mb-4">
                <ShoppingBag className="w-3.5 h-3.5 text-[#ff9933]" />
                <span className="text-[#ff9933] text-[10px] font-inter font-bold tracking-[0.2em] uppercase">Premium Inventory</span>
              </div>
              <h2 className="font-jakarta text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
                Product <span className="text-[#ff9933]">Catalog</span>
              </h2>
            </div>
            <p className="text-[#737373] font-inter max-w-md md:text-right leading-relaxed">
              Browse our latest export-quality product range, including the newly added wall hangings collection with live pricing and WhatsApp enquiry.
            </p>
          </div>

          {/* Controls & Grid */}
          <div className="space-y-8">
            {/* Tab Navigation with counts */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
              {productTabs.map((tab) => {
                const count = tab.key === 'all' ? products.length : (categoryCounts[tab.key] || 0);
                return (
                  <button
                    key={tab.key}
                    onClick={() => handleTabChange(tab.key)}
                    className={`px-5 py-2.5 rounded-full text-xs font-inter font-bold uppercase tracking-wider transition-all whitespace-nowrap border flex items-center gap-2 ${
                      activeTab === tab.key
                        ? 'bg-[#ff9933] border-[#ff9933] text-black shadow-lg shadow-[#ff9933]/20'
                        : 'bg-[#141414]/50 text-[#a3a3a3] border-white/5 hover:border-[#ff9933]/30 hover:text-white'
                    }`}
                  >
                    {tab.label}
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === tab.key ? 'bg-black/20 text-black' : 'bg-white/10 text-[#737373]'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Product count info */}
            <div className="flex items-center justify-between">
              <p className="text-[#737373] text-sm font-inter">
                Showing <span className="text-white font-semibold">{visibleProducts.length}</span> of <span className="text-white font-semibold">{filtered.length}</span> products
                {activeTab !== 'all' && (
                  <span> in <span className="text-[#ff9933] font-semibold">{productTabs.find(t => t.key === activeTab)?.label}</span></span>
                )}
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
              {visibleProducts.map((product, i) => (
                <div
                  key={product.id}
                  className="group relative bg-card dark:bg-[#0d0d0d] rounded-2xl border border-border/50 hover:border-[#ff9933]/20 transition-all duration-500 overflow-hidden cursor-pointer"
                  style={{ animationDelay: `${i * 50}ms` }}
                  onClick={() => setLightboxProduct(product)}
                >
                  {/* Hover Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff9933]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Image Box */}
                    <div className="relative rounded-t-2xl overflow-hidden aspect-square bg-white border-b border-border/50 p-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-2 right-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-xl">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                      {/* Item code badge */}
                      {product.itemCode && (
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/70 text-[#ff9933] text-[10px] font-inter font-bold tracking-wider">
                          {product.itemCode}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-3 sm:p-4 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] font-inter font-bold text-[#ff9933]/70 uppercase tracking-widest truncate">{product.category.replace('_', ' ')}</span>
                        <span className="text-foreground font-jakarta font-bold text-sm sm:text-base">{product.price}</span>
                      </div>
                      <h3 className="text-foreground font-jakarta text-xs sm:text-sm font-bold leading-tight group-hover:text-[#ff9933] transition-colors line-clamp-2">
                        {product.name}
                      </h3>

                      {/* Quick WhatsApp */}
                      <a
                        href={`https://wa.me/919953413253?text=${encodeURIComponent(`Hi JMT, I am interested in *${product.name}* (${product.itemCode || 'N/A'}) at ${product.price}/unit. Please share details.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto pt-3 flex items-center justify-center gap-1.5 py-2.5 bg-white hover:bg-[#25D366] text-black hover:text-white font-inter font-bold text-[10px] uppercase tracking-widest rounded-xl transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Enquire
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            {hasMore && (
              <div className="text-center pt-4">
                <button
                  onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-border text-foreground font-inter font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:border-[#ff9933] hover:text-[#ff9933] transition-all"
                >
                  Load More ({filtered.length - visibleCount} remaining)
                </button>
              </div>
            )}

            {/* Show All shortcut */}
            {hasMore && filtered.length > ITEMS_PER_PAGE && (
              <div className="text-center">
                <button
                  onClick={() => setVisibleCount(filtered.length)}
                  className="text-[#737373] hover:text-[#ff9933] text-xs font-inter font-medium underline underline-offset-4 transition-colors"
                >
                  Show all {filtered.length} products
                </button>
              </div>
            )}
          </div>

          {/* Footer Callout */}
          <div className="mt-16 text-center">
            <p className="text-[#737373] text-sm mb-6">Don&apos;t see what you&apos;re looking for?</p>
            <a
              href="https://wa.me/919953413253"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-border text-foreground font-inter font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:border-[#ff9933] hover:text-[#ff9933] transition-all"
            >
              Request Custom Quote
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxProduct && (
        <ProductLightbox
          product={lightboxProduct}
          onClose={() => setLightboxProduct(null)}
          onPrev={handlePrevProduct}
          onNext={handleNextProduct}
          hasPrev={currentLightboxIndex > 0}
          hasNext={currentLightboxIndex < filtered.length - 1}
        />
      )}
    </section>
  );
}
