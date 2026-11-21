import React from 'react'

export default function SectionTitle({ children, action, eyebrow }) {
  return (
    <div className="container-app mt-12 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b border-brand-border">
        <div>
          {eyebrow && (
            <p className="kicker mb-1">{eyebrow}</p>
          )}
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-brand-charcoal">
            {children}
          </h2>
        </div>
        {action && (
          <div className="text-xs font-medium uppercase tracking-[0.12em] text-brand-taupe hover:text-brand-charcoal transition-colors">
            {action}
          </div>
        )}
      </div>
    </div>
  )
}
