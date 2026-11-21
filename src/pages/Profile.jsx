import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SectionTitle from "../components/SectionTitle.jsx";
import {
  User,
  Phone,
  Mail,
  CalendarDays,
  MapPin,
  Check,
  Luggage,
  ArrowRight,
  Compass,
} from "../icons.jsx";

const DEFAULT_PROFILE = {
  firstName: "Aarav",
  lastName: "Mehta",
  phone: "+91 98765 43210",
  email: "aarav.mehta@bharatluxury.in",
  membershipTier: "Club Bharat Connoisseur",
  memberSince: "2023",
};

const DEFAULT_PREVIOUS_TRIPS = [
  {
    id: "trip-1",
    title: "Royal Rajasthan Heritage Odyssey",
    location: "Udaipur, Jodhpur & Jaipur",
    date: "November 14 – 21, 2024",
    duration: "8 Days / 7 Nights",
    status: "Completed • Verified Circuit",
    price: 48000,
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1000&auto=format&fit=crop&q=80",
    highlights: [
      "Private Haveli Dinner with Mewar Heritage Custodian",
      "Sunset Sail across Lake Pichola on Heritage Royal Barge",
      "Guided Stepwell & Mehrangarh Fortress Walking Tour",
    ],
    rating: 5,
    docketNumber: "AOB-2024-RAJ-884",
  },
  {
    id: "trip-2",
    title: "Kashmir Valley of Whispers",
    location: "Srinagar, Gulmarg & Pahalgam",
    date: "May 8 – 14, 2024",
    duration: "7 Days / 6 Nights",
    status: "Completed • Verified Circuit",
    price: 39500,
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1000&auto=format&fit=crop&q=80",
    highlights: [
      "Historic Cedar Wood Houseboat Stay on Nigeen Lake",
      "Private Shikara Sunset Floating Saffron & Kahwa Tasting",
      "Apharwat Peak Snow Walk & Pine Forest Trail in Gulmarg",
    ],
    rating: 5,
    docketNumber: "AOB-2024-KAS-412",
  },
  {
    id: "trip-3",
    title: "Varanasi Ghats at Dawn & Sarnath",
    location: "Varanasi, Uttar Pradesh",
    date: "January 18 – 22, 2024",
    duration: "5 Days / 4 Nights",
    status: "Completed • Verified Circuit",
    price: 28000,
    image:
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1000&auto=format&fit=crop&q=80",
    highlights: [
      "Private Dawn Bajra Boat Ride across 84 Sacred Ghats",
      "Reserved Rooftop Seating for Dashashwamedh Maha Aarti",
      "Master Silk Weaver Atelier Walk & Sarnath Stupa Meditation",
    ],
    rating: 5,
    docketNumber: "AOB-2024-VAR-109",
  },
];

