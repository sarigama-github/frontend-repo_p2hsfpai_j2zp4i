import React from 'react'
import { Link } from 'react-router-dom'

const terracotta = '#E07856'

export default function StickyCTA() {
  return (
    <Link
      to="/contact"
      className="fixed md:bottom-6 md:right-6 bottom-3 left-1/2 -translate-x-1/2 md:translate-x-0 z-50 shadow-lg"
      style={{ backgroundColor: terracotta }}
    >
      <span className="px-5 py-3 md:px-6 md:py-3 text-white font-semibold rounded-full inline-block">Schedule Consultation</span>
    </Link>
  )
}
