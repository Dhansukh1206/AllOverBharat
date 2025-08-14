import React from 'react'
import { Heart } from '../icons.jsx'

export default function PackageCard({ item }) {
  return (
    <a href={`/packages/${item.slug}`} className="card overflow-hidden group">
      <div className="h-40 w-full overflow-hidden">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-brand-dark">{item.title}</h3>
          <button className="pill"><Heart className="h-3 w-3" /> Save</button>
        </div>
        <p className="text-sm subtitle mt-1">{item.days}D/{item.nights}N · {item.subtitle}</p>
        <p className="mt-2 font-extrabold text-brand-primary text-lg">₹ {item.price.toLocaleString('en-IN')}</p>
      </div>
    </a>
  )
}
