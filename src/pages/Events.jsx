import React from 'react'
import events from '../data/events.json'

export default function Events() {
  return (
    <div className="container-app my-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {events.map((e,i) => (
        <div className="card overflow-hidden" key={i}>
          <img src={e.image} alt={e.title} className="h-48 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-brand-dark">{e.title}</h3>
            <p className="subtitle">{new Date(e.date).toLocaleDateString('en-IN',{weekday:'short', day:'numeric', month:'short', year:'numeric'})}</p>
            <p className="mt-1 font-extrabold text-brand-primary">₹ {e.price.toLocaleString('en-IN')}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
