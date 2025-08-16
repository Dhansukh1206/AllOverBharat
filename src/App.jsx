import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { MapPin, Gift, Phone } from "./icons.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <header className="bg-white/90 backdrop-blur border-b border-brand-border sticky top-0 z-20">
        <div className="container-app h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-extrabold text-brand-dark">
            <img
              src="/images/logo.png"  
              alt="AllOverBharat Logo"
              className="h-10 w-auto object-contain"
            />
            <span>AllOverBharat</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-brand-primary font-semibold"
                  : "text-brand-dark/80 hover:text-brand-primary"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/packages"
              className={({ isActive }) =>
                isActive
                  ? "text-brand-primary font-semibold"
                  : "text-brand-dark/80 hover:text-brand-primary"
              }
            >
              Packages
            </NavLink>
            <NavLink
              to="/offers"
              className={({ isActive }) =>
                isActive
                  ? "text-brand-primary font-semibold"
                  : "text-brand-dark/80 hover:text-brand-primary"
              }
            >
              Offers
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive
                  ? "text-brand-primary font-semibold"
                  : "text-brand-dark/80 hover:text-brand-primary"
              }
            >
              Events
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-brand-primary font-semibold"
                  : "text-brand-dark/80 hover:text-brand-primary"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-brand-primary font-semibold"
                  : "text-brand-dark/80 hover:text-brand-primary"
              }
            >
              About Us
            </NavLink>
          </nav>

          <a href="/offers" className="btn-primary hidden sm:inline-flex">
            <Gift className="h-4 w-4 mr-2" /> Special Deals
          </a>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-brand-border bg-white mt-16">
        <div className="container-app py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-dark/70">
            © {new Date().getFullYear()} AllOverBharat • All rights reserved
          </p>
          <a href="/contact" className="btn-ghost">
            <Phone className="h-4 w-4 mr-2" /> Get in touch
          </a>
        </div>
      </footer>
    </div>
  );
}
