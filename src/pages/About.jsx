import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Compass } from "../icons.jsx";

export default function About() {
  return (
    <div className="bg-transparent min-h-screen py-10 sm:py-16">
      <div className="container-app">
        {/* Editorial Masthead */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <p className="kicker mb-3">OUR PHILOSOPHY • SLOW LUXURY</p>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-charcoal leading-editorial tracking-tightest mb-6">
            Preserving the sacred art of unhurried Indian discovery.
          </h1>
          <p className="subtitle text-sm sm:text-base md:text-lg leading-relaxed">
            AllOverBharat was founded on a singular conviction: that India’s
            living culture, sacred geographies, and architectural treasures
            should be experienced with reverence, time, and bespoke hospitality.
          </p>
        </div>

        {/* 4 Pillars Grid: Responsive 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="card p-6 sm:p-8 text-left transition-all duration-300 hover:border-brand-charcoal/20 bg-white shadow-xs">
            <span className="text-2xl mb-4 block">🏛️</span>
            <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-2">
              Curated Heritage
            </h3>
            <p className="subtitle text-xs leading-relaxed">
              Rare access to private havelis, family-run tea estates, and
              centuries-old royal palaces.
            </p>
          </div>

          <div className="card p-6 sm:p-8 text-left transition-all duration-300 hover:border-brand-charcoal/20 bg-white shadow-xs">
            <span className="text-2xl mb-4 block">🌿</span>
            <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-2">
              Mindful Footprints
            </h3>
            <p className="subtitle text-xs leading-relaxed">
              Committed to zero plastic waste, supporting local artisans, and
              empowering rural homestay hosts.
            </p>
          </div>

          <div className="card p-6 sm:p-8 text-left transition-all duration-300 hover:border-brand-charcoal/20 bg-white shadow-xs">
            <span className="text-2xl mb-4 block">✨</span>
            <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-2">
              Personal Chauffeurs
            </h3>
            <p className="subtitle text-xs leading-relaxed">
              Vetted local drivers who know every secret mountain hairpin turn
              and historic bazaar passage.
            </p>
          </div>

          <div className="card p-6 sm:p-8 text-left transition-all duration-300 hover:border-brand-charcoal/20 bg-white shadow-xs">
            <span className="text-2xl mb-4 block">🕊️</span>
            <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-2">
              24/7 Concierge
            </h3>
            <p className="subtitle text-xs leading-relaxed">
              Quiet, dependable assistance from Delhi, Jaipur, and Kochi hubs
              throughout your itinerary.
            </p>
          </div>
        </div>

        {/* Leadership & Company Team Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-10">
            <p className="kicker mb-2">LEADERSHIP & CRAFT • COMPANY TEAM</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal tracking-tight">
              The Minds Behind AllOverBharat
            </h2>
            <p className="subtitle text-xs sm:text-sm max-w-xl mx-auto mt-2">
              Combining deep heritage curation with modern digital craftsmanship
              to build India's foremost luxury exploration platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Founder Profile */}
            <div className="card p-6 sm:p-8 flex flex-col justify-between bg-white shadow-xs">
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-full bg-brand-sand border-2 border-brand-border flex items-center justify-center font-serif text-2xl font-bold text-brand-charcoal flex-shrink-0 shadow-sm">
                    VS
                  </div>
                  <div>
                    <span className="pill-tag text-[9px] mb-1 inline-block">
                      FOUNDER & CURATOR
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-brand-charcoal leading-snug">
                      Vishesh Sharma
                    </h3>
                    <p className="text-[11px] text-brand-taupe uppercase tracking-wider font-semibold">
                      Founder & Principal Expedition Designer
                    </p>
                  </div>
                </div>
                <p className="subtitle text-xs sm:text-sm leading-relaxed mb-6">
                  "We built AllOverBharat because modern travel had become a
                  rushed checklist of selfies. Bharat deserves better. When you
                  stay in a 300-year-old courtyard in Udaipur or wake up on a
                  private houseboat gliding across Vembanad Lake at dawn, time
                  slows down. That is true luxury."
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border flex items-center justify-between text-xs text-brand-taupe">
                <span className="font-serif italic font-bold text-brand-charcoal">
                  Vishesh S.
                </span>
                <span>•</span>
                <span>New Delhi, Bharat</span>
              </div>
            </div>

            {/* Developer Profile: Dhansukh Katariya */}
            <div className="card p-6 sm:p-8 flex flex-col justify-between bg-white shadow-xs">
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-charcoal/80 ring-4 ring-[#F2873B]/25 flex items-center justify-center font-serif text-2xl font-bold text-brand-charcoal flex-shrink-0 shadow-sm">
                    DK
                  </div>
                  <div>
                    <span
                      className="pill-tag text-[9px] mb-1 inline-block"
                      style={{
                        color: "#3A7531",
                        borderColor: "rgba(58,117,49,0.25)",
                        background: "rgba(58,117,49,0.08)",
                      }}
                    >
                      LEAD ENGINEERING & TECH
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-brand-charcoal leading-snug">
                      Dhansukh Katariya
                    </h3>
                    <p className="text-[11px] text-brand-taupe uppercase tracking-wider font-semibold">
                      Lead Full-Stack Developer & Platform Architect
                    </p>
                  </div>
                </div>
                <p className="subtitle text-xs sm:text-sm leading-relaxed mb-6">
                  "Architecting a high-performance web platform that mirrors the
                  elegance, serenity, and depth of slow Indian travel. Dedicated
                  to responsive glassmorphic UI design, intuitive booking flows,
                  and engineering reliable tools for discerning travelers across
                  Bharat."
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border flex items-center justify-between text-xs text-brand-taupe">
                <span className="font-serif italic font-bold text-brand-charcoal">
                  Dhansukh K.
                </span>
                <span>•</span>
                <span>Engineering Desk, Bharat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Stats Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center py-10 px-4 border border-brand-border mb-20 bg-white/70 backdrop-blur-md rounded-2xl shadow-xs">
          <div>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal">
              150+
            </h3>
            <p className="kicker mt-2 text-[10px] sm:text-xs">Bespoke Packages</p>
          </div>
          <div>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal">
              28 & 8
            </h3>
            <p className="kicker mt-2 text-[10px] sm:text-xs">States & Territories</p>
          </div>
          <div>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal">
              4.9★
            </h3>
            <p className="kicker mt-2 text-[10px] sm:text-xs">Traveler Rating</p>
          </div>
          <div>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal">
              24/7
            </h3>
            <p className="kicker mt-2 text-[10px] sm:text-xs">Concierge Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
