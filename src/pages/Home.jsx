import React from 'react'
import { ArrowRight, ShieldCheck, HeartHandshake, Globe2, PlayCircle } from 'lucide-react'

const navy = '#1A3A5C'
const terracotta = '#E07856'
const cream = '#F8F6F3'
const gold = '#C9A961'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: cream }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight" style={{ color: navy }}>
              Boutique Legal Guidance with Heart
            </h1>
            <p className="mt-4 text-slate-700">
              Thoughtful representation for international couples, mediation-first divorces, and modern family planning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/contact" className="px-5 py-3 rounded-full text-white font-semibold" style={{ background: terracotta }}>Schedule Consultation</a>
              <a href="/about" className="px-5 py-3 rounded-full font-semibold border" style={{ borderColor: navy, color: navy }}>Learn More</a>
            </div>
          </div>
          <div className="bg-white/70 rounded-xl aspect-[4/3] border"></div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="border-y bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6" style={{ color: gold }} />
            <p className="font-medium text-slate-700">Transparent, client-first counsel</p>
          </div>
          <div className="flex items-center gap-3">
            <HeartHandshake className="w-6 h-6" style={{ color: terracotta }} />
            <p className="font-medium text-slate-700">Compassionate, practical solutions</p>
          </div>
          <div className="flex items-center gap-3">
            <Globe2 className="w-6 h-6" style={{ color: navy }} />
            <p className="font-medium text-slate-700">Cross-border expertise</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-semibold mb-8" style={{ color: navy }}>How We Help</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'International Couples', icon: Globe2, href: '/services/international-couples' },
              { title: 'Divorce & Mediation', icon: HeartHandshake, href: '/services/divorce-mediation' },
              { title: 'Prenuptial Agreements', icon: ShieldCheck, href: '/services/prenuptial-agreements' },
              { title: 'Notary Services', icon: ShieldCheck, href: '/services/notary-services' },
            ].map((item) => (
              <a key={item.title} href={item.href} className="group rounded-xl border p-6 hover:shadow-md transition">
                <item.icon className="w-8 h-8 mb-4" style={{ color: terracotta }} />
                <div className="font-semibold text-slate-900">{item.title}</div>
                <p className="text-sm text-slate-600 mt-1">Brief description about the service and who it’s for.</p>
                <span className="inline-flex items-center gap-1 text-sm mt-3 text-slate-700 group-hover:translate-x-1 transition">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Personal story */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-xl aspect-[4/3] bg-slate-100 border"></div>
          <div>
            <h3 className="text-2xl font-semibold" style={{ color: navy }}>A Personal Approach</h3>
            <p className="mt-3 text-slate-700">Your story matters. We take time to understand your goals and values, providing tailored guidance at every step.</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h3 className="text-2xl font-semibold mb-8" style={{ color: navy }}>Our Process</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((n, i) => (
              <div key={i} className="rounded-xl border p-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold mb-3" style={{ background: cream, color: navy }}>
                  {n}
                </div>
                <div className="font-semibold text-slate-900">Step {n}</div>
                <p className="text-sm text-slate-600 mt-1">Short explanation of what happens at this stage and how we support you.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold" style={{ color: navy }}>Podcast</h3>
            <p className="mt-3 text-slate-700">Insights on relationships, law, and life. New episodes weekly.</p>
            <a href="/podcast" className="inline-flex items-center gap-2 mt-4 font-semibold" style={{ color: terracotta }}>
              Listen now <PlayCircle className="w-5 h-5" />
            </a>
          </div>
          <div className="rounded-xl aspect-video bg-slate-100 border"></div>
        </div>
      </section>

      {/* Testimonials carousel (static placeholder) */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h3 className="text-2xl font-semibold mb-6" style={{ color: navy }}>Kind Words</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="rounded-xl border p-6 bg-white">
                <p className="text-slate-700">“A thoughtful, steady guide during a challenging time. Highly recommend.”</p>
                <div className="mt-3 text-sm text-slate-500">Client name</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h3 className="text-2xl font-semibold mb-8" style={{ color: navy }}>From the Blog</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <a key={i} href="/blog" className="group rounded-xl border p-6 bg-white hover:shadow-md transition">
                <div className="rounded-lg aspect-video bg-slate-100 border mb-4"></div>
                <div className="font-semibold text-slate-900">Post title</div>
                <p className="text-sm text-slate-600 mt-1">Brief excerpt from the article to tease the content.</p>
                <span className="inline-flex items-center gap-1 text-sm mt-3 text-slate-700 group-hover:translate-x-1 transition">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16" style={{ background: navy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold text-white">Ready to talk?</h3>
          <p className="text-blue-100 mt-2">Book a consultation to explore your options with clarity and care.</p>
          <a href="/contact" className="inline-block mt-6 px-6 py-3 rounded-full text-white font-semibold" style={{ background: terracotta }}>Schedule Consultation</a>
        </div>
      </section>
    </div>
  )
}
