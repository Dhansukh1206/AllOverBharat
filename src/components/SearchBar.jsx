import React from 'react'

export default function SearchBar({ onSearch }) {
  const [q, setQ] = React.useState('')
  return (
    <div className="flex gap-3">
      <input
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search destination, month, budget…"
        className="flex-1 h-12 rounded-xl border border-brand-border bg-white px-4 focus:outline-none focus:ring-2 focus:ring-brand-accent"
      />
      <button className="btn-primary" onClick={() => onSearch?.(q)}>Search</button>
    </div>
  )
}
