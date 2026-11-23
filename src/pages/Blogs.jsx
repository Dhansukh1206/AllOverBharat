import React, { useState } from "react";
import blogs from "../data/blogs.json";
import { ArrowRight, BookOpen, Clock, Calendar, User, Sparkles, X, Share2, Compass } from "lucide-react";

export default function Blogs() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Architectural Heritage",
    "Spiritual Journeys",
    "Culture & Gastronomy",
    "Seasonal Expeditions",
  ];

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  const featuredBlog = blogs[0];

  return (
    <div className="container-app my-8 sm:my-14 pb-20">
      <section className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD5] shadow-xs mb-5">
          <div className="flex items-center gap-1" aria-hidden="true">
            <span className="h-1.5 w-2 rounded-full bg-[#FF671F]" />
            <span className="h-1.5 w-2 rounded-full bg-white border border-[#E5DFD5]" />
            <span className="h-1.5 w-2 rounded-full bg-[#138808]" />
          </div>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold text-[#68615A] font-sans">
            The AllOverBharat Chronicles • Essays & Field Notes
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] leading-[1.12] tracking-tight mb-5">
          Dispatches from the unhurried paths of Bharat.
        </h1>

        <p className="font-sans text-sm sm:text-base md:text-lg text-[#68615A] leading-relaxed max-w-2xl mx-auto">
          Reflective travel essays, living architectural histories, sacred geographies, and culinary field notes penned by our resident historians and slow travelers.
        </p>
      </section>

      <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-10 sm:mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all duration-200 cursor-pointer flex-shrink-0 border ${
              activeCategory === cat
                ? "bg-[#1C1917] text-white border-[#1C1917] shadow-xs"
                : "bg-white text-[#68615A] border-[#E5DFD5] hover:text-[#1C1917] hover:border-[#1C1917]/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {activeCategory === "All" && featuredBlog && (
        <section className="mb-14 sm:mb-16">
          <div
            onClick={() => setSelectedArticle(featuredBlog)}
            className="group rounded-3xl overflow-hidden border border-[#E5DFD5] bg-white shadow-xs hover:border-[#1C1917]/30 transition-all duration-300 cursor-pointer grid grid-cols-1 lg:grid-cols-12 items-stretch"
          >
            <div className="lg:col-span-7 h-72 sm:h-96 lg:h-full relative overflow-hidden bg-[#1C1917]">
              <img
                src={featuredBlog.image}
                alt={featuredBlog.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.14em] font-semibold text-[#1C1917] border border-[#E5DFD5] font-sans">
                Editor's Choice
              </div>
            </div>

            <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-xs text-[#68615A] font-medium font-sans mb-3">
                  <span className="text-[#FF671F] font-semibold uppercase tracking-wider text-[11px]">
                    {featuredBlog.category}
                  </span>
                  <span>•</span>
                  <span>{featuredBlog.readTime}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] leading-snug group-hover:text-[#FF671F] transition-colors mb-4">
                  {featuredBlog.title}
                </h2>

                <p className="font-sans text-xs sm:text-sm text-[#68615A] leading-relaxed line-clamp-3 mb-6">
                  {featuredBlog.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-[#E5DFD5] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#1C1917] font-sans font-medium">
                  <div className="w-7 h-7 rounded-full bg-[#F2EDE4] border border-[#E5DFD5] flex items-center justify-center font-serif text-xs font-bold text-[#1C1917]">
                    {featuredBlog.author.charAt(0)}
                  </div>
                  <span>{featuredBlog.author}</span>
                </div>

                <span className="font-sans text-xs font-semibold text-[#FF671F] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                  <span>Read Full Essay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="flex items-center justify-between border-b border-[#E5DFD5] pb-4 mb-8">
          <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
            {activeCategory === "All" ? "Latest Dispatches" : `${activeCategory}`}
          </h3>
          <span className="text-xs font-sans text-[#68615A]">
            Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? "article" : "articles"}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredBlogs.map((b) => (
            <article
              key={b.id}
              onClick={() => setSelectedArticle(b)}
              className="group rounded-3xl overflow-hidden border border-[#E5DFD5] bg-white shadow-xs hover:border-[#1C1917]/30 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#1C1917] relative">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.14em] font-semibold text-[#1C1917] border border-[#E5DFD5] font-sans">
                    {b.category}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-white font-medium font-sans">
                    {b.readTime}
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-xs text-[#68615A] mb-2.5 font-medium font-sans">
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

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] leading-snug group-hover:text-[#FF671F] transition-colors mb-3 line-clamp-2">
                    {b.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#68615A] leading-relaxed line-clamp-3">
                    {b.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 mt-auto border-t border-[#E5DFD5] flex items-center justify-between">
                <span className="font-sans text-xs font-semibold text-[#68615A] uppercase tracking-wider">
                  Essay
                </span>
                <span className="font-sans text-xs font-semibold text-[#1C1917] group-hover:text-[#FF671F] group-hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-[#FAF8F5] rounded-3xl border border-[#E5DFD5] shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#E5DFD5] flex items-center justify-between z-20">
              <span className="px-3 py-1 rounded-full text-xs font-sans font-semibold text-[#FF671F] bg-[#FAF8F5] border border-[#E5DFD5]">
                {selectedArticle.category}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="w-9 h-9 rounded-full border border-[#E5DFD5] flex items-center justify-center text-[#1C1917] font-sans hover:bg-[#F2EDE4] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-10 space-y-6">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-[#E5DFD5] shadow-xs">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-3 text-xs text-[#68615A] font-sans font-medium mb-2">
                  <span>BY {selectedArticle.author.toUpperCase()}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime.toUpperCase()}</span>
                  <span>•</span>
                  <span>
                    {new Date(selectedArticle.date).toLocaleDateString("en-IN", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1917] leading-tight mb-5">
                  {selectedArticle.title}
                </h2>

                <div className="font-sans text-sm sm:text-base text-[#1C1917] leading-relaxed space-y-4">
                  <p className="font-serif italic text-[#68615A] text-lg sm:text-xl border-l-2 border-[#FF671F] pl-5 my-5">
                    "{selectedArticle.excerpt}"
                  </p>
                  <p className="text-base text-[#1C1917] leading-relaxed">
                    {selectedArticle.content}
                  </p>
                  <div className="rounded-2xl bg-[#F2EDE4]/60 border border-[#E5DFD5] p-5 text-xs sm:text-sm text-[#68615A]">
                    <span className="font-serif font-bold text-[#1C1917] block mb-1">
                      Curated AllOverBharat Expedition
                    </span>
                    AllOverBharat organizes private guided journeys with regional historians to these historic landscapes. Departures feature vetted heritage stays, personal chauffeured navigation, and ethical traveler protocols.
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-[#E5DFD5] flex items-center justify-between z-20">
              <span className="text-xs text-[#68615A] font-sans">
                Written for AllOverBharat Chronicle
              </span>
              <a
                href={`https://wa.me/911800242728?text=Hello%20AllOverBharat%20Concierge,%20I%20read%20your%20article%20on%20${encodeURIComponent(selectedArticle.title)}%20and%20would%20like%20to%20plan%20a%20private%20journey.`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#FF671F] text-white font-sans font-medium text-xs hover:bg-[#E05612] transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Plan This Journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
