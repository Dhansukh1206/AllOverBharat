import React, { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { User, Home, Compass, BookOpen, Gift } from "./icons.jsx";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

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

        <div className="container-app h-20 flex items-center justify-center md:justify-between relative z-10">
          <NavLink
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 group px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-[#E5DFD5] shadow-xs hover:bg-white hover:border-[#F2873B]/40 hover:shadow-sm transition-all duration-300"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border border-[#E5DFD5] ring-2 ring-[#3A7531]/20 flex items-center justify-center bg-white shadow-xs transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
              <img
                src="/images/logo.png"
                alt="AllOverBharat Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#1C1917] leading-tight">
                AllOver
                <span className="text-[#F2873B] italic font-bold">Bharat</span>
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
                `w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs ${
                  isActive
                    ? "bg-[#F2873B] text-white border-2 border-white ring-2 ring-[#F2873B]/50"
                    : "bg-white/90 text-[#1C1917] border-2 border-[#1C1917]/75 backdrop-blur-md hover:border-[#F2873B] hover:text-[#F2873B] hover:scale-105"
                }`
              }
              title="Traveler Profile & Previous Expeditions"
              aria-label="Traveler Profile"
            >
              <User className="h-5 w-5" />
            </NavLink>
          </div>
        </div>
      </header>

      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>

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
            `flex flex-col items-center justify-center gap-0.5 py-1 px-2 rounded-xl transition-all duration-200 ${
              isActive
                ? "text-[#F2873B] font-bold scale-105"
                : "text-[#68615A] hover:text-[#1C1917]"
            }`
          }
          aria-label="Profile"
          title="Profile"
        >
          <User className="h-5 w-5" />
          <span className="leading-tight">Profile</span>
        </NavLink>
      </nav>

      <footer className="border-t border-[#E5DFD5] bg-transparent mt-24 py-16 transition-colors duration-300">
        <div className="container-app flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight text-[#1C1917]">
              AllOver<span className="text-[#F2873B] italic">Bharat</span>
            </span>
            <p className="subtitle text-xs max-w-md mt-2">
              Bespoke travel curations across all 28 states and 8 union
              territories of Bharat. Crafted for mindful travelers, heritage
              preservation, and slow discovery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <p className="text-xs text-[#68615A] tracking-wide">
              © {new Date().getFullYear()} AllOverBharat • Edition V
            </p>
            <span className="text-xs text-[#68615A] tracking-wide font-medium">
              concierge@alloverbharat.com
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
