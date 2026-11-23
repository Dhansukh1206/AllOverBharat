import React, { useState } from "react";
import { ArrowRight, Globe, Sparkles } from "lucide-react";

interface FooterProps {
  brandName?: string;
  className?: string;
}

export default function Footer({
  className = "",
}: FooterProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currency, setCurrency] = useState("INR ₹");
  const [language, setLanguage] = useState("English");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <footer
      className={`text-white transition-colors duration-300 relative overflow-hidden mt-20 ${className}`}
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="/images/footer-nature.jpg"
          alt="Nature Background"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="py-14 md:py-20 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9933]" strokeWidth={1.5} />
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#FF9933]">
                The Sunday Dispatch
              </span>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
              Curated slow itineraries, hidden boutique stays, and cultural chronicles.
            </h3>
            <p className="text-sm md:text-base text-white/80 mt-3 font-sans leading-relaxed">
              Curated city guides, slow itineraries, and hidden boutique stays—delivered once a week.
            </p>
          </div>

          <div className="w-full lg:max-w-md">
            {isSubscribed ? (
              <div className="border-b border-[#FF9933] pb-3 text-sm text-white font-sans flex items-center justify-between">
                <span>You are on the list. Expect our next dispatch this Sunday.</span>
                <span className="text-[#FF9933] font-serif italic text-base">Welcome</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative">
                <div className="flex items-center border-b border-white/40 focus-within:border-[#FF9933] transition-colors pb-2.5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/50 font-sans focus:outline-none"
                    aria-label="Email Address for newsletter"
                  />
                  <button
                    type="submit"
                    className="ml-4 flex-shrink-0 text-sm font-medium text-white hover:text-[#FF9933] transition-colors inline-flex items-center gap-1.5 group cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </button>
                </div>
                <p className="text-[11px] text-white/60 mt-2 font-sans tracking-wide">
                  No advertisements or spam. Mindfully curated, easily unsubscribed.
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="h-px w-full bg-white/15" />

        <div className="py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-5 space-y-6 lg:pr-10">
            <div>
              <a
                href="/"
                className="font-serif text-2xl md:text-3xl font-bold tracking-tight inline-block hover:opacity-90 transition-opacity"
              >
                <span className="text-[#FF9933]">All</span>
                <span className="text-white px-0.5">Over</span>
                <span className="text-[#22C55E] italic font-semibold">Bharat</span>
              </a>
              <div
                className="flex items-center gap-1.5 mt-2.5"
                title="Tiranga — Indian National Flag Colors"
                aria-label="Indian National Flag Colors"
              >
                <span className="h-1.5 w-7 rounded-full bg-[#FF9933] shadow-xs" />
                <span className="h-1.5 w-7 rounded-full bg-white shadow-xs" />
                <span className="h-1.5 w-7 rounded-full bg-[#22C55E] shadow-xs" />
              </div>
            </div>
            <p className="text-sm text-white/80 font-sans leading-relaxed max-w-sm">
              We curate slow, contemplative journeys across sacred landscapes, heritage havelis, and forgotten routes. Travel as an act of quiet discovery, honoring local custodians and enduring architecture.
            </p>
            <div className="flex items-center gap-6 pt-2 text-xs uppercase tracking-[0.14em] text-white/70 font-medium font-sans">
              <a
                href="#instagram"
                className="hover:text-[#FF9933] transition-colors"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href="#journal"
                className="hover:text-[#FF9933] transition-colors"
              >
                Journal
              </a>
              <a
                href="#field-notes"
                className="hover:text-[#FF9933] transition-colors"
              >
                Field Notes
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#FF9933] mb-5 block">
              Destinations
            </span>
            <ul className="space-y-3.5 text-sm font-sans text-white/85">
              {["Amalfi Coast", "Kyoto", "Rajasthan", "Swiss Alps", "All Guides"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-[#FF9933] transition-colors inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#FF9933] mb-5 block">
              Curation
            </span>
            <ul className="space-y-3.5 text-sm font-sans text-white/85">
              {["Boutique Stays", "Coastal Retreats", "Slow Rail Routes", "Culinary Maps"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-[#FF9933] transition-colors inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#FF9933] mb-5 block">
              Concierge
            </span>
            <ul className="space-y-3.5 text-sm font-sans text-white/85">
              {["Trip Planner", "Offline Maps", "Travel Insurance", "24/7 Concierge Support"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-[#FF9933] transition-colors inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-white/15" />

        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 pb-20 md:pb-8">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-white/70 font-sans">
            <span>
              © 2026{" "}
              <span className="font-semibold">
                <span className="text-[#FF9933]">All</span>
                <span className="text-white px-0.5">Over</span>
                <span className="text-[#22C55E]">Bharat</span>
              </span>
              . All rights reserved.
            </span>
            <a href="#privacy" className="hover:text-[#FF9933] transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-[#FF9933] transition-colors">
              Terms
            </a>
            <a href="#sitemap" className="hover:text-[#FF9933] transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
