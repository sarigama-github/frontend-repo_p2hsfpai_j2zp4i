import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, ChevronDown } from 'lucide-react'

const navBg = '#F8F6F3'
const navy = '#1A3A5C'
const terracotta = '#E07856'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-[#F8F6F3]/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full" style={{ background: navy }} />
            <span className="font-semibold text-slate-900">Law Office</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            <Link to="/" className="hover:text-slate-900">Home</Link>
            <Link to="/about" className="hover:text-slate-900">About</Link>
            <div className="relative">
              <button onClick={() => setServicesOpen(v => !v)} className="inline-flex items-center gap-1 hover:text-slate-900">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-64 rounded-lg border bg-white shadow-lg p-2">
                  <Link to="/services/international-couples" className="block px-3 py-2 rounded hover:bg-slate-50">International Couples</Link>
                  <Link to="/services/divorce-mediation" className="block px-3 py-2 rounded hover:bg-slate-50">Divorce & Mediation</Link>
                  <Link to="/services/prenuptial-agreements" className="block px-3 py-2 rounded hover:bg-slate-50">Prenuptial Agreements</Link>
                  <Link to="/services/notary-services" className="block px-3 py-2 rounded hover:bg-slate-50">Notary Services</Link>
                </div>
              )}
            </div>
            <Link to="/podcast" className="hover:text-slate-900">Podcast</Link>
            <Link to="/blog" className="hover:text-slate-900">Blog</Link>
            <Link to="/contact" className="hover:text-slate-900">Contact</Link>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setOpen(v => !v)} className="p-2 rounded-md border">
              <Menu />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-slate-700">
              <Link to="/" onClick={() => setOpen(false)} className="py-2">Home</Link>
              <Link to="/about" onClick={() => setOpen(false)} className="py-2">About</Link>
              <details className="py-2">
                <summary className="cursor-pointer">Services</summary>
                <div className="ml-4 mt-2 flex flex-col gap-1">
                  <Link to="/services/international-couples" onClick={() => setOpen(false)} className="py-1">International Couples</Link>
                  <Link to="/services/divorce-mediation" onClick={() => setOpen(false)} className="py-1">Divorce & Mediation</Link>
                  <Link to="/services/prenuptial-agreements" onClick={() => setOpen(false)} className="py-1">Prenuptial Agreements</Link>
                  <Link to="/services/notary-services" onClick={() => setOpen(false)} className="py-1">Notary Services</Link>
                </div>
              </details>
              <Link to="/podcast" onClick={() => setOpen(false)} className="py-2">Podcast</Link>
              <Link to="/blog" onClick={() => setOpen(false)} className="py-2">Blog</Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="py-2">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
