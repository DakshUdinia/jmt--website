'use client';

import { FileText, Download } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { catalogPDFs } from '@/lib/data';

export default function PDFArchive() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="pdf-archive" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`scroll-reveal ${revealed ? 'revealed' : ''}`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(255,153,51,0.1)] border border-[rgba(255,153,51,0.2)] mb-4">
              <FileText className="w-3.5 h-3.5 text-[#ff9933]" />
              <span className="text-[#ff9933] text-xs font-inter font-medium tracking-wider uppercase">Downloads</span>
            </div>
            <h2 className="font-jakarta text-3xl sm:text-4xl font-bold text-foreground">
              PDF <span className="text-[#ff9933]">archive</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {catalogPDFs.map((pdf) => (
              <div
                key={pdf.title}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-[#ff9933]/50 transition-all shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(255,153,51,0.1)] flex items-center justify-center mb-3 group-hover:bg-[rgba(255,153,51,0.2)] transition-colors">
                  <FileText className="w-5 h-5 text-[#ff9933]" />
                </div>
                <h3 className="text-foreground font-jakarta font-semibold text-sm mb-1">{pdf.title}</h3>
                <p className="text-[#737373] text-xs font-inter mb-3">{pdf.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#737373] text-xs font-inter">{pdf.size}</span>
                  {pdf.available ? (
                    <a
                      href={pdf.file}
                      className="flex items-center gap-1 text-[#ff9933] text-xs font-inter font-bold uppercase tracking-wider hover:underline hover:scale-105 transition-all"
                    >
                      <Download className="w-3 h-3" />
                      Download
                    </a>
                  ) : (
                    <a
                      href={`https://wa.me/919953413253?text=${encodeURIComponent(`Hi JMT, please share the latest ${pdf.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#ff9933] text-xs font-inter font-bold uppercase tracking-wider hover:underline hover:scale-105 transition-all"
                    >
                      <Download className="w-3 h-3" />
                      Request
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
