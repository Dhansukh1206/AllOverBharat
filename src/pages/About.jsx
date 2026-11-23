import React from "react";
import { NavLink } from "react-router-dom";
import {
  Compass,
  ArrowRight,
  Landmark,
  Leaf,
  ShieldCheck,
  Sparkles,
  MapPin,
  Clock,
  HeartHandshake,
  CheckCircle2,
  Calendar,
  Phone,
} from "lucide-react";

export default function About() {
  return (
    <div className="bg-transparent min-h-screen py-10 sm:py-16">
      <div className="container-app">
        <section className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD5] shadow-xs mb-6">
            <div className="flex items-center gap-1" aria-hidden="true">
              <span className="h-1.5 w-2 rounded-full bg-[#FF671F]" />
              <span className="h-1.5 w-2 rounded-full bg-white border border-[#E5DFD5]" />
              <span className="h-1.5 w-2 rounded-full bg-[#138808]" />
            </div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold text-[#68615A]">
              The AllOverBharat Chronicle • Established 2026
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] leading-[1.12] tracking-tight mb-6">
            Reclaiming the sacred art of unhurried Indian discovery.
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-xl text-[#68615A] leading-relaxed max-w-2xl mx-auto">
            We reject the hurried tourist circuit. AllOverBharat was founded on
            a singular conviction: that India’s living culture, sacred
            geographies, and royal architectural legacy should be experienced
            with reverence, time, and bespoke hospitality.
          </p>
        </section>

        <section className="mb-20 sm:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="group relative rounded-3xl overflow-hidden border border-[#E5DFD5] bg-white shadow-xs">
              <div className="h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&auto=format&fit=crop&q=80"
                  alt="Heritage Haveli of Shekhawati"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#FF671F] font-bold block mb-1.5">
                  Rajasthan • Sacred Havelis
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-2">
                  Living Architecture
                </h3>
                <p className="text-xs sm:text-sm text-[#68615A] leading-relaxed">
                  Private courtyards with century-old frescoes, candlelit
                  baoris, and ancestral royal suites closed to the public.
                </p>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden border border-[#E5DFD5] bg-white shadow-xs">
              <div className="h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=900&auto=format&fit=crop&q=80"
                  alt="Sacred Dawn on Varanasi Ghats"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#FF671F] font-bold block mb-1.5">
                  Uttar Pradesh • The Eternal River
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-2">
                  Sacred Geographies
                </h3>
                <p className="text-xs sm:text-sm text-[#68615A] leading-relaxed">
                  Dawn wooden rowboats across the quiet ghats, silent chants of
                  ancient priests, and slow twilight reflections.
                </p>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden border border-[#E5DFD5] bg-white shadow-xs">
              <div className="h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&auto=format&fit=crop&q=80"
                  alt="Misty tea gardens of Munnar Kerala"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#138808] font-bold block mb-1.5">
                  Kerala • Western Ghats
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-2">
                  Unhurried Wilderness
                </h3>
                <p className="text-xs sm:text-sm text-[#68615A] leading-relaxed">
                  Mist-shrouded spice plantations, silent backwater houseboats,
                  and wellness retreats rooted in ancient Ayurveda.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 sm:mb-24 rounded-3xl bg-[#F2EDE4]/60 border border-[#E5DFD5] p-8 sm:p-12 md:p-16">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#FF671F] block mb-2">
              Our Core Convictions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] leading-tight">
              Three commitments that separate true pilgrimage from standard
              tourism.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            <div className="space-y-3">
              <div className="font-serif text-3xl font-bold text-[#FF671F]">
                01
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                Slowness Over Rush
              </h3>
              <p className="text-sm text-[#68615A] leading-relaxed">
                Modern travel has become a checklist of hurried photo-ops. We
                intentionally design multi-night stays in single valleys,
                letting travelers attune to regional rhythms, local dawns, and
                village evening tales.
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-serif text-3xl font-bold text-[#1C1917]">
                02
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                Cultural Custodianship
              </h3>
              <p className="text-sm text-[#68615A] leading-relaxed">
                We believe tourism must be an act of quiet preservation. We
                operate with zero single-use plastics, direct patronage to
                generational weavers and potters, and active support of heritage
                conservation trusts.
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-serif text-3xl font-bold text-[#138808]">
                03
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                Regional Lineage
              </h3>
              <p className="text-sm text-[#68615A] leading-relaxed">
                Our guides are not commercial tour operators; they are
                historians, royal custodians, and regional storytellers who
                possess intimate keys to centuries of oral heritage and
                forgotten mountain trails.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20 sm:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#FF671F] block mb-2">
              The Four Pillars
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
              Every journey crafted with exacting care.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl border border-[#E5DFD5] bg-white p-7 shadow-xs hover:border-[#FF671F]/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] flex items-center justify-center text-[#FF671F] mb-5 shadow-2xs">
                <Landmark className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-2.5">
                Curated Heritage
              </h3>
              <p className="text-xs sm:text-sm text-[#68615A] leading-relaxed">
                Privileged access to private havelis, family-held tea estates,
                and centuries-old royal suites closed to commercial groups.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E5DFD5] bg-white p-7 shadow-xs hover:border-[#138808]/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] flex items-center justify-center text-[#138808] mb-5 shadow-2xs">
                <Leaf className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-2.5">
                Mindful Footprints
              </h3>
              <p className="text-xs sm:text-sm text-[#68615A] leading-relaxed">
                Strict zero-single-use plastics, ethical wildlife viewing, and
                direct remuneration for rural families and artisans.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E5DFD5] bg-white p-7 shadow-xs hover:border-[#FF671F]/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] flex items-center justify-center text-[#FF671F] mb-5 shadow-2xs">
                <Compass className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-2.5">
                Master Chauffeurs
              </h3>
              <p className="text-xs sm:text-sm text-[#68615A] leading-relaxed">
                Vetted personal drivers who navigate high-altitude passes,
                ancient bazaar alleyways, and secluded temple lanes with
                mastery.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E5DFD5] bg-white p-7 shadow-xs hover:border-[#1C1917]/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] flex items-center justify-center text-[#1C1917] mb-5 shadow-2xs">
                <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-2.5">
                24/7 Concierge
              </h3>
              <p className="text-xs sm:text-sm text-[#68615A] leading-relaxed">
                Quiet, round-the-clock coordination from our regional desks in
                Delhi, Jaipur, and Kochi across your entire journey.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20 sm:mb-24">
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#FF671F] block mb-2">
              Founding Leadership & Engineering
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
              The minds behind AllOverBharat
            </h2>
            <p className="text-xs sm:text-sm text-[#68615A] max-w-xl mx-auto mt-2">
              Combining deep heritage curation with modern digital craftsmanship
              to build India's premier slow exploration platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-3xl border border-[#E5DFD5] bg-white p-8 sm:p-10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#F2EDE4] border border-[#E5DFD5] flex items-center justify-center font-serif text-2xl font-bold text-[#1C1917] flex-shrink-0 shadow-xs">
                    VS
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#FF671F] block mb-1">
                      Founder & Principal Curator
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                      Vishesh Sharma
                    </h3>
                    <p className="text-xs text-[#68615A] font-sans">
                      Principal Expedition Designer
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#68615A] font-serif italic leading-relaxed mb-6">
                  "We built AllOverBharat because modern travel had become a
                  rushed checklist of selfies. Bharat deserves better. When you
                  stay in a 300-year-old courtyard in Udaipur or wake up on a
                  private wooden boat gliding across Vembanad Lake at dawn, time
                  slows down. That stillness is true luxury."
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5DFD5] flex items-center justify-between text-xs text-[#68615A]">
                <span className="font-medium text-[#1C1917]">
                  New Delhi, Bharat
                </span>
                <span className="flex items-center gap-1 text-[#138808] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Curatorial Desk
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-[#E5DFD5] bg-white p-8 sm:p-10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#F2EDE4] border border-[#E5DFD5] flex items-center justify-center font-serif text-2xl font-bold text-[#1C1917] flex-shrink-0 shadow-xs">
                    DK
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#138808] block mb-1">
                      Lead Engineering & Tech
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                      Dhansukh Katariya
                    </h3>
                    <p className="text-xs text-[#68615A] font-sans">
                      Lead Full-Stack Developer & Platform Architect
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#68615A] font-serif italic leading-relaxed mb-6">
                  "Architecting a high-performance web platform that mirrors the
                  elegance, serenity, and depth of slow Indian travel. Dedicated
                  to responsive glassmorphic UI design, intuitive booking flows,
                  and engineering reliable tools for discerning travelers across
                  all 28 states and 8 union territories."
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5DFD5] flex items-center justify-between text-xs text-[#68615A]">
                <span className="font-medium text-[#1C1917]">
                  Engineering Desk, Bharat
                </span>
                <span className="flex items-center gap-1 text-[#138808] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Platform Architecture
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 rounded-3xl bg-white border border-[#E5DFD5] py-12 px-6 sm:px-12 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#E5DFD5]">
            <div className="pt-4 md:pt-0">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1917] block">
                150+
              </span>
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#68615A] font-semibold mt-2 block">
                Curated Expeditions
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1917] block">
                28 & 8
              </span>
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#68615A] font-semibold mt-2 block">
                States & Territories
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1917] block">
                4.98★
              </span>
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#68615A] font-semibold mt-2 block">
                Traveler Rating
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1917] block">
                24/7
              </span>
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#68615A] font-semibold mt-2 block">
                Concierge Support
              </span>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-[#F2EDE4] via-[#FAF8F5] to-[#EAE3D7] border border-[#E5DFD5] p-8 sm:p-14 text-center relative overflow-hidden shadow-xs">
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD5] shadow-2xs mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF671F]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#FF671F]">
                Begin Your Journey
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] leading-tight mb-5">
              Experience Bharat at the{" "}
              <span className="text-[#FF671F] italic font-semibold">
                rhythm of the soul
              </span>
              .
            </h2>
            <p className="text-sm sm:text-base text-[#68615A] leading-relaxed mb-8 font-sans">
              Explore our curated slow luxury itineraries or speak directly with
              our concierge team to craft a private, custom journey.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <NavLink
                to="/"
                className="px-7 py-3.5 rounded-full bg-[#FF671F] text-white font-semibold text-xs sm:text-sm tracking-wide hover:bg-[#E05612] transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Explore Curated Packages</span>
                <ArrowRight className="w-4 h-4" />
              </NavLink>
              <a
                href="https://wa.me/911800242728?text=Hello%20AllOverBharat%20Concierge,%20I%20would%20like%20to%20plan%20a%20private%20custom%20journey."
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 rounded-full bg-white border border-[#E5DFD5] text-[#1C1917] font-semibold text-xs sm:text-sm tracking-wide hover:bg-[#FAF8F5] hover:border-[#FF671F]/40 transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#138808]" />
                <span>Private Concierge Desk</span>
              </a>
            </div>
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
    </div>
  );
}
