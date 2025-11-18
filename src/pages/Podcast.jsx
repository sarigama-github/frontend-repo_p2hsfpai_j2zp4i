import React from 'react'

const navy = '#1A3A5C'

export default function Podcast() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-semibold mb-6" style={{ color: navy }}>Podcast</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map(i => (
            <a key={i} href="#" className="rounded-xl border p-6 block">
              <div className="rounded-lg aspect-video bg-slate-100 border mb-4"></div>
              <div className="font-semibold text-slate-900">Episode {i}</div>
              <p className="text-sm text-slate-600 mt-1">Short description of the episode topic.</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
