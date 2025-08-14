import React from "react";
import packages from "../data/packages.json";
import events from "../data/events.json";
import offers from "../data/offers.json";
import SectionTitle from "../components/SectionTitle.jsx";
import PackageCard from "../components/PackageCard.jsx";
import SearchBar from "../components/SearchBar.jsx";

export default function Home() {
  const [filtered, setFiltered] = React.useState(packages);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const onSearch = (q) => {
    const k = q.toLowerCase();
    setFiltered(packages.filter((p) => p.title.toLowerCase().includes(k)));
  };

  const popularEvents = events.slice(0, 3);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % popularEvents.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [popularEvents.length]);

  return (
    <div>
      <section className="container-app mt-8">
        <div className="card p-8 bg-white">
          <p className="pill mb-4">Discover Incredible India</p>
          <h1 className="title mb-2">Find your next destination</h1>
          <p className="subtitle mb-6 max-w-2xl">
            Handpicked packages, upcoming events and exclusive deals for every
            traveler.
          </p>
          <SearchBar onSearch={onSearch} />
        </div>
      </section>

      <SectionTitle
        action={
          <a
            href="/events"
            className="text-sm text-brand-primary hover:underline"
          >
            View all
          </a>
        }
      >
        Upcoming Events
      </SectionTitle>
      <section className="container-app grid grid-cols-1 sm:grid-cols-2 gap-6">
        {events.map((e, i) => (
          <div className="card p-4 flex gap-4" key={i}>
            <img
              src={e.image}
              alt={e.title}
              className="w-36 h-24 rounded-xl object-cover"
            />
            <div>
              <h3 className="font-bold text-brand-dark">{e.title}</h3>
              <p className="subtitle">
                {new Date(e.date).toLocaleDateString("en-IN", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="mt-1 font-extrabold text-brand-primary">
                ₹ {e.price.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        ))}
      </section>

      <SectionTitle
        action={
          <a
            href="/packages"
            className="text-sm text-brand-primary hover:underline"
          >
            Browse all
          </a>
        }
      >
        Popular Packages
      </SectionTitle>
      <section className="container-app grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <PackageCard key={p.slug} item={p} />
        ))}
      </section>

      <SectionTitle>Special Offers</SectionTitle>
      <section className="container-app grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {offers.map((o, i) => (
          <div className="card p-6 flex items-center justify-between" key={i}>
            <div>
              <h3 className="font-bold text-brand-dark">{o.title}</h3>
              <p className="subtitle">
                Valid till {new Date(o.expires).toLocaleDateString("en-IN")}
              </p>
            </div>
            <a href="/offers" className="btn-primary">
              Claim
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
