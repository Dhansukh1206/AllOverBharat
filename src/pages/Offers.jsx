import React, { useState } from "react";
import offers from "../data/offers.json";
import {
  Gift,
  ArrowRight,
  Copy,
  Check,
  Calendar,
  Sparkles,
  ShieldCheck,
  Percent,
  Clock,
  Phone,
} from "lucide-react";

export default function Offers() {
  const [copiedCode, setCopiedCode] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filterCategories = ["All", "Heritage", "Coastal", "High Altitude"];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const filteredOffers = offers.filter((o) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Heritage")
      return o.title.toLowerCase().includes("heritage");
    if (activeFilter === "Coastal")
      return o.title.toLowerCase().includes("goa") || o.title.toLowerCase().includes("coast");
    if (activeFilter === "High Altitude")
      return o.title.toLowerCase().includes("ladakh") || o.title.toLowerCase().includes("kashmir");
    return true;
  });

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
            VIP Privileges & Seasonal Curations
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] leading-[1.12] tracking-tight mb-5">
          Exclusive seasonal privileges & bespoke rates.
        </h1>

        <p className="font-sans text-sm sm:text-base md:text-lg text-[#68615A] leading-relaxed max-w-2xl mx-auto">
          Limited-edition expedition credits, complimentary sunset sails, and ancestral room upgrades for discerning travelers exploring the sacred heart of Bharat.
        </p>
      </section>

      <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-10 sm:mb-12">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all duration-200 cursor-pointer flex-shrink-0 border ${
              activeFilter === cat
                ? "bg-[#1C1917] text-white border-[#1C1917] shadow-xs"
                : "bg-white text-[#68615A] border-[#E5DFD5] hover:text-[#1C1917] hover:border-[#1C1917]/30"
            }`}
          >
            {cat} Privileges
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {filteredOffers.map((o, idx) => (
          <div
            key={idx}
            className="group rounded-3xl overflow-hidden border border-[#E5DFD5] bg-white shadow-xs hover:border-[#1C1917]/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[16/9] overflow-hidden bg-[#1C1917] relative">
                <img
                  src={o.image}
                  alt={o.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-price font-bold text-[#FF671F] border border-[#E5DFD5] shadow-xs">
                  {o.discount || "VIP Privilege"}
                </span>

                <span className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-white font-sans font-medium">
                  Valid for 2026 departures
                </span>
              </div>

              <div className="p-7 sm:p-9">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E5DFD5] text-[10px] uppercase tracking-[0.14em] font-semibold text-[#138808] font-sans">
                    <Sparkles className="w-3 h-3 text-[#FF671F]" />
                    <span>Curated Privilege</span>
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] leading-snug mb-3 group-hover:text-[#FF671F] transition-colors">
                  {o.title}
                </h2>

                <p className="font-sans text-xs sm:text-sm text-[#68615A] leading-relaxed mb-6">
                  {o.description}
                </p>

                <div className="rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#68615A] block font-sans">
                      Promo Code
                    </span>
                    <span className="font-mono text-base font-bold text-[#1C1917] tracking-wider">
                      {o.code}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopy(o.code)}
                    className="px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD5] text-xs font-sans font-semibold text-[#1C1917] hover:border-[#1C1917] transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    {copiedCode === o.code ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#138808]" />
                        <span className="text-[#138808]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#68615A]" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="p-7 sm:p-9 pt-0 mt-auto border-t border-[#E5DFD5] flex items-center justify-between">
              <span className="text-xs text-[#68615A] font-sans">
                Complimentary Concierge Booking
              </span>

              <a
                href={`https://wa.me/911800242728?text=Hello%20AllOverBharat%20Concierge,%20I%20would%20like%20to%20claim%20the%20${encodeURIComponent(o.title)}%20using%20promo%20code%20${o.code}.`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#FF671F] text-white font-sans font-medium text-xs hover:bg-[#E05612] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Claim Privilege</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <section className="rounded-3xl bg-white border border-[#E5DFD5] p-8 sm:p-12 mb-16 shadow-xs">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#FF671F] block mb-2 font-sans">
            VIP Club Assurance
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
            The AllOverBharat Guarantee
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-2.5">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] flex items-center justify-center text-[#FF671F] mx-auto shadow-2xs">
              <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1C1917]">
              Best Private Rates
            </h3>
            <p className="text-xs sm:text-sm text-[#68615A] leading-relaxed font-sans">
              Direct contracts with private haveli owners and royal retreats guarantee unlisted bespoke pricing.
            </p>
          </div>

          <div className="text-center space-y-2.5">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] flex items-center justify-center text-[#138808] mx-auto shadow-2xs">
              <Sparkles className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1C1917]">
              Complimentary Inclusions
            </h3>
            <p className="text-xs sm:text-sm text-[#68615A] leading-relaxed font-sans">
              Every redeemed privilege includes dedicated chauffeured arrival, bespoke breakfast, and verified local storyteller.
            </p>
          </div>

          <div className="text-center space-y-2.5">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] flex items-center justify-center text-[#1C1917] mx-auto shadow-2xs">
              <Clock className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1C1917]">
              Flexible Rescheduling
            </h3>
            <p className="text-xs sm:text-sm text-[#68615A] leading-relaxed font-sans">
              Change your expedition dates up to 14 days prior without penalty across all partner properties.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-[#F2EDE4] via-[#FAF8F5] to-[#EAE3D7] border border-[#E5DFD5] p-8 sm:p-12 text-center relative overflow-hidden shadow-xs">
        <div className="relative z-10 max-w-xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#FF671F] block mb-2 font-sans">
            Custom Itineraries
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1917] leading-tight mb-4">
            Seeking a tailor-made private expedition?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#68615A] leading-relaxed mb-6">
            Our private travel desk designs bespoke coast-to-glacier routes with customized privilege credits for family groups and private parties.
          </p>
          <a
            href="https://wa.me/911800242728?text=Hello%20AllOverBharat%20Concierge,%20I%20would%20like%20to%20inquire%20about%20a%20custom%20private%20expedition."
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3 rounded-full bg-[#1C1917] text-white font-sans font-semibold text-xs hover:bg-[#FF671F] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF671F]" />
            <span>Connect with Travel Desk</span>
          </a>
        </div>
        <div
          className="absolute bottom-0 inset-x-0 h-1 flex pointer-events-none"
          aria-hidden="true"
        >
          <div className="flex-1 bg-[#FF671F]" />
          <div className="flex-1 bg-white border-y border-[#E5DFD5]" />
          <div className="flex-1 bg-[#138808]" />
        </div>
      </section>
    </div>
  );
}