export default function Profile() {
  // Load profile from localStorage or fallback to defaults
  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem("alloverbharat_user_profile");
      return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
    } catch {
      return DEFAULT_PROFILE;
    }
  });

  // Load previous trips from localStorage or fallback
  const [previousTrips, setPreviousTrips] = useState(() => {
    try {
      const saved = localStorage.getItem("alloverbharat_previous_trips");
      return saved ? JSON.parse(saved) : DEFAULT_PREVIOUS_TRIPS;
    } catch {
      return DEFAULT_PREVIOUS_TRIPS;
    }
  });

  // Form edit state
  const [formData, setFormData] = useState({
    firstName: profile.firstName || "",
    lastName: profile.lastName || "",
    phone: profile.phone || "",
    email: profile.email || "",
  });

  const [savedSuccess, setSavedSuccess] = useState(false);
  const [selectedDocket, setSelectedDocket] = useState(null);

  // New trip modal state
  const [showAddTripModal, setShowAddTripModal] = useState(false);
  const [newTripData, setNewTripData] = useState({
    title: "",
    location: "",
    date: "",
    duration: "6 Days / 5 Nights",
    price: "",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1000&auto=format&fit=crop&q=80",
    highlights: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    const updated = {
      ...profile,
      ...formData,
    };
    setProfile(updated);
    try {
      localStorage.setItem(
        "alloverbharat_user_profile",
        JSON.stringify(updated)
      );
    } catch (err) {
      console.error("Failed to save profile to localStorage", err);
    }
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
    }, 4000);
  };

  const handleAddTrip = (e) => {
    e.preventDefault();
    if (!newTripData.title.trim() || !newTripData.location.trim()) return;

    const highlightsArray = newTripData.highlights
      ? newTripData.highlights.split(",").map((s) => s.trim())
      : ["Custom private holiday itinerary tailored by AllOverBharat."];

    const added = {
      id: "trip-" + Date.now(),
      title: newTripData.title,
      location: newTripData.location,
      date: newTripData.date || "Completed Journey",
      duration: newTripData.duration || "Bespoke Duration",
      status: "Completed • Verified Circuit",
      price: Number(newTripData.price) || 35000,
      image:
        newTripData.image ||
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1000&auto=format&fit=crop&q=80",
      highlights: highlightsArray,
      rating: 5,
      docketNumber: `AOB-${new Date().getFullYear()}-MEM-${Math.floor(
        100 + Math.random() * 900
      )}`,
    };

    const updatedList = [added, ...previousTrips];
    setPreviousTrips(updatedList);
    try {
      localStorage.setItem(
        "alloverbharat_previous_trips",
        JSON.stringify(updatedList)
      );
    } catch (err) {
      console.error("Failed to save trips to localStorage", err);
    }
    setShowAddTripModal(false);
    setNewTripData({
      title: "",
      location: "",
      date: "",
      duration: "6 Days / 5 Nights",
      price: "",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1000&auto=format&fit=crop&q=80",
      highlights: "",
    });
  };

  const fullName = `${profile.firstName} ${profile.lastName}`.trim() || "Traveler";
  const userInitials =
    `${profile.firstName?.[0] || ""}${profile.lastName?.[0] || ""}`.toUpperCase() ||
    "AM";

  return (
    <div className="container-app my-8 sm:my-12 pb-24">
      {/* Editorial Profile Header Dossier */}
      <div className="card p-6 sm:p-10 mb-12 bg-white shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-5">
            {/* Elegant Monogram Avatar with High-Visibility Border */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-[#1C1917]/80 ring-4 ring-[#F2873B]/20 flex items-center justify-center font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal flex-shrink-0 shadow-sm">
              {userInitials}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="pill-tag flex items-center gap-1">
                  <Compass className="h-3 w-3 text-brand-forest" />
                  {profile.membershipTier || "Club Bharat Connoisseur"}
                </span>
                <span className="text-[11px] text-brand-taupe uppercase tracking-wider font-semibold">
                  Member Since {profile.memberSince || "2023"}
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal tracking-tight">
                {fullName}
              </h1>
              <div className="flex items-center gap-4 text-xs text-brand-taupe mt-1.5 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-brand-taupe" />
                  {profile.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-brand-taupe" />
                  {profile.phone}
                </span>
              </div>
            </div>
          </div>

          {/* Profile Stats Ribbon */}
          <div className="flex items-center gap-6 sm:gap-8 pt-4 md:pt-0 border-t md:border-t-0 border-brand-border w-full md:w-auto justify-around md:justify-end">
            <div className="text-center">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal block">
                {previousTrips.length}
              </span>
              <span className="kicker text-[10px] block mt-0.5">
                Completed Expeditions
              </span>
            </div>
            <div className="h-8 w-px bg-brand-border" />
            <div className="text-center">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-brand-terracotta block">
                28 & 8
              </span>
              <span className="kicker text-[10px] block mt-0.5">
                States Eligible
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Personal Information Form (First Name, Last Name, Phone, Email) */}
        <div className="lg:col-span-5 card p-6 sm:p-8 bg-white shadow-xs">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-brand-border">
            <div>
              <p className="kicker mb-1">TRAVELER LEDGER</p>
              <h2 className="font-serif text-2xl font-bold text-brand-charcoal">
                Personal Information
              </h2>
            </div>
            <div className="w-8 h-8 rounded-full bg-brand-sand border border-brand-border flex items-center justify-center text-brand-charcoal">
              <User className="h-4 w-4 text-brand-charcoal" />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSaveProfile} className="space-y-4">
            {savedSuccess && (
              <div className="p-3.5 rounded-xl bg-brand-forest/10 border border-brand-forest/30 flex items-center gap-2.5 text-xs text-brand-forest font-semibold animate-fadeIn">
                <Check className="h-4 w-4 flex-shrink-0" />
                <span>
                  Profile details saved to your travel ledger successfully!
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-brand-charcoal block mb-1.5">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Aarav"
                  className="w-full h-11 px-3.5 rounded-xl border border-brand-border bg-brand-canvas text-xs text-brand-charcoal font-medium focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-brand-charcoal block mb-1.5">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Mehta"
                  className="w-full h-11 px-3.5 rounded-xl border border-brand-border bg-brand-canvas text-xs text-brand-charcoal font-medium focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-wider font-semibold text-brand-charcoal block mb-1.5">
                Phone Number *
              </label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full h-11 pl-10 pr-3.5 rounded-xl border border-brand-border bg-brand-canvas text-xs text-brand-charcoal font-medium focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
                />
                <Phone className="h-4 w-4 text-brand-taupe absolute left-3.5 top-3.5 pointer-events-none" />
              </div>
              <p className="text-[10px] text-brand-taupe mt-1">
                Used for instant WhatsApp booking dockets & chauffeur updates.
              </p>
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-wider font-semibold text-brand-charcoal block mb-1.5">
                Email Address *
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="name@luxurybharat.in"
                  className="w-full h-11 pl-10 pr-3.5 rounded-xl border border-brand-border bg-brand-canvas text-xs text-brand-charcoal font-medium focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
                />
                <Mail className="h-4 w-4 text-brand-taupe absolute left-3.5 top-3.5 pointer-events-none" />
              </div>
              <p className="text-[10px] text-brand-taupe mt-1">
                Official invoices and verified heritage hotel vouchers are
                dispatched here.
              </p>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="btn-primary w-full h-12 text-xs font-semibold tracking-wider cursor-pointer"
              >
                <span>Save Profile Details</span>
                <Check className="h-4 w-4 ml-1.5" />
              </button>
            </div>
          </form>

          {/* Quiet Concierge Help Note */}
          <div className="mt-8 pt-6 border-t border-brand-border bg-brand-sand/40 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 rounded-b-2xl">
            <p className="text-[10px] uppercase tracking-[0.14em] font-semibold text-brand-taupe mb-1">
              PRIVILEGED CONCIERGE DESK
            </p>
            <p className="subtitle text-xs leading-relaxed">
              Need to alter passports, dietary preferences, or private charter
              requirements? WhatsApp our desk anytime at{" "}
              <strong>+91 1800 242 728</strong>.
            </p>
          </div>
        </div>

        {/* Right Column: Previous Trips Section */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-brand-border">
            <div>
              <p className="kicker mb-1">HERITAGE LOGBOOK</p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal">
                Previous Trips & Completed Circuits
              </h2>
            </div>

            <button
              onClick={() => setShowAddTripModal(true)}
              className="btn-ghost text-xs h-9 px-3.5 rounded-xl flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
            >
              <Luggage className="h-3.5 w-3.5 text-brand-terracotta" />
              <span>Record a Past Trip</span>
            </button>
          </div>

          {/* List of Previous Trips */}
          <div className="space-y-6">
            {previousTrips.map((trip) => (
              <div
                key={trip.id}
                className="card overflow-hidden bg-white shadow-xs hover:border-brand-charcoal/30 transition-all duration-300"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-0">
                  {/* Trip Photography */}
                  <div className="sm:col-span-5 relative aspect-[16/10] sm:aspect-auto overflow-hidden bg-brand-charcoal">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#FAF8F5]/92 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-brand-charcoal border border-brand-border">
                      {trip.duration}
                    </div>
                  </div>

                  {/* Trip Details */}
                  <div className="sm:col-span-7 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="pill-tag">{trip.status}</span>
                        <span className="text-[10px] text-brand-taupe font-mono">
                          {trip.docketNumber}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal leading-snug">
                        {trip.title}
                      </h3>

                      <div className="flex items-center gap-2 text-xs text-brand-taupe mt-2 font-medium">
                        <MapPin className="h-3 w-3 text-brand-terracotta flex-shrink-0" />
                        <span>{trip.location}</span>
                        <span>•</span>
                        <CalendarDays className="h-3 w-3 text-brand-forest flex-shrink-0" />
                        <span>{trip.date}</span>
                      </div>

                      {/* Highlights */}
                      {trip.highlights && trip.highlights.length > 0 && (
                        <div className="mt-3.5 space-y-1">
                          {trip.highlights.slice(0, 2).map((h, i) => (
                            <div
                              key={i}
                              className="text-xs text-brand-charcoal/80 flex items-start gap-1.5"
                            >
                              <span className="text-brand-terracotta font-bold text-[10px] mt-0.5">
                                ✦
                              </span>
                              <span className="line-clamp-1">{h}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Actions */}
                    <div className="mt-5 pt-3 border-t border-brand-border flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-brand-taupe uppercase tracking-wider block font-semibold">
                          Total Tariff
                        </span>
                        <span className="font-serif text-lg font-bold text-brand-terracotta">
                          ₹ {trip.price.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedDocket(trip)}
                          className="btn-ghost text-xs h-9 px-3 rounded-xl cursor-pointer"
                        >
                          View Docket
                        </button>
                        <NavLink
                          to="/"
                          className="btn-primary text-xs h-9 px-3 rounded-xl flex items-center gap-1"
                        >
                          <span>Explore Similar</span>
                          <ArrowRight className="h-3 w-3" />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Docket Detail Lightbox Modal */}
      {selectedDocket && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedDocket(null)}
        >
          <div
            className="bg-[#FAF8F5] rounded-3xl border border-brand-border shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-brand-border flex items-center justify-between z-20">
              <span className="pill-tag">
                Official Expedition Dossier • {selectedDocket.docketNumber}
              </span>
              <button
                onClick={() => setSelectedDocket(null)}
                className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center text-brand-charcoal font-bold hover:bg-brand-sand transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-brand-border bg-brand-charcoal">
                <img
                  src={selectedDocket.image}
                  alt={selectedDocket.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 text-[#FAF8F5] scrim-bottom p-4 rounded-xl">
                  <h3 className="font-serif text-2xl font-bold">
                    {selectedDocket.title}
                  </h3>
                  <p className="text-xs text-[#FAF8F5]/80 mt-1">
                    {selectedDocket.location} • {selectedDocket.date}
                  </p>
                </div>
              </div>

              <div>
                <p className="kicker mb-2">VERIFIED ITINERARY MEMORIES</p>
                <div className="space-y-2">
                  {selectedDocket.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white border border-brand-border flex items-start gap-3 text-xs shadow-xs"
                    >
                      <span className="text-brand-terracotta font-bold">✦</span>
                      <span className="text-brand-charcoal">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white border border-brand-border shadow-xs">
                <div>
                  <span className="kicker block mb-1">TRAVELER ON RECORD</span>
                  <p className="font-serif text-lg font-bold text-brand-charcoal">
                    {fullName}
                  </p>
                  <p className="text-xs text-brand-taupe">{profile.email}</p>
                </div>
                <div>
                  <span className="kicker block mb-1">INVESTMENT PAID</span>
                  <p className="font-serif text-lg font-bold text-brand-terracotta">
                    ₹ {selectedDocket.price.toLocaleString("en-IN")}
                  </p>
                  <span className="pill-tag text-[9px] mt-1 inline-block">
                    Fully Settled & Archived
                  </span>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-brand-border flex justify-end gap-3 z-20">
              <button
                onClick={() => setSelectedDocket(null)}
                className="btn-primary"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Record a Past Trip Modal */}
      {showAddTripModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowAddTripModal(false)}
        >
          <div
            className="bg-[#FAF8F5] rounded-3xl border border-brand-border shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-brand-border flex items-center justify-between z-20">
              <span className="pill-tag">Record a Completed Journey</span>
              <button
                onClick={() => setShowAddTripModal(false)}
                className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center text-brand-charcoal font-bold hover:bg-brand-sand transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddTrip} className="p-6 sm:p-8 space-y-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-brand-charcoal block mb-1.5">
                  Trip / Circuit Title *
                </label>
                <input
                  type="text"
                  required
                  value={newTripData.title}
                  onChange={(e) =>
                    setNewTripData({ ...newTripData, title: e.target.value })
                  }
                  placeholder="e.g. Kerala Backwaters & Tea Sanctuary"
                  className="w-full h-11 px-3.5 rounded-xl border border-brand-border bg-white text-xs text-brand-charcoal font-medium focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-brand-charcoal block mb-1.5">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTripData.location}
                    onChange={(e) =>
                      setNewTripData({
                        ...newTripData,
                        location: e.target.value,
                      })
                    }
                    placeholder="e.g. Munnar & Alleppey"
                    className="w-full h-11 px-3.5 rounded-xl border border-brand-border bg-white text-xs text-brand-charcoal font-medium focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-brand-charcoal block mb-1.5">
                    Date Completed
                  </label>
                  <input
                    type="text"
                    value={newTripData.date}
                    onChange={(e) =>
                      setNewTripData({ ...newTripData, date: e.target.value })
                    }
                    placeholder="e.g. October 2023"
                    className="w-full h-11 px-3.5 rounded-xl border border-brand-border bg-white text-xs text-brand-charcoal font-medium focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-brand-charcoal block mb-1.5">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={newTripData.duration}
                    onChange={(e) =>
                      setNewTripData({
                        ...newTripData,
                        duration: e.target.value,
                      })
                    }
                    placeholder="e.g. 6 Days / 5 Nights"
                    className="w-full h-11 px-3.5 rounded-xl border border-brand-border bg-white text-xs text-brand-charcoal font-medium focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-brand-charcoal block mb-1.5">
                    Estimated Tariff (₹)
                  </label>
                  <input
                    type="number"
                    value={newTripData.price}
                    onChange={(e) =>
                      setNewTripData({ ...newTripData, price: e.target.value })
                    }
                    placeholder="35000"
                    className="w-full h-11 px-3.5 rounded-xl border border-brand-border bg-white text-xs text-brand-charcoal font-medium focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-brand-charcoal block mb-1.5">
                  Key Memories / Highlights (comma-separated)
                </label>
                <textarea
                  rows={2}
                  value={newTripData.highlights}
                  onChange={(e) =>
                    setNewTripData({
                      ...newTripData,
                      highlights: e.target.value,
                    })
                  }
                  placeholder="Private houseboat sail, Tea estate tour, Kathakali dance"
                  className="w-full p-3 rounded-xl border border-brand-border bg-white text-xs text-brand-charcoal font-medium focus:outline-none focus:ring-1 focus:ring-brand-terracotta"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full h-12 text-xs font-semibold cursor-pointer mt-2"
              >
                Save Past Trip to Logbook
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
