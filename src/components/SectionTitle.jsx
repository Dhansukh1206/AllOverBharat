import React from 'react'

export default function SectionTitle({ children, action }) {
  return (
    <div className="container-app flex items-center justify-between my-6">
      <h2 className="text-2xl font-extrabold text-brand-dark">{children}</h2>
      {action}
    </div>
  )
}
