import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const navy = '#1A3A5C'
const terracotta = '#E07856'
const gold = '#C9A961'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/70 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full" style={{ background: navy }} />
            <span className="font-semibold text-slate-900">Law Office</span>
          </div>
          <p className="text-slate-600 text-sm">Warm, professional legal guidance tailored to your unique journey.</p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/podcast">Podcast</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Contact</h4>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> <span>+1 (555) 123-4567</span></li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4"/> <span>office@example.com</span></li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4"/> <span>123 Main St, City</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Newsletter</h4>
          <div className="flex gap-2">
            <input type="email" placeholder="Your email" className="flex-1 border rounded-md px-3 py-2"/>
            <button className="px-4 py-2 rounded-md text-white" style={{ background: terracotta }}>Subscribe</button>
          </div>
          <p className="text-[11px] text-slate-500 mt-2">By subscribing you agree to our privacy policy.</p>
        </div>
      </div>
      <div className="border-t border-slate-200/70 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Law Office. All rights reserved.
      </div>
    </footer>
  )
}
