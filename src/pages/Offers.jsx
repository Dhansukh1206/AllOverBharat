import React from 'react'
import offers from '../data/offers.json'
import SectionTitle from '../components/SectionTitle.jsx'
import { Gift, ArrowRight } from '../icons.jsx'

export default function Offers() {
  return (
    <div className="container-app my-10 pb-20">
      <SectionTitle eyebrow="VIP CLUB PRIVILEGES">
        Exclusive Seasonal Privileges & Rates
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {offers.map((o, i) => (
          <div className="card overflow-hidden flex flex-col justify-between group" key={i}>
            <div>
                            <div className="aspect-[16/9] overflow-hidden bg-brand-charcoal relative">
                <img 
                  src={o.image} 
                  alt={o.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-3 left-3 bg-[#FAF8F5]/92 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.14em] font-medium text-brand-charcoal border border-brand-border">
                  {o.discount || 'Special Deal'}
                </span>
                <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-white font-medium">
                  Code: {o.code}
                </span>
              </div>

                            <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="pill-tag">
                    <Gift className="h-3 w-3" /> Privileged Access
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-brand-charcoal leading-snug">
                  {o.title}
                </h3>
                <p className="subtitle text-xs sm:text-sm mt-3 leading-relaxed">
                  {o.description}
                </p>
                <p className="text-xs text-brand-taupe mt-4 font-medium">
                  Valid through {new Date(o.expires).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 mt-auto border-t border-brand-border flex items-center justify-between">
              <span className="text-xs text-brand-taupe uppercase tracking-wider font-medium">
                Code: <strong className="text-brand-charcoal">{o.code}</strong>
              </span>
              <a 
                href={`https://wa.me/911800242728?text=Hello%20AllOverBharat,%20I%20would%20like%20to%20claim%20the%20${encodeURIComponent(o.title)}%20using%20code%20${o.code}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Claim Privilege</span>
                <ArrowRight className="h-3.5 w-3.5 ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
