import React from 'react'
import offers from '../data/offers.json'

export default function Offers() {
  return (
    <div className="container-app my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {offers.map((o,i) => (
        <div className="card p-6" key={i}>
          <h3 className="font-bold text-brand-dark">{o.title}</h3>
          <p className="subtitle">Valid till {new Date(o.expires).toLocaleDateString('en-IN')}</p>
          <button className="btn-primary mt-4">Claim Offer</button>
        </div>
      ))}
    </div>
  )
}
