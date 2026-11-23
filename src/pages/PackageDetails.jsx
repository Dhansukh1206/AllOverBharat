import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import data from '../data/packages.json'
import { MapPin, CalendarDays, ArrowRight, Phone } from '../icons.jsx'
import { useAuth } from '../context/AuthContext.jsx'

export default function PackageDetails() {
  const { isLoggedIn, requireAuth } = useAuth()
  const { slug } = useParams()
  const pkg = data.find(p => p.slug === slug)
  const [activeImg, setActiveImg] = useState(null)
  const [bookingSlotModal, setBookingSlotModal] = useState(false)
  const [travelersCount, setTravelersCount] = useState(2)
  const [departureDate, setDepartureDate] = useState("")
  const [bookingSuccess, setBookingSuccess] = useState(false)

  useEffect(() => {
    if (pkg) {
      setActiveImg(pkg.image)
    }
  }, [pkg])

  if (!pkg) {
    return (
      <div className="container-app my-20 text-center">
        <h1 className="font-serif text-3xl text-brand-charcoal mb-4">Journey Not Found</h1>
        <p className="subtitle text-sm mb-6">The requested holiday itinerary could not be located in our registry.</p>
        <NavLink to="/" className="btn-primary">
          Return to All Journeys
        </NavLink>
      </div>
    )
  }

  const galleryImages = pkg.gallery && pkg.gallery.length > 0 ? pkg.gallery : [pkg.image]

  return (
    <div className="container-app my-10 sm:my-14 pb-20">
            <nav className="mb-6 flex items-center gap-2 text-xs text-brand-taupe">
        <NavLink to="/" className="hover:text-brand-charcoal transition-colors">Home</NavLink>
        <span>/</span>
        <NavLink to="/" className="hover:text-brand-charcoal transition-colors">Journeys</NavLink>
        <span>/</span>
        <span className="text-brand-charcoal font-semibold">{pkg.title}</span>
      </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
                <div className="lg:col-span-7 flex flex-col gap-3">
                    <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden rounded-2xl border border-brand-border bg-brand-charcoal">
            <img 
              src={activeImg || pkg.image} 
              alt={pkg.title} 
              className="w-full h-full object-cover transition-all duration-500" 
            />
            <div className="absolute top-4 left-4 bg-[#FAF8F5]/92 backdrop-blur-md px-3.5 py-1 rounded-full border border-brand-border text-[10px] uppercase tracking-[0.14em] font-semibold text-brand-charcoal">
              {pkg.location}
            </div>
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-medium">
              Verified Photography
            </div>
          </div>

                    <div className="grid grid-cols-4 gap-2.5">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImg(img)}
                className={`relative aspect-[16/11] rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                  (activeImg === img) 
                    ? 'ring-2 ring-brand-terracotta border-transparent scale-[0.98]' 
                    : 'border-brand-border hover:opacity-85'
                }`}
              >
                <img src={img} alt={`${pkg.title} shot ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

                <div 
          className="lg:col-span-5 p-8 sm:p-10 rounded-3xl flex flex-col justify-between border border-white/80 shadow-md transition-all"
          style={{
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
            background: "rgba(255, 255, 255, 0.75)",
          }}
        >
          <div>
            <p className="kicker mb-2">CURATED ITINERARY • EDITION 2026</p>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal leading-editorial tracking-tightest">
              {pkg.title}
            </h1>

            <div className="flex items-center gap-3 text-xs text-brand-taupe mt-4 pb-4 border-b border-brand-border flex-wrap">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-brand-terracotta" />
                <span className="font-medium">{pkg.days} Days / {pkg.nights} Nights</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-brand-forest" />
                <span className="font-medium">{pkg.subtitle}</span>
              </span>
            </div>

            <p className="subtitle mt-4 text-sm leading-relaxed">
              {pkg.description}
            </p>

                        {pkg.highlights && (
              <div className="mt-6 space-y-2">
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-brand-taupe">Expedition Highlights</p>
                <div className="grid grid-cols-1 gap-2">
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-brand-charcoal">
                      <span className="text-brand-terracotta mt-0.5 font-bold">✦</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

                        <div 
              className="mt-6 p-5 rounded-2xl border border-white/80 shadow-sm"
              style={{
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                background: "rgba(255, 255, 255, 0.65)",
              }}
            >
              <span className="text-[11px] uppercase tracking-[0.14em] text-brand-taupe block mb-1 font-semibold">
                Inclusive Price
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-price text-3xl sm:text-4xl text-brand-terracotta drop-shadow-xs tracking-wide">
                  ₹ {pkg.price.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-brand-taupe font-normal">
                  per traveler, taxes included
                </span>
              </div>
            </div>
          </div>

                    <div className="mt-8 pt-6 border-t border-brand-border flex flex-col sm:flex-row gap-3">
                        <a 
              href={`https://wa.me/911800242728?text=Hello%20AllOverBharat%20Concierge,%20I%20have%20an%20enquiry%20regarding%20the%20${encodeURIComponent(pkg.title)}%20journey.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-ghost flex-1 text-center flex items-center justify-center gap-2"
            >
              <Phone className="h-3.5 w-3.5 text-brand-terracotta" />
              <span>Enquiry</span>
            </a>

                        <button
              onClick={() => {
                if (!isLoggedIn) {
                  requireAuth(() => setBookingSlotModal(true))
                  return
                }
                setBookingSlotModal(!bookingSlotModal)
              }}
              className="btn-primary flex-1 text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{bookingSlotModal ? "Close Booking" : "Book Slot"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

                    {bookingSlotModal && (
            <div className="mt-6 p-5 rounded-2xl bg-white border border-brand-border shadow-xs animate-fadeIn">
              {bookingSuccess ? (
                <div className="text-center py-4">
                  <span className="text-3xl block mb-2">🎉</span>
                  <h4 className="font-serif text-xl font-bold text-brand-charcoal">
                    Slot Reserved!
                  </h4>
                  <p className="subtitle text-xs mt-2">
                    Slot held for {pkg.title} on {departureDate || "earliest departure"} for {travelersCount} travelers.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-bold text-brand-charcoal">
                    Select Your Travel Slot
                  </h4>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider font-semibold text-brand-taupe block mb-1">
                      Departure Date
                    </label>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border border-brand-border bg-brand-canvas text-xs text-brand-charcoal focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider font-semibold text-brand-taupe block mb-1">
                      Travelers
                    </label>
                    <select
                      value={travelersCount}
                      onChange={(e) => setTravelersCount(Number(e.target.value))}
                      className="w-full h-10 px-3 rounded-lg border border-brand-border bg-brand-canvas text-xs text-brand-charcoal focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
                    >
                      <option value={1}>1 Solo Explorer</option>
                      <option value={2}>2 Travelers (Double Sharing)</option>
                      <option value={3}>3 Travelers</option>
                      <option value={4}>4 Travelers (Family)</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-brand-border">
                    <span className="text-xs font-semibold">Total Amount:</span>
                    <span className="font-price text-2xl text-brand-terracotta tracking-wide">
                      ₹ {(pkg.price * travelersCount).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      if (!isLoggedIn) {
                        requireAuth(() => setBookingSuccess(true))
                        return
                      }
                      setBookingSuccess(true)
                    }}
                    className="btn-primary w-full h-11 text-xs font-semibold cursor-pointer"
                  >
                    Confirm Slot Reservation
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

            <div className="mt-14 card p-8 sm:p-12">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-border">
          <div>
            <p className="kicker mb-1">CHRONICLE OF DISCOVERY</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal">
              Day-by-Day Journey Outline
            </h2>
          </div>
          <span className="pill text-xs font-semibold">
            {pkg.days} Days Immersive Circuit
          </span>
        </div>

                <div className="space-y-8">
          {(pkg.itinerary || []).map((it, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-start gap-6 pb-8 border-b border-brand-border/70 last:border-b-0 last:pb-0">
                            <div className="w-full md:w-64 aspect-[16/10] md:aspect-[4/3] rounded-xl overflow-hidden border border-brand-border bg-brand-charcoal flex-shrink-0 relative">
                <img 
                  src={it.image || pkg.image} 
                  alt={`Day ${it.day}: ${it.title}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
                <span className="absolute top-2.5 left-2.5 bg-[#FAF8F5]/92 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-serif font-bold text-brand-charcoal border border-brand-border">
                  Day {it.day}
                </span>
              </div>

                            <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-brand-terracotta">
                    Stage {it.day} of {pkg.days}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-brand-charcoal font-bold mb-2 leading-snug">
                  {it.title}
                </h3>
                <p className="subtitle text-sm leading-relaxed">
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
