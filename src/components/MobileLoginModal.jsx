import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { User, Phone, ArrowRight, X, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

export default function MobileLoginModal() {
  const { authModalOpen, setAuthModalOpen, loginWithMobile } = useAuth();
  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  if (!authModalOpen) return null;

  const handleSendOtp = (e) => {
    e.preventDefault();
    const digitsOnly = mobileNumber.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setError("");
    setOtpSent(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (!otp.trim()) {
      setError("Please enter the 4-digit verification code.");
      return;
    }
    setError("");
    loginWithMobile(mobileNumber, name);
    setOtpSent(false);
    setMobileNumber("");
    setOtp("");
    setName("");
  };

  const handleAutoFillDemoOtp = () => {
    setOtp("1234");
    setError("");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={() => setAuthModalOpen(false)}
    >
      <div
        className="bg-[#FAF8F5] rounded-3xl border border-[#E5DFD5] shadow-2xl max-w-md w-full overflow-hidden flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setAuthModalOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#E5DFD5] bg-white flex items-center justify-center text-[#1C1917] hover:bg-[#F2EDE4] transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="w-16 h-16 rounded-full mx-auto mb-4 p-[2.5px] bg-gradient-to-tr from-[#FF671F] via-[#FAF8F5] to-[#138808] shadow-md flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center border border-[#E5DFD5]">
              <User className="w-7 h-7 text-[#1C1917]" />
            </div>
          </div>

          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5DFD5] shadow-2xs">
              <div className="flex items-center gap-1" aria-hidden="true">
                <span className="h-1.5 w-2 rounded-full bg-[#FF671F]" />
                <span className="h-1.5 w-2 rounded-full bg-white border border-[#E5DFD5]" />
                <span className="h-1.5 w-2 rounded-full bg-[#138808]" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-[#68615A] font-sans">
                Member Verification
              </span>
            </div>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] leading-tight mb-2 text-center">
            Sign in with mobile
          </h3>
          <p className="text-xs sm:text-sm text-[#68615A] font-sans leading-relaxed mb-6 text-center">
            Sign in using your mobile number to reserve expedition slots, manage bookings, and access your traveler ledger.
          </p>

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-sans font-medium">
              {error}
            </div>
          )}

          {!otpSent ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
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
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="98765 43210"
                    maxLength={14}
                    className="w-full h-11 pl-12 pr-3.5 rounded-xl border border-[#E5DFD5] bg-white text-xs text-[#1C1917] font-medium font-sans focus:outline-none focus:ring-1 focus:ring-[#FF671F]"
                  />
                  <Phone className="h-4 w-4 text-[#68615A] absolute right-3.5 pointer-events-none" />
                </div>
                <p className="text-[10px] text-[#68615A] mt-1 font-sans">
                  We'll send a 4-digit verification code to this number.
                </p>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#1C1917] block mb-1.5 font-sans">
                  Your Full Name (Optional)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Aarav Mehta"
                  className="w-full h-11 px-3.5 rounded-xl border border-[#E5DFD5] bg-white text-xs text-[#1C1917] font-medium font-sans focus:outline-none focus:ring-1 focus:ring-[#FF671F]"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-[#FF671F] text-white font-sans text-xs font-semibold tracking-wide hover:bg-[#E05612] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs mt-2"
              >
                <span>Send Verification Code</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-white border border-[#E5DFD5] flex items-center justify-between text-xs font-sans">
                <div>
                  <span className="text-[#68615A] block text-[10px] uppercase tracking-wider">
                    Code sent to
                  </span>
                  <span className="font-semibold text-[#1C1917]">
                    +91 {mobileNumber}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setOtpSent(false);
                    setOtp("");
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
                    onClick={handleAutoFillDemoOtp}
                    className="text-[10px] text-[#138808] font-semibold hover:underline cursor-pointer"
                  >
                    Quick fill (1234)
                  </button>
                </div>
                <input
                  type="text"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="e.g. 1234"
                  maxLength={6}
                  className="w-full h-12 px-4 rounded-xl border border-[#E5DFD5] bg-white text-center text-lg font-mono font-bold tracking-widest text-[#1C1917] focus:outline-none focus:ring-1 focus:ring-[#FF671F]"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-[#FF671F] text-white font-sans text-xs font-semibold tracking-wide hover:bg-[#E05612] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs mt-2"
              >
                <span>Verify & Continue</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </form>
          )}

          <div className="mt-6 pt-5 border-t border-[#E5DFD5] flex items-center justify-center gap-2 text-[11px] text-[#68615A] font-sans">
            <ShieldCheck className="w-3.5 h-3.5 text-[#138808]" />
            <span>Secure mobile-only authentication for Bharat travelers</span>
          </div>
        </div>
      </div>
    </div>
  );
}

