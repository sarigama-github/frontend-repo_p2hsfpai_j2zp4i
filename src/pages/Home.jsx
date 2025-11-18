import React, { useMemo, useState } from 'react'
import { ArrowRight, PlayCircle, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const navy = '#1A3A5C'
const terracotta = '#E07856'
const cream = '#F8F6F3'
const gold = '#C9A961'

export default function Home() {
  // Testimonials data
  const testimonials = useMemo(() => ([
    {
      quote: 'יהודה ליווה אותי בתהליך הגירושין בכבוד ובהבנה אמיתית. הרגשתי שיש לי מישהו בצד שלי.',
      name: 'דינה כ.'
    },
    {
      quote: 'הצלחנו להביא את אשתי מאתיופיה תוך 14 חודשים. עו״ד בנטוב ידע בדיוק מה לעשות.',
      name: 'דוד א.'
    },
    {
      quote: 'הסכם הממון שהכנו חסך לנו המון כאב ראש. מומלץ בחום!',
      name: 'רונית וגיא'
    }
  ]), [])

  const [index, setIndex] = useState(0)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden" style={{ background: cream }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center" dir="rtl">
            {/* Image on mobile first */}
            <div className="order-1 md:order-2">
              <div className="aspect-[4/3] md:aspect-[5/4] rounded-2xl border bg-white/70 shadow-sm flex items-center justify-center text-slate-500">
                <span className="text-sm">תמונת עו"ד מקצועית – תאורה חמה, נינוח</span>
              </div>
            </div>
            <div className="order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight" style={{ color: navy }}>
                מותחי גבולות מהימנים - כשאתה ובת זוגך חולמים על חיים משותפים בישראל
              </h1>
              <p className="mt-4 text-slate-600 text-lg">
                ניווט במורכבות של דיני משפחה בינלאומיים בשפת הלב - מהתחלת הדרך ועד איחוד משפחות
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/contact" className="px-5 py-3 rounded-full text-white font-semibold" style={{ background: terracotta }}>
                  קבע פגישת הכרות חינמית
                </a>
                <a href="/podcast" className="px-5 py-3 rounded-full font-semibold border" style={{ borderColor: navy, color: navy }}>
                  האזן לפודקאסט
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS BAR */}
      <section className="border-y" style={{ background: cream }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid sm:grid-cols-3 gap-4 text-center text-slate-700" dir="rtl">
            <div className="py-1">✓ נוטריון מוסמך</div>
            <div className="py-1">✓ התמחות בדיני משפחה בינלאומי</div>
            <div className="py-1">✓ Hebrew | English | Russian | Spanish | French</div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS SECTION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" dir="rtl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: navy }}>
            המסע המשפטי שלנו
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <a href="/services/prenuptial-agreements" className="group rounded-xl bg-white p-6 shadow-sm hover:shadow-lg transition-all border hover:-translate-y-0.5" aria-label="התחלה - למד עוד">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold" style={{ color: navy }}>התחלה</h3>
              <ul className="mt-2 text-slate-700 list-disc pr-5 space-y-1 text-sm">
                <li>הסכמי ממון</li>
                <li>ייעוץ טרום נישואין</li>
                <li>תכנון משפחתי</li>
              </ul>
              <span className="inline-flex items-center gap-1 text-sm mt-4 text-slate-700 group-hover:gap-2 transition">
                למד עוד <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            {/* Card 2 */}
            <a href="/services/international-couples" className="group rounded-xl bg-white p-6 shadow-sm hover:shadow-lg transition-all border hover:-translate-y-0.5" aria-label="איחוד - למד עוד">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-lg font-semibold" style={{ color: navy }}>איחוד</h3>
              <ul className="mt-2 text-slate-700 list-disc pr-5 space-y-1 text-sm">
                <li>הגעת בן/בת זוג לישראל</li>
                <li>הליכי אזרחות ועליה</li>
                <li>ניווט בבירוקרטיה</li>
              </ul>
              <span className="inline-flex items-center gap-1 text-sm mt-4 text-slate-700 group-hover:gap-2 transition">
                למד עוד <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            {/* Card 3 */}
            <a href="/services/divorce-mediation" className="group rounded-xl bg-white p-6 shadow-sm hover:shadow-lg transition-all border hover:-translate-y-0.5" aria-label="משבר - למד עוד">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="text-lg font-semibold" style={{ color: navy }}>משבר</h3>
              <ul className="mt-2 text-slate-700 list-disc pr-5 space-y-1 text-sm">
                <li>גישור גירושין</li>
                <li>הליכי גירושין (אזרחיים ורבניים)</li>
                <li>הסכמי פרידה</li>
              </ul>
              <span className="inline-flex items-center gap-1 text-sm mt-4 text-slate-700 group-hover:gap-2 transition">
                למד עוד <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            {/* Card 4 */}
            <a href="/services/international-couples#custody" className="group rounded-xl bg-white p-6 shadow-sm hover:shadow-lg transition-all border hover:-translate-y-0.5" aria-label="הורות - למד עוד">
              <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
              <h3 className="text-lg font-semibold" style={{ color: navy }}>הורות</h3>
              <ul className="mt-2 text-slate-700 list-disc pr-5 space-y-1 text-sm">
                <li>משמורת וזכויות הורים</li>
                <li>תיקי בתי דין רבניים</li>
                <li>הליכים בינלאומיים</li>
              </ul>
              <span className="inline-flex items-center gap-1 text-sm mt-4 text-slate-700 group-hover:gap-2 transition">
                למד עוד <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* PERSONAL STORY SECTION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-5 gap-8 items-center" dir="rtl">
            <div className="md:col-span-2">
              <div className="aspect-[4/3] rounded-2xl bg-slate-100 border flex items-center justify-center text-slate-500">
                <span className="text-sm">תמונת אווירה חמה/יומיומית</span>
              </div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-2xl md:text-3xl font-bold" style={{ color: navy }}>למה אני עושה את מה שאני עושה</h3>
              <p className="mt-3 text-slate-700 leading-8">
                הייתי מהגר בעצמי. ידעתי מה זה להרגיש אבוד מול הבירוקרטיה, לדאוג לעתיד המשפחה. למדתי שאין דבר חשוב יותר מחיסור בזכויות אדם וקירוב לבבות. היום, כעורך דין המתמחה בדיני משפחה בינלאומיים, אני עוזר לזוגות ומשפחות לנווט במערכת המורכבת - עם הבנה, סבלנות, ושפת הלב.
              </p>
              <a href="/about" className="inline-block mt-6 px-5 py-3 rounded-full font-semibold border" style={{ borderColor: navy, color: navy }}>
                קרא עוד עלי
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" dir="rtl">
          <h3 className="text-2xl md:text-3xl font-bold mb-10" style={{ color: navy }}>תהליך העבודה שלנו</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="rounded-2xl border p-6 bg-white">
              <div className="text-5xl font-bold" style={{ color: gold }}>01</div>
              <div className="mt-3 text-lg font-semibold" style={{ color: navy }}>פגישה ראשונית</div>
              <p className="mt-1 text-slate-700">הקשבה אמיתית למצבך. לא נמכור לך דברים שאתה לא צריך.</p>
            </div>
            {/* Item 2 */}
            <div className="rounded-2xl border p-6 bg-white">
              <div className="text-5xl font-bold" style={{ color: gold }}>02</div>
              <div className="mt-3 text-lg font-semibold" style={{ color: navy }}>הבנת המצב</div>
              <p className="mt-1 text-slate-700">בניית אסטרטגיה משפטית מותאמת אישית. נסביר הכל בשפה ברורה.</p>
            </div>
            {/* Item 3 */}
            <div className="rounded-2xl border p-6 bg-white">
              <div className="text-5xl font-bold" style={{ color: gold }}>03</div>
              <div className="mt-3 text-lg font-semibold" style={{ color: navy }}>קבלת החלטות</div>
              <p className="mt-1 text-slate-700">ליווי צמוד עד להשגת המטרה. אתה לא לבד בתהליך.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PODCAST SECTION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center" dir="rtl">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold" style={{ color: navy }}>פודקאסט לב המשפט</h3>
            <p className="mt-2 text-slate-700">שפת הלב במערכות יחסים, גם כשקשה</p>
            <p className="mt-2 text-slate-600">שיחות כנות על אהבה, משפחה, ומשפט</p>
            <div className="mt-4 flex items-center gap-3 text-slate-600">
              <div className="w-10 h-10 rounded bg-slate-200" aria-hidden />
              <span className="text-sm">עטיפת הפודקאסט</span>
            </div>
            <div className="mt-4 rounded-lg border p-4 bg-slate-50 flex items-center gap-3 text-slate-700">
              <PlayCircle className="w-6 h-6" style={{ color: terracotta }} />
              <span>נגן אודיו (דמה)</span>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm">
              <span className="text-slate-600">הירשמו ב:</span>
              <a href="/podcast" className="underline" style={{ color: navy }}>Spotify</a>
              <a href="/podcast" className="underline" style={{ color: navy }}>Apple Podcasts</a>
              <a href="/podcast" className="underline" style={{ color: navy }}>Google Podcasts</a>
            </div>
            <a href="/podcast" className="inline-block mt-6 px-5 py-3 rounded-full text-white font-semibold" style={{ background: terracotta }}>
              כל הפרקים
            </a>
          </div>
          <div className="rounded-2xl aspect-video bg-slate-100 border flex items-center justify-center text-slate-500">
            <span>תצוגת וידאו/נגן</span>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" dir="rtl">
          <h3 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: navy }}>מה אומרים הלקוחות שלנו</h3>

          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl border p-4 bg-white hover:shadow-md transition">
                <div className="relative rounded-lg overflow-hidden aspect-video bg-slate-100 flex items-center justify-center">
                  <button className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.6)' }}>
                      <PlayCircle className="w-8 h-8 text-white" />
                    </div>
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-1" aria-label="דירוג 5 כוכבים">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-5 h-5" style={{ color: gold }} fill={gold} />
                  ))}
                </div>
                <blockquote className="mt-2 text-slate-700 line-clamp-2">“{t.quote}”</blockquote>
                <div className="mt-2 text-sm text-slate-600">{t.name}</div>
              </div>
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden">
            <div className="relative">
              <div className="rounded-2xl border p-4 bg-white">
                <div className="relative rounded-lg overflow-hidden aspect-video bg-slate-100 flex items-center justify-center">
                  <button className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.6)' }}>
                      <PlayCircle className="w-8 h-8 text-white" />
                    </div>
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-1" aria-label="דירוג 5 כוכבים">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-5 h-5" style={{ color: gold }} fill={gold} />
                  ))}
                </div>
                <blockquote className="mt-2 text-slate-700">“{testimonials[index].quote}”</blockquote>
                <div className="mt-2 text-sm text-slate-600">{testimonials[index].name}</div>
              </div>
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
                <button onClick={prev} className="p-2 rounded-full bg-white border shadow-sm active:scale-95" aria-label="הקודם">
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button onClick={next} className="p-2 rounded-full bg-white border shadow-sm active:scale-95" aria-label="הבא">
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="mt-3 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <span key={i} className={`w-2 h-2 rounded-full ${i === index ? 'bg-[#C9A961]' : 'bg-slate-300'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" dir="rtl">
          <h3 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: navy }}>מהבלוג המשפטי שלנו</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Article 1 */}
            <a href="/blog" className="group rounded-2xl border p-4 bg-white hover:shadow-md transition">
              <div className="rounded-lg aspect-video bg-slate-100 border mb-4"></div>
              <span className="inline-block text-xs px-2 py-1 rounded-full" style={{ background: terracotta, color: 'white' }}>
                זוגות בינלאומיים
              </span>
              <h4 className="mt-3 text-lg font-semibold" style={{ color: navy }}>המדריך המלא להגעת בן/בת זוג לישראל</h4>
              <p className="mt-1 text-slate-700 line-clamp-2">כל מה שצריך לדעת על התהליך, המסמכים, והזמנים - במדריך מקיף...</p>
              <div className="mt-3 text-sm text-slate-500 flex items-center gap-2">
                <span>קריאה של 8 דקות</span>
                <span className="inline-flex items-center gap-1 text-slate-700 group-hover:gap-2 transition">
                  קרא עוד <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group rounded-2xl border p-4 bg-white hover:shadow-md transition">
              <div className="rounded-lg aspect-video bg-slate-100 border mb-4"></div>
              <span className="inline-block text-xs px-2 py-1 rounded-full" style={{ background: terracotta, color: 'white' }}>
                הסכמי ממון
              </span>
              <h4 className="mt-3 text-lg font-semibold" style={{ color: navy }}>5 טעויות נפוצות בהסכם ממון</h4>
              <p className="mt-1 text-slate-700 line-clamp-2">טעויות שיכולות לעלות לכם יקר. איך להימנע מהן...</p>
              <div className="mt-3 text-sm text-slate-500 flex items-center gap-2">
                <span>קריאה של 5 דקות</span>
                <span className="inline-flex items-center gap-1 text-slate-700 group-hover:gap-2 transition">
                  קרא עוד <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group rounded-2xl border p-4 bg-white hover:shadow-md transition">
              <div className="rounded-lg aspect-video bg-slate-100 border mb-4"></div>
              <span className="inline-block text-xs px-2 py-1 rounded-full" style={{ background: terracotta, color: 'white' }}>
                גירושין
              </span>
              <h4 className="mt-3 text-lg font-semibold" style={{ color: navy }}>גירושין בינלאומיים: מה חשוב לדעת</h4>
              <p className="mt-1 text-slate-700 line-clamp-2">כשאתם לא באותה מדינה, הדברים מסתבכים. הנה מה שחשוב...</p>
              <div className="mt-3 text-sm text-slate-500 flex items-center gap-2">
                <span>קריאה של 6 דקות</span>
                <span className="inline-flex items-center gap-1 text-slate-700 group-hover:gap-2 transition">
                  קרא עוד <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-16 relative">
        <div className="absolute inset-0" style={{ background: navy, opacity: 0.9 }} />
        <div className="absolute inset-0" style={{ background: terracotta, opacity: 0.3 }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" dir="rtl">
          <h3 className="text-2xl md:text-3xl font-bold text-white">מוכנים להתחיל את המסע המשפטי שלך עוד היום?</h3>
          <p className="text-blue-100 mt-2">פגישת הכרות ראשונית ללא עלות</p>
          <a href="/contact" className="inline-block mt-6 px-6 py-3 rounded-full text-white font-semibold" style={{ background: terracotta }}>
            קבע פגישה עכשיו
          </a>
        </div>
      </section>
    </div>
  )
}
