import React from "react";
import { ArrowRight } from "../icons.jsx";

export default function PackageCard({ item, onSelect }) {
  const handleClick = (e) => {
    if (onSelect) {
      e.preventDefault();
      onSelect(item);
    }
  };

  return (
    <a
      href={`/packages/${item.slug}`}
      onClick={handleClick}
      className="group relative flex flex-col justify-end aspect-[3/4] overflow-hidden rounded-2xl border border-brand-border bg-brand-charcoal transition-all duration-300 cursor-pointer"
    >
            <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />

            <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(to top, rgba(28, 25, 23, 0.90) 0%, rgba(28, 25, 23, 0.45) 50%, rgba(28, 25, 23, 0.1) 80%, transparent 100%)",
        }}
      />

            <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.14em] font-bold text-brand-charcoal border border-white/80 shadow-[0_2px_10px_rgba(0,0,0,0.22)]"
          style={{
            backdropFilter: "blur(16px) saturate(160%)",
            WebkitBackdropFilter: "blur(16px) saturate(160%)",
            background: "rgba(255, 255, 255, 0.75)",
          }}
        >
          {item.days}D / {item.nights}N
        </span>
      </div>

            <div className="relative z-10 flex flex-col justify-end text-[#FAF8F5]">
                <div className="px-5 pb-3">
          <h3 className="font-serif text-2xl font-bold leading-editorial text-[#FAF8F5] tracking-tight group-hover:underline underline-offset-4 decoration-1 decoration-[#FAF8F5]/60 transition-all">
            {item.title}
          </h3>

          <p className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#FAF8F5]/75 flex items-center gap-1.5 mt-1">
            <span>📍</span>
            <span>{item.location || "Incredible Bharat"}</span>
          </p>
        </div>

                <div
          className="w-full px-5 py-3.5 flex items-center justify-between border-t border-white/20 transition-all duration-300 group-hover:border-white/35"
          style={{
            backdropFilter: "blur(24px) saturate(160%)",
            WebkitBackdropFilter: "blur(24px) saturate(160%)",
            background: "rgba(20, 18, 16, 0.45)",
          }}
        >
          <div>
            <span className="text-[9px] text-[#FAF8F5]/75 uppercase tracking-wider block font-semibold">
              From
            </span>
            <span className="font-serif text-lg sm:text-xl font-bold text-brand-terracotta">
              ₹ {item.price.toLocaleString("en-IN")}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-brand-terracotta text-[#FAF8F5] text-xs font-semibold tracking-wide shadow-xs transition-colors group-hover:bg-brand-terracottaDark">
            <span>Details</span>
            <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </a>
  );
}
