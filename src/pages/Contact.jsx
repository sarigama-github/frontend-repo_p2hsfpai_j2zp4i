import React from 'react'

const terracotta = '#E07856'
const navy = '#1A3A5C'

export default function Contact() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-semibold mb-6" style={{ color: navy }}>Get in Touch</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold text-slate-900">Book a Call</h3>
            <p className="text-sm text-slate-600 mt-1">Connect your calendar link here.</p>
            <a href="#" className="inline-block mt-3 px-4 py-2 rounded-md text-white" style={{ background: terracotta }}>Open Calendar</a>
          </div>
          <div className="rounded-xl border p-6 md:col-span-2">
            <h3 className="font-semibold text-slate-900">Send a Message</h3>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
              <input className="border rounded-md px-3 py-2" placeholder="First name" />
              <input className="border rounded-md px-3 py-2" placeholder="Last name" />
              <input className="border rounded-md px-3 py-2 sm:col-span-2" placeholder="Email" />
              <textarea className="border rounded-md px-3 py-2 sm:col-span-2" rows="5" placeholder="How can we help?" />
              <button className="px-5 py-2 rounded-md text-white sm:col-span-2" style={{ background: terracotta }}>Send</button>
            </form>
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-3 gap-6 text-sm text-slate-700">
          <div><div className="font-semibold text-slate-900">Phone</div> +1 (555) 123-4567</div>
          <div><div className="font-semibold text-slate-900">Email</div> office@example.com</div>
          <div><div className="font-semibold text-slate-900">Address</div> 123 Main St, City</div>
        </div>
      </div>
    </section>
  )
}
