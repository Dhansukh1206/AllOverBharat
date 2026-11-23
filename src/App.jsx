import React, { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { User, Home, Compass, BookOpen, Gift } from "./icons.jsx";
import Footer from "./components/Footer.tsx";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";
import MobileLoginModal from "./components/MobileLoginModal.jsx";

function AppContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isLoggedIn } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-brand-charcoal flex flex-col selection:bg-brand-sand selection:text-brand-charcoal bg-transparent">
      <header
        className={`sticky top-0 z-30 transition-all duration-500 relative overflow-hidden ${
          isScrolled
            ? "bg-[#FAF8F5]/65 backdrop-blur-xl border-b border-[#E5DFD5]/80 shadow-[0_4px_24px_-4px_rgba(28,25,23,0.05)]"
            : "bg-[#FAF8F5]/40 backdrop-blur-md border-b border-[#E5DFD5]/30"
        }`}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <img
            src="/images/header-texture.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-[0.09] mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF8F5]/20 to-transparent" />
        </div>

        <div className="container-app py-2 flex items-center justify-center md:justify-between relative z-10">
          <NavLink
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 group px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-[#E5DFD5] shadow-xs hover:bg-white hover:border-[#F2873B]/40 hover:shadow-sm transition-colors duration-200"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border border-[#E5DFD5] ring-2 ring-[#3A7531]/20 flex items-center justify-center bg-white shadow-xs flex-shrink-0">
              <img
                src="/images/logo.png"
                alt="AllOverBharat Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#1C1917] leading-tight">
                AllOver
                <span className="text-[#F2873B] italic font-bold ml-0.5">
                  Bharat
                </span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.22em] text-[#3A7531] font-bold -mt-0.5">
                Adventure & Travel
              </span>
            </div>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/85 backdrop-blur-md border border-[#E5DFD5] shadow-xs text-xs font-semibold uppercase tracking-[0.14em]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-[#F2873B] to-[#E2762A] text-white px-4 py-1.5 rounded-full transition-all duration-200 shadow-xs font-bold"
                  : "text-[#68615A] hover:text-[#1C1917] hover:bg-black/5 px-3.5 py-1.5 rounded-full transition-all duration-200"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-[#F2873B] to-[#E2762A] text-white px-4 py-1.5 rounded-full transition-all duration-200 shadow-xs font-bold"
                  : "text-[#68615A] hover:text-[#1C1917] hover:bg-black/5 px-3.5 py-1.5 rounded-full transition-all duration-200"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-[#F2873B] to-[#E2762A] text-white px-4 py-1.5 rounded-full transition-all duration-200 shadow-xs font-bold"
                  : "text-[#68615A] hover:text-[#1C1917] hover:bg-black/5 px-3.5 py-1.5 rounded-full transition-all duration-200"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/offers"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-[#F2873B] to-[#E2762A] text-white px-4 py-1.5 rounded-full transition-all duration-200 shadow-xs font-bold"
                  : "text-[#68615A] hover:text-[#1C1917] hover:bg-black/5 px-3.5 py-1.5 rounded-full transition-all duration-200"
              }
            >
              Offers
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `group h-10 px-3.5 rounded-full flex items-center gap-2.5 transition-all duration-300 cursor-pointer shadow-xs ${
                  isActive
                    ? "bg-[#1C1917] text-white border border-[#1C1917] shadow-sm"
                    : "bg-white/90 text-[#1C1917] border border-[#E5DFD5] backdrop-blur-md hover:border-[#F2873B] hover:shadow-sm"
                }`
              }
              title={
                isLoggedIn
                  ? `Logged in as ${user?.name || user?.phone}`
                  : "Traveler Profile & Sign In"
              }
              aria-label="Traveler Profile"
            >
              <div className="relative w-6 h-6 rounded-full p-[1.5px] bg-gradient-to-tr from-[#FF671F] via-[#FAF8F5] to-[#138808] flex items-center justify-center flex-shrink-0">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  {isLoggedIn && user?.avatar ? (
                    <img
                      src={user.avatar}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : isLoggedIn ? (
                    <span className="font-serif text-[10px] font-bold text-[#1C1917]">
                      {(user?.firstName?.[0] || "T").toUpperCase()}
                    </span>
                  ) : (
                    <User className="h-3 w-3 text-[#1C1917]" />
                  )}
                </div>
                {isLoggedIn && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#138808] ring-1.5 ring-white" />
                )}
              </div>
              <span className="text-xs font-semibold font-sans">
                {isLoggedIn ? user?.firstName || "Account" : "Sign In"}
              </span>
            </NavLink>
          </div>
        </div>
      </header>

      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>

      <MobileLoginModal />

      <nav
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-xl border-t border-[#E5DFD5] pt-1.5 pb-[max(0.6rem,env(safe-area-inset-bottom))] px-2 flex items-center justify-around text-[10px] font-semibold uppercase tracking-wider shadow-lg"
        aria-label="Mobile Navigation"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-0.5 py-1 px-2 rounded-xl transition-all duration-200 ${
              isActive
                ? "text-[#F2873B] font-bold scale-105"
                : "text-[#68615A] hover:text-[#1C1917]"
            }`
          }
        >
          <Home className="h-5 w-5" />
          <span className="leading-tight">Home</span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-0.5 py-1 px-2 rounded-xl transition-all duration-200 ${
              isActive
                ? "text-[#F2873B] font-bold scale-105"
                : "text-[#68615A] hover:text-[#1C1917]"
            }`
          }
        >
          <Compass className="h-5 w-5" />
          <span className="leading-tight">About</span>
        </NavLink>

        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-0.5 py-1 px-2 rounded-xl transition-all duration-200 ${
              isActive
                ? "text-[#F2873B] font-bold scale-105"
                : "text-[#68615A] hover:text-[#1C1917]"
            }`
          }
        >
          <BookOpen className="h-5 w-5" />
          <span className="leading-tight">Blog</span>
        </NavLink>

        <NavLink
          to="/offers"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-0.5 py-1 px-2 rounded-xl transition-all duration-200 ${
              isActive
                ? "text-[#F2873B] font-bold scale-105"
                : "text-[#68615A] hover:text-[#1C1917]"
            }`
          }
        >
          <Gift className="h-5 w-5" />
          <span className="leading-tight">Offers</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-0.5 py-1 px-2 rounded-xl transition-all duration-200 relative ${
              isActive
                ? "text-[#F2873B] font-bold scale-105"
                : "text-[#68615A] hover:text-[#1C1917]"
            }`
          }
          aria-label="Profile"
          title="Profile"
        >
          <div className="relative w-6 h-6 rounded-full p-[1.5px] bg-gradient-to-tr from-[#FF671F] via-[#FAF8F5] to-[#138808] flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              {isLoggedIn && user?.avatar ? (
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : isLoggedIn ? (
                <span className="font-serif text-[9px] font-bold text-[#1C1917]">
                  {(user?.firstName?.[0] || "T").toUpperCase()}
                </span>
              ) : (
                <User className="h-3.5 w-3.5 text-[#1C1917]" />
              )}
            </div>
          </div>
          <span className="leading-tight">
            {isLoggedIn ? "Account" : "Sign In"}
          </span>
        </NavLink>
      </nav>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
