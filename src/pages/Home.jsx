import React, { useState, useEffect } from "react";
import packagesData from "../data/packages.json";
import PackageCard from "../components/PackageCard.jsx";
import { CalendarDays, MapPin, ArrowRight, Phone } from "../icons.jsx";

export default function Home() {
  const [packagesList, setPackagesList] = useState(packagesData);
  const [sortBy, setSortBy] = useState("featured");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [activeGalleryImg, setActiveGalleryImg] = useState(null);
  const [bookingSlotModal, setBookingSlotModal] = useState(false);
  const [travelersCount, setTravelersCount] = useState(2);
  const [departureDate, setDepartureDate] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const featuredPackages = packagesData.slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPackages.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [featuredPackages.length]);
  const handleSortChange = (type) => {
    setSortBy(type);
    let sorted = [...packagesData];
    if (type === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (type === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (type === "duration-asc") {
      sorted.sort((a, b) => a.days - b.days);
    } else if (type === "duration-desc") {
      sorted.sort((a, b) => b.days - a.days);
    } else {
      sorted = packagesData;
    }
    setPackagesList(sorted);
  };

  const handleOpenDetails = (pkg) => {
    setSelectedPackage(pkg);
    setActiveGalleryImg(pkg.image);
    setBookingSlotModal(false);
    setBookingSuccess(false);
  };

  const handleCloseDetails = () => {
    setSelectedPackage(null);
    setBookingSlotModal(false);
    setBookingSuccess(false);
  };

  return (
    <div className="container-app my-6 sm:my-10 pb-24">
      <section className="mt-2">
        <div className="relative w-full h-84 sm:h-96 md:h-[460px] overflow-hidden rounded-3xl border border-brand-border bg-brand-charcoal">
          <img
            src={featuredPackages[currentSlide].image}
            alt={featuredPackages[currentSlide].title}
            className="w-full h-full object-cover transition-opacity duration-1000 ease-out"
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(28, 25, 23, 0.90) 0%, rgba(28, 25, 23, 0.45) 50%, rgba(28, 25, 23, 0.1) 100%)",
            }}
          />

          <div className="absolute bottom-8 left-6 sm:left-10 right-6 sm:right-10 max-w-xl">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {featuredPackages[currentSlide].title}
            </h2>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#FAF8F5]/90 font-medium mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-brand-terracotta" />
                {featuredPackages[currentSlide].location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CalendarDays className="h-3.5 w-3.5 text-brand-terracotta" />
                {featuredPackages[currentSlide].days} Days /{" "}
                {featuredPackages[currentSlide].nights} Nights
              </span>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-terracotta">
                ₹ {featuredPackages[currentSlide].price.toLocaleString("en-IN")}
              </span>
              <button
                onClick={() =>
                  handleOpenDetails(featuredPackages[currentSlide])
                }
                className="btn-primary text-xs h-9 px-4 rounded-xl cursor-pointer"
              >
                <span>View Full Details</span>
                <ArrowRight className="h-3 w-3 ml-1.5" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-6 right-8 flex gap-2 z-10">
            {featuredPackages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentSlide
                    ? "w-7 bg-brand-terracotta"
                    : "w-2 bg-brand-taupe/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="mt-14 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-brand-border">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal tracking-tight">
            Current Tour Packages
          </h2>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-brand-taupe mr-1">
            Sort by:
          </span>
          <button
            onClick={() => handleSortChange("featured")}
            className={`px-3.5 py-1.5 rounded-full text-xs border border-brand-border font-semibold transition-all duration-200 cursor-pointer ${
              sortBy === "featured"
                ? "bg-brand-terracotta text-[#FAF8F5]"
                : "bg-brand-sand text-brand-taupe hover:text-brand-charcoal"
            }`}
          >
            Featured
          </button>
          <button
            onClick={() => handleSortChange("price-asc")}
            className={`px-3.5 py-1.5 rounded-full text-xs border border-brand-border font-semibold transition-all duration-200 cursor-pointer ${
              sortBy === "price-asc"
                ? "bg-brand-terracotta text-[#FAF8F5]"
                : "bg-brand-sand text-brand-taupe hover:text-brand-charcoal"
            }`}
          >
            Price: Low to High
          </button>
          <button
            onClick={() => handleSortChange("price-desc")}
            className={`px-3.5 py-1.5 rounded-full text-xs border border-brand-border font-semibold transition-all duration-200 cursor-pointer ${
              sortBy === "price-desc"
                ? "bg-brand-terracotta text-[#FAF8F5]"
                : "bg-brand-sand text-brand-taupe hover:text-brand-charcoal"
            }`}
          >
            Price: High to Low
          </button>
          <button
            onClick={() => handleSortChange("duration-asc")}
            className={`px-3.5 py-1.5 rounded-full text-xs border border-brand-border font-semibold transition-all duration-200 cursor-pointer ${
              sortBy === "duration-asc"
                ? "bg-brand-terracotta text-[#FAF8F5]"
                : "bg-brand-sand text-brand-taupe hover:text-brand-charcoal"
            }`}
          >
            Duration
          </button>
        </div>
      </div>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {packagesList.map((pkg) => (
            <PackageCard
              key={pkg.slug}
              item={pkg}
              onSelect={handleOpenDetails}
            />
          ))}
        </div>
      </section>

      {selectedPackage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={handleCloseDetails}
        >
          <div
            className="bg-brand-canvas rounded-3xl border border-brand-border shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#FAF8F5]/95 backdrop-blur-md px-6 py-4 border-b border-brand-border flex items-center justify-between z-20">
              <div className="flex items-center gap-2">
                <span className="pill-tag">{selectedPackage.location}</span>
                <span className="text-xs text-brand-taupe font-semibold">
                  {selectedPackage.days}D / {selectedPackage.nights}N
                </span>
              </div>
              <button
                onClick={handleCloseDetails}
                className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center text-brand-charcoal font-bold hover:bg-brand-sand transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-7 space-y-3">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-brand-border bg-brand-charcoal">
                    <img
                      src={activeGalleryImg || selectedPackage.image}
                      alt={selectedPackage.title}
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                  </div>

                  {selectedPackage.gallery &&
                    selectedPackage.gallery.length > 0 && (
                      <div className="grid grid-cols-4 gap-2">
                        {selectedPackage.gallery.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveGalleryImg(img)}
                            className={`aspect-[16/11] rounded-lg overflow-hidden border cursor-pointer ${
                              activeGalleryImg === img
                                ? "ring-2 ring-brand-terracotta border-transparent"
                                : "border-brand-border hover:opacity-80"
                            }`}
                          >
                            <img
                              src={img}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <h2 className="font-serif text-3xl font-bold text-brand-charcoal leading-snug">
                      {selectedPackage.title}
                    </h2>
                    <p className="subtitle text-xs sm:text-sm mt-3 leading-relaxed">
                      {selectedPackage.description}
                    </p>

                    {selectedPackage.highlights && (
                      <div className="mt-4 space-y-2">
                        <p className="text-[10px] uppercase tracking-[0.14em] font-semibold text-brand-taupe">
                          Expedition Highlights
                        </p>
                        <div className="space-y-1.5">
                          {selectedPackage.highlights.map((h, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-xs text-brand-charcoal"
                            >
                              <span className="text-brand-terracotta font-bold">
                                ✦
                              </span>
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    className="mt-6 p-4 rounded-2xl border border-white/80 shadow-sm"
                    style={{
                      backdropFilter: "blur(14px)",
                      WebkitBackdropFilter: "blur(14px)",
                      background: "rgba(255, 255, 255, 0.70)",
                    }}
                  >
                    <span className="text-[10px] uppercase tracking-[0.14em] text-brand-taupe block font-semibold">
                      Tariff Per Traveler
                    </span>
                    <span className="font-serif text-3xl font-bold text-brand-terracotta drop-shadow-xs">
                      ₹ {selectedPackage.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              {selectedPackage.itinerary &&
                selectedPackage.itinerary.length > 0 && (
                  <div className="border-t border-brand-border pt-6">
                    <p className="kicker mb-1">CHRONICLE OF DISCOVERY</p>
                    <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-4">
                      Complete Day-by-Day Schedule
                    </h3>
                    <div className="space-y-4">
                      {selectedPackage.itinerary.map((it, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-white border border-brand-border shadow-xs"
                        >
                          <div className="w-full sm:w-44 aspect-[16/10] sm:aspect-[4/3] rounded-lg overflow-hidden bg-brand-charcoal flex-shrink-0">
                            <img
                              src={it.image || selectedPackage.image}
                              alt={it.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <span className="pill-tag mb-1">Day {it.day}</span>
                            <h4 className="font-serif text-lg font-bold text-brand-charcoal">
                              {it.title}
                            </h4>
                            <p className="subtitle text-xs mt-1 leading-relaxed">
                              {it.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {bookingSlotModal && (
                <div className="border-t border-brand-border pt-6 bg-brand-sand/40 -mx-6 -mb-8 p-6 sm:p-8 rounded-b-3xl">
                  {bookingSuccess ? (
                    <div className="p-6 bg-white rounded-2xl border border-brand-forest text-center shadow-xs">
                      <span className="text-3xl block mb-2">🎉</span>
                      <h4 className="font-serif text-2xl font-bold text-brand-charcoal">
                        Slot Reserved Successfully!
                      </h4>
                      <p className="subtitle text-xs max-w-md mx-auto mt-2">
                        Our luxury concierge has reserved your slot for{" "}
                        <strong>{selectedPackage.title}</strong> on{" "}
                        <strong>
                          {departureDate || "Next Available Departure"}
                        </strong>{" "}
                        for <strong>{travelersCount} travelers</strong>. You
                        will receive an official booking docket via WhatsApp.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h4 className="font-serif text-2xl font-bold text-brand-charcoal mb-2">
                        Configure Your Departure Slot
                      </h4>
                      <p className="subtitle text-xs mb-6">
                        Select your preferred departure dates and traveler
                        count. A private concierge will immediately secure your
                        reservation.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="text-[11px] uppercase tracking-wider font-semibold text-brand-charcoal block mb-1.5">
                            Preferred Departure Date
                          </label>
                          <input
                            type="date"
                            value={departureDate}
                            onChange={(e) => setDepartureDate(e.target.value)}
                            className="w-full h-11 px-3.5 rounded-xl border border-brand-border bg-white text-xs text-brand-charcoal font-medium focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] uppercase tracking-wider font-semibold text-brand-charcoal block mb-1.5">
                            Number of Travelers
                          </label>
                          <select
                            value={travelersCount}
                            onChange={(e) =>
                              setTravelersCount(Number(e.target.value))
                            }
                            className="w-full h-11 px-3.5 rounded-xl border border-brand-border bg-white text-xs text-brand-charcoal font-medium focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
                          >
                            <option value={1}>1 Solo Explorer</option>
                            <option value={2}>
                              2 Travelers (Double Sharing)
                            </option>
                            <option value={3}>3 Travelers</option>
                            <option value={4}>4 Travelers (Family)</option>
                            <option value={6}>
                              6 Travelers (Private Group)
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-brand-border shadow-xs mb-6">
                        <span className="text-xs font-semibold text-brand-charcoal">
                          Total Estimated Investment:
                        </span>
                        <span className="font-serif text-2xl font-bold text-brand-terracotta">
                          ₹{" "}
                          {(
                            selectedPackage.price * travelersCount
                          ).toLocaleString("en-IN")}
                        </span>
                      </div>

                      <button
                        onClick={() => setBookingSuccess(true)}
                        className="btn-primary w-full h-12 text-sm font-semibold tracking-wider cursor-pointer"
                      >
                        Confirm Slot Reservation
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="sticky bottom-0 bg-[#FAF8F5]/95 backdrop-blur-md px-6 py-4 border-t border-brand-border flex flex-col sm:flex-row gap-3 z-20">
              <a
                href={`https://wa.me/911800242728?text=Hello%20AllOverBharat%20Concierge,%20I%20have%20an%20enquiry%20regarding%20the%20${encodeURIComponent(
                  selectedPackage.title,
                )}%20journey.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex-1 text-center py-3 flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4 text-brand-terracotta" />
                <span>Enquiry</span>
              </a>

              <button
                onClick={() => setBookingSlotModal(!bookingSlotModal)}
                className="btn-primary flex-1 text-center py-3 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>
                  {bookingSlotModal ? "Close Booking Form" : "Book Slot"}
                </span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
