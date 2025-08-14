import React from "react";
import packages from "../data/packages.json";
import events from "../data/events.json";
import PackageCard from "../components/PackageCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

export default function Packages() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const popularEvents = events.slice(0, 3);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % popularEvents.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [popularEvents.length]);

  return (
    <div className="container-app my-8">
      <section className="container-app mt-6">
        <div className="relative w-full h-64 sm:h-96 overflow-hidden rounded-xl">
          <img
            src={popularEvents[currentSlide].image}
            alt={popularEvents[currentSlide].title}
            className="w-full h-full object-cover transition-opacity duration-700"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute bottom-6 left-6 text-white max-w-lg">
            <h2 className="text-2xl sm:text-3xl font-bold drop-shadow-md">
              {popularEvents[currentSlide].title}
            </h2>
            <p className="text-sm sm:text-base mt-1">
              {new Date(popularEvents[currentSlide].date).toLocaleDateString(
                "en-IN",
                { month: "long", day: "numeric", year: "numeric" }
              )}
            </p>
            <p className="mt-2 font-semibold text-brand-primary text-lg">
              ₹ {popularEvents[currentSlide].price.toLocaleString("en-IN")}
            </p>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {popularEvents.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentSlide ? "bg-brand-primary" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <SectionTitle>All Packages</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((p) => (
          <PackageCard key={p.slug} item={p} />
        ))}
      </div>
    </div>
  );
}
