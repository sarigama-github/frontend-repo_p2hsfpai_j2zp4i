import React from 'react'

const navy = '#1A3A5C'

export default function About() {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-semibold mb-6" style={{ color: navy }}>About the Attorney</h1>
        <div className="prose max-w-none">
          <p>Biography and credentials go here. Share your path, values, and approach.</p>
          <ul>
            <li>J.D., University</li>
            <li>Bar Admissions</li>
            <li>Professional Affiliations</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
