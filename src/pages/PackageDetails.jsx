import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/packages.json'

export default function PackageDetails() {
  const { slug } = useParams()
  const pkg = data.find(p => p.slug === slug)
  if (!pkg) return <div className="container-app my-12">Package not found.</div>
  return (
    <div className="container-app my-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <img src={pkg.image} alt={pkg.title} className="w-full h-80 object-cover rounded-2xl border border-brand-border" />
        <div className="card p-6">
          <h1 className="text-3xl font-extrabold text-brand-dark">{pkg.title}</h1>
          <p className="subtitle mt-2">{pkg.days} days / {pkg.nights} nights · {pkg.subtitle}</p>
          <p className="mt-4 text-2xl font-extrabold text-brand-primary">₹ {pkg.price.toLocaleString('en-IN')}</p>
          <button className="btn-primary mt-6">Enquire Now</button>
        </div>
      </div>
      <div className="mt-8 card p-6">
        <h2 className="text-xl font-bold text-brand-dark mb-2">Itinerary (sample)</h2>
        <ul className="list-disc pl-6 space-y-1 subtitle">
          <li>Day 1: Arrival & hotel check-in</li>
          <li>Day 2: Guided city tour & local cuisine</li>
          <li>Day 3: Adventure activity / free exploration</li>
          <li>Day 4+: Optional add-ons & departure</li>
        </ul>
      </div>
    </div>
  )
}
