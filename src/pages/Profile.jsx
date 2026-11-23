import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import {
  User,
  Phone,
  Mail,
  Check,
  Luggage,
  ArrowRight,
  Compass,
  LogOut,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MapPin,
  Sparkles,
  Camera,
  X,
} from "lucide-react";

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
  const { user, isLoggedIn, logout, loginWithMobile, updateUser } = useAuth();

  const [loginPhone, setLoginPhone] = useState("");
  const [loginName, setLoginName] = useState("");
  const [loginOtp, setLoginOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleAvatarUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result;
      if (base64) {
        updateUser({ avatar: base64 });
      }
    };
    reader.readAsDataURL(file);
  };

  const [previousTrips, setPreviousTrips] = useState(() => {
    try {
      const saved = localStorage.getItem("alloverbharat_previous_trips");
      return saved ? JSON.parse(saved) : DEFAULT_PREVIOUS_TRIPS;
    } catch {
      return DEFAULT_PREVIOUS_TRIPS;
    }
  });

  const [formData, setFormData] = useState({
    firstName: user?.firstName || "Aarav",
    lastName: user?.lastName || "Mehta",
    phone: user?.phone || "+91 98765 43210",
    email: user?.email || "aarav.mehta@bharatluxury.in",
  });

  const [savedSuccess, setSavedSuccess] = useState(false);
  const [selectedDocket, setSelectedDocket] = useState(null);
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

  const handleSendOtp = (e) => {
    e.preventDefault();
    const clean = loginPhone.replace(/\D/g, "");
    if (clean.length < 10) {
      setLoginError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setLoginError("");
    setOtpSent(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (!loginOtp.trim()) {
      setLoginError("Please enter the 4-digit verification code.");
      return;
    }
    setLoginError("");
    const loggedUser = loginWithMobile(loginPhone, loginName);
    setFormData({
      firstName: loggedUser.firstName,
      lastName: loggedUser.lastName,
      phone: loggedUser.phone,
      email: loggedUser.email,
    });
    setOtpSent(false);
    setLoginPhone("");
    setLoginOtp("");
    setLoginName("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
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
        100 + Math.random() * 900,
      )}`,
    };

    const updatedList = [added, ...previousTrips];
    setPreviousTrips(updatedList);
    try {
      localStorage.setItem(
        "alloverbharat_previous_trips",
        JSON.stringify(updatedList),
      );
    } catch (err) {
      console.error(err);
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

  if (!isLoggedIn) {
    return (
      <div className="container-app my-10 sm:my-16 pb-24">
        <div className="max-w-xl mx-auto">
          <div className="rounded-3xl border border-[#E5DFD5] bg-white p-8 sm:p-12 shadow-xs text-center relative overflow-hidden">
            <div className="w-20 h-20 rounded-full mx-auto mb-5 p-[3px] bg-gradient-to-tr from-[#FF671F] via-[#FAF8F5] to-[#138808] shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center border border-[#E5DFD5]">
                <User className="w-9 h-9 text-[#1C1917]" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E5DFD5] shadow-2xs mb-6">
              <div className="flex items-center gap-1" aria-hidden="true">
                <span className="h-1.5 w-2 rounded-full bg-[#FF671F]" />
                <span className="h-1.5 w-2 rounded-full bg-white border border-[#E5DFD5]" />
                <span className="h-1.5 w-2 rounded-full bg-[#138808]" />
              </div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold text-[#68615A] font-sans">
                Traveler Access • Mobile Authentication
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] leading-tight mb-3">
              Sign in with mobile
            </h1>
            <p className="text-xs sm:text-sm text-[#68615A] font-sans leading-relaxed mb-8 max-w-md mx-auto">
              Enter your mobile number to access your traveler ledger, past
              expeditions, and reserve private journeys across Bharat.
            </p>

            {loginError && (
              <div className="mb-6 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-sans font-medium text-left">
                {loginError}
              </div>
            )}

            {!otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-4 text-left">
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#1C1917] block mb-1.5 font-sans">
                    Mobile Number *
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3.5 text-xs font-semibold text-[#1C1917] font-sans">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={loginPhone}
                      onChange={(e) => setLoginPhone(e.target.value)}
                      placeholder="98765 43210"
                      maxLength={14}
                      className="w-full h-12 pl-12 pr-3.5 rounded-xl border border-[#E5DFD5] bg-[#FAF8F5] text-xs text-[#1C1917] font-medium font-sans focus:outline-none focus:ring-1 focus:ring-[#FF671F]"
                    />
                    <Phone className="h-4 w-4 text-[#68615A] absolute right-3.5 pointer-events-none" />
                  </div>
                  <p className="text-[10px] text-[#68615A] mt-1 font-sans">
                    Authentication is strictly by mobile OTP. No passwords
                    required.
                  </p>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#1C1917] block mb-1.5 font-sans">
                    Your Full Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={loginName}
                    onChange={(e) => setLoginName(e.target.value)}
                    placeholder="e.g. Aarav Mehta"
                    className="w-full h-12 px-3.5 rounded-xl border border-[#E5DFD5] bg-[#FAF8F5] text-xs text-[#1C1917] font-medium font-sans focus:outline-none focus:ring-1 focus:ring-[#FF671F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-[#FF671F] text-white font-sans text-xs font-semibold tracking-wide hover:bg-[#E05612] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs mt-3"
                >
                  <span>Send Verification Code</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4 text-left">
                <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] flex items-center justify-between text-xs font-sans">
                  <div>
                    <span className="text-[#68615A] block text-[10px] uppercase tracking-wider">
                      OTP sent to
                    </span>
                    <span className="font-semibold text-[#1C1917]">
                      +91 {loginPhone}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setOtpSent(false);
                      setLoginOtp("");
                    }}
                    className="text-[11px] text-[#FF671F] font-semibold hover:underline cursor-pointer"
                  >
                    Change
                  </button>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#1C1917] block font-sans">
                      Enter 4-Digit OTP *
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setLoginOtp("1234");
                        setLoginError("");
                      }}
                      className="text-[10px] text-[#138808] font-semibold hover:underline cursor-pointer"
                    >
                      Quick fill (1234)
                    </button>
                  </div>
                  <input
                    type="text"
                    required
                    value={loginOtp}
                    onChange={(e) => setLoginOtp(e.target.value)}
                    placeholder="e.g. 1234"
                    maxLength={6}
                    className="w-full h-12 px-4 rounded-xl border border-[#E5DFD5] bg-[#FAF8F5] text-center text-xl font-mono font-bold tracking-widest text-[#1C1917] focus:outline-none focus:ring-1 focus:ring-[#FF671F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-[#FF671F] text-white font-sans text-xs font-semibold tracking-wide hover:bg-[#E05612] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs mt-3"
                >
                  <span>Verify & Access Ledger</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-[#E5DFD5] flex items-center justify-center gap-2 text-xs text-[#68615A] font-sans">
              <ShieldCheck className="w-4 h-4 text-[#138808]" />
              <span>
                Direct mobile-only authentication for Bharat explorers
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const fullName =
    `${user.firstName} ${user.lastName}`.trim() || user.name || "Traveler";
  const userInitials =
    `${user.firstName?.[0] || ""}${user.lastName?.[0] || ""}`.toUpperCase() ||
    "TR";

  return (
    <div className="container-app my-8 sm:my-12 pb-24">
      <div className="rounded-3xl border border-[#E5DFD5] p-6 sm:p-10 mb-12 bg-white shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-5 sm:gap-6">
            <div className="relative group flex-shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[3px] bg-gradient-to-tr from-[#FF671F] via-[#FAF8F5] to-[#138808] shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center border-2 border-white relative shadow-inner">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={fullName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#FAF8F5] to-[#F2EDE4] flex items-center justify-center font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
                      {userInitials}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E5DFD5] text-[10px] uppercase tracking-[0.14em] font-semibold text-[#138808] font-sans flex items-center gap-1">
                  <Compass className="h-3 w-3 text-[#138808]" />
                  {user.membershipTier || "Club Bharat Connoisseur"}
                </span>
                <span className="text-[11px] text-[#68615A] uppercase tracking-wider font-semibold font-sans">
                  Member Since {user.memberSince || "2024"}
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
                {fullName}
              </h1>
              <div className="flex items-center gap-4 text-xs text-[#68615A] mt-1.5 flex-wrap font-sans">
                <span className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-[#FF671F]" />
                  {user.phone}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-[#68615A]" />
                  {user.email || formData.email}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-[#E5DFD5] w-full md:w-auto justify-between md:justify-end">
            <div className="text-center pr-4 border-r border-[#E5DFD5]">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] block">
                {previousTrips.length}
              </span>
              <span className="text-[10px] uppercase tracking-[0.14em] text-[#68615A] font-semibold block mt-0.5 font-sans">
                Completed
              </span>
            </div>

            <button
              onClick={logout}
              className="px-4 py-2.5 rounded-full border border-red-200 bg-red-50 text-xs font-sans font-semibold text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-xs"
              title="Sign Out of Account"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 rounded-3xl border border-[#E5DFD5] p-6 sm:p-8 bg-white shadow-xs">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E5DFD5]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#FF671F] mb-1 font-sans">
                TRAVELER LEDGER
              </p>
              <h2 className="font-serif text-2xl font-bold text-[#1C1917]">
                Personal Information
              </h2>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#F2EDE4] border border-[#E5DFD5] flex items-center justify-center text-[#1C1917]">
              <User className="h-4 w-4" />
            </div>
          </div>

          <form onSubmit={handleSaveProfile} className="space-y-4">
            {savedSuccess && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5 text-xs text-emerald-800 font-semibold font-sans animate-fadeIn">
                <Check className="h-4 w-4 flex-shrink-0" />
                <span>
                  Profile details saved to your travel ledger successfully!
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#1C1917] block mb-1.5 font-sans">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full h-11 px-3.5 rounded-xl border border-[#E5DFD5] bg-[#FAF8F5] text-xs text-[#1C1917] font-medium font-sans focus:outline-none focus:ring-1 focus:ring-[#FF671F]"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#1C1917] block mb-1.5 font-sans">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full h-11 px-3.5 rounded-xl border border-[#E5DFD5] bg-[#FAF8F5] text-xs text-[#1C1917] font-medium font-sans focus:outline-none focus:ring-1 focus:ring-[#FF671F]"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-wider font-semibold text-[#1C1917] block mb-1.5 font-sans">
                Mobile Number (Verified)
              </label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={user.phone}
                  disabled
                  className="w-full h-11 pl-10 pr-3.5 rounded-xl border border-[#E5DFD5] bg-[#F2EDE4]/60 text-xs text-[#1C1917] font-medium font-sans opacity-80 cursor-not-allowed"
                />
                <Phone className="h-4 w-4 text-[#FF671F] absolute left-3.5 top-3.5 pointer-events-none" />
              </div>
              <p className="text-[10px] text-[#68615A] mt-1 font-sans">
                Primary identifier used for mobile authentication & WhatsApp
                dockets.
              </p>
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-wider font-semibold text-[#1C1917] block mb-1.5 font-sans">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@luxurybharat.in"
                  className="w-full h-11 pl-10 pr-3.5 rounded-xl border border-[#E5DFD5] bg-[#FAF8F5] text-xs text-[#1C1917] font-medium font-sans focus:outline-none focus:ring-1 focus:ring-[#FF671F]"
                />
                <Mail className="h-4 w-4 text-[#68615A] absolute left-3.5 top-3.5 pointer-events-none" />
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-[#1C1917] text-white font-sans text-xs font-semibold tracking-wide hover:bg-[#FF671F] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Save Profile Details</span>
                <Check className="h-4 w-4" />
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-[#E5DFD5] bg-[#F2EDE4]/40 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 rounded-b-3xl">
            <p className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#68615A] mb-1 font-sans">
              PRIVILEGED CONCIERGE DESK
            </p>
            <p className="text-xs text-[#68615A] font-sans leading-relaxed">
              Need to alter passports, dietary preferences, or private charter
              requirements? WhatsApp our desk anytime at{" "}
              <strong className="text-[#1C1917]">+91 1800 242 728</strong>.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#E5DFD5]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#FF671F] mb-1 font-sans">
                HERITAGE LOGBOOK
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                Completed Expeditions
              </h2>
            </div>

            <button
              onClick={() => setShowAddTripModal(true)}
              className="px-4 py-2 rounded-full border border-[#E5DFD5] bg-white text-xs font-sans font-semibold text-[#1C1917] hover:border-[#1C1917] transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-2xs self-start sm:self-auto"
            >
              <Luggage className="h-3.5 w-3.5 text-[#FF671F]" />
              <span>Record a Past Trip</span>
            </button>
          </div>

          <div className="space-y-6">
            {previousTrips.map((trip) => (
              <div
                key={trip.id}
                className="rounded-3xl border border-[#E5DFD5] bg-white p-6 sm:p-7 shadow-xs hover:border-[#1C1917]/30 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E5DFD5]">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#138808] block mb-1 font-sans">
                      {trip.status}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
                      {trip.title}
                    </h3>
                    <p className="text-xs text-[#68615A] font-sans mt-0.5 flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-[#FF671F]" />
                      <span>{trip.location}</span>
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedDocket(trip)}
                    className="px-4 py-2 rounded-full border border-[#E5DFD5] bg-[#FAF8F5] text-xs font-sans font-semibold text-[#1C1917] hover:border-[#FF671F] hover:bg-white transition-colors cursor-pointer self-start sm:self-auto"
                  >
                    View Docket
                  </button>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-[#68615A] font-sans">
                  <span>
                    {trip.date} • {trip.duration}
                  </span>
                  <span className="font-mono text-xs text-[#1C1917]">
                    Docket: {trip.docketNumber}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedDocket && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedDocket(null)}
        >
          <div
            className="bg-[#FAF8F5] rounded-3xl border border-[#E5DFD5] shadow-2xl max-w-xl w-full p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDocket(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#E5DFD5] bg-white flex items-center justify-center text-[#1C1917] hover:bg-[#F2EDE4] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#FF671F] block mb-2 font-sans">
              Official Expedition Docket
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#1C1917] mb-1">
              {selectedDocket.title}
            </h3>
            <p className="text-xs text-[#68615A] font-sans mb-5">
              Docket Number: {selectedDocket.docketNumber}
            </p>

            <div className="space-y-3 py-4 border-y border-[#E5DFD5] text-xs sm:text-sm font-sans text-[#1C1917]">
              <div className="flex justify-between">
                <span className="text-[#68615A]">Location</span>
                <span className="font-medium">{selectedDocket.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#68615A]">Circuit Duration</span>
                <span className="font-medium">{selectedDocket.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#68615A]">Completed Date</span>
                <span className="font-medium">{selectedDocket.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#68615A]">Verification Status</span>
                <span className="font-medium text-[#138808]">
                  {selectedDocket.status}
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedDocket(null)}
                className="px-5 py-2.5 rounded-full bg-[#1C1917] text-white font-sans text-xs font-semibold cursor-pointer"
              >
                Close Docket
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddTripModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowAddTripModal(false)}
        >
          <div
            className="bg-[#FAF8F5] rounded-3xl border border-[#E5DFD5] shadow-2xl max-w-lg w-full p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAddTripModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#E5DFD5] bg-white flex items-center justify-center text-[#1C1917] hover:bg-[#F2EDE4] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-serif text-2xl font-bold text-[#1C1917] mb-2">
              Record a Past Trip
            </h3>
            <p className="text-xs text-[#68615A] font-sans mb-6">
              Add a previously completed Indian circuit to your traveler ledger.
            </p>

            <form onSubmit={handleAddTrip} className="space-y-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#1C1917] block mb-1 font-sans">
                  Trip Title *
                </label>
                <input
                  type="text"
                  required
                  value={newTripData.title}
                  onChange={(e) =>
                    setNewTripData({ ...newTripData, title: e.target.value })
                  }
                  placeholder="e.g. Hampi Boulder Sanctuary & River Ruins"
                  className="w-full h-11 px-3.5 rounded-xl border border-[#E5DFD5] bg-white text-xs text-[#1C1917] font-sans focus:outline-none focus:ring-1 focus:ring-[#FF671F]"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#1C1917] block mb-1 font-sans">
                  Location / Route *
                </label>
                <input
                  type="text"
                  required
                  value={newTripData.location}
                  onChange={(e) =>
                    setNewTripData({ ...newTripData, location: e.target.value })
                  }
                  placeholder="e.g. Hampi & Badami, Karnataka"
                  className="w-full h-11 px-3.5 rounded-xl border border-[#E5DFD5] bg-white text-xs text-[#1C1917] font-sans focus:outline-none focus:ring-1 focus:ring-[#FF671F]"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddTripModal(false)}
                  className="px-4 py-2 rounded-full border border-[#E5DFD5] text-xs font-sans font-semibold text-[#68615A] hover:bg-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-[#FF671F] text-white text-xs font-sans font-semibold hover:bg-[#E05612] cursor-pointer shadow-xs"
                >
                  Save to Logbook
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
