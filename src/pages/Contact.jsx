import React from 'react'

export default function Contact() {
  return (
    <div className="container-app my-12">
      <div className="card p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-extrabold text-brand-dark">Contact Us</h1>
        <p className="subtitle mt-1">We usually reply within a few hours.</p>
        <form className="mt-6 grid grid-cols-1 gap-4">
          <input className="h-12 rounded-xl border border-brand-border px-4 bg-white" placeholder="Your name" />
          <input className="h-12 rounded-xl border border-brand-border px-4 bg-white" placeholder="Email or phone" />
          <textarea className="min-h-[120px] rounded-xl border border-brand-border p-4 bg-white" placeholder="Tell us about your trip…" />
          <button className="btn-primary w-fit">Send Message</button>
        </form>
      </div>
    </div>
  )
}
