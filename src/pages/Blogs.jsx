import React, { useState } from "react";
import blogs from "../data/blogs.json";
import SectionTitle from "../components/SectionTitle.jsx";
import { ArrowRight } from "../icons.jsx";

export default function Blogs() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="container-app my-8 sm:my-12">
      <div className="rounded-3xl border border-brand-border bg-white/70 backdrop-blur-md p-6 sm:p-10 mb-10 transition-all shadow-xs">
        <p className="kicker mb-2">EDITORIAL DISPATCHES • BHARAT STORIES</p>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tightest leading-editorial text-brand-charcoal mb-3">
          Travel Stories, Dispatches & Cultural Essays
        </h1>
        <p className="subtitle text-sm sm:text-base max-w-2xl">
          Deep dives into forgotten architecture, living traditions, culinary
          secrets, and sacred geography penned by our resident historians and
          travelers.
        </p>
      </div>

      <SectionTitle eyebrow="THE CHRONICLES">
        Featured Editorial Essays
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6">
        {blogs.map((b) => (
          <article
            key={b.id}
            className="card overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-brand-charcoal/30 bg-white shadow-xs transition-all duration-300"
            onClick={() => setSelectedArticle(b)}
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden bg-brand-charcoal relative">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-3 left-3 bg-[#FAF8F5]/92 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.14em] font-semibold text-brand-charcoal border border-brand-border">
                  {b.category}
                </span>
                <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-white font-medium">
                  {b.readTime}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs text-brand-taupe mb-2 font-medium">
                  <span>By {b.author}</span>
                  <span>•</span>
                  <span>
                    {new Date(b.date).toLocaleDateString("en-IN", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal leading-snug group-hover:text-brand-terracotta transition-colors mb-3">
                  {b.title}
                </h2>

                <p className="subtitle text-xs sm:text-sm leading-relaxed mb-4">
                  {b.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 mt-auto border-t border-brand-border flex items-center justify-between">
              <span className="text-xs font-semibold text-brand-taupe uppercase tracking-wider">
                Read Story
              </span>
              <button
                type="button"
                className="btn-ghost h-9 px-4 text-xs font-semibold"
              >
                <span>Read Essay</span>
                <ArrowRight className="h-3 w-3 ml-1.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-[#FAF8F5] rounded-3xl border border-brand-border shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-brand-border flex items-center justify-between z-20">
              <span className="pill-tag">{selectedArticle.category}</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center text-brand-charcoal font-bold hover:bg-brand-sand transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-brand-border">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="kicker mb-1">
                  BY {selectedArticle.author.toUpperCase()} •{" "}
                  {selectedArticle.readTime.toUpperCase()}
                </p>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-charcoal mb-4">
                  {selectedArticle.title}
                </h2>
                <div className="text-sm sm:text-base text-brand-charcoal leading-relaxed space-y-4">
                  <p className="italic text-brand-taupe text-base border-l-2 border-brand-terracotta pl-4 my-3">
                    "{selectedArticle.excerpt}"
                  </p>
                  <p>{selectedArticle.content}</p>
                  <p className="subtitle text-xs sm:text-sm">
                    AllOverBharat organizes private guided expeditions with
                    local historians to these historical locations. Every
                    departure includes verified haveli stays, private AC
                    transfer, and ethical traveler protocols.
                  </p>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-brand-border flex items-center justify-between z-20">
              <span className="text-xs text-brand-taupe">
                Written for AllOverBharat Editorial
              </span>
              <a
                href={`https://wa.me/911800242728?text=Hello%20AllOverBharat,%20I%20read%20your%20article%20on%20${encodeURIComponent(selectedArticle.title)}%20and%20would%20like%20to%20plan%20a%20trip.`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs px-5 h-10"
              >
                Plan a Trip to Here
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
