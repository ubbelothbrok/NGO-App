import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

/* ─── Animated counter hook ─── */
function useCounter(target, duration = 1800) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = Math.ceil(target / (duration / 16))
        const timer = setInterval(() => {
          start += step
          if (start >= target) { setCount(target); clearInterval(timer) }
          else setCount(start)
        }, 16)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])
  return [count, ref]
}

function StatCard({ icon, end, suffix, label }) {
  const [count, ref] = useCounter(end)
  return (
    <div className="flex flex-col items-center text-center text-white" ref={ref}>
      <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-2xl mb-6 border border-white/20 backdrop-blur-sm shadow-xl transition-transform hover:scale-110">
        <i className={icon} />
      </div>
      <div className="text-4xl md:text-5xl font-heading font-extrabold mb-2 tracking-tight">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/70 text-xs font-bold uppercase tracking-widest">{label}</div>
    </div>
  )
}

const programs = [
  { icon: 'fa-solid fa-graduation-cap', title: 'Education', color: '#1D4ED8', bg: '#EFF6FF', desc: 'Over 100 schools and training centers providing holistic education, moral values, and free stay for students.', link: '/activities' },
  { icon: 'fa-solid fa-heart-pulse', title: 'Healthcare', color: '#059669', bg: '#ECFDF5', desc: 'Charitable dispensaries, mobile medical camps, and free healthcare services reaching thousands annually.', link: '/activities' },
  { icon: 'fa-solid fa-hands-helping', title: 'Disaster Relief', color: '#D97706', bg: '#FFFBEB', desc: 'Our monks and volunteers are first responders during natural calamities, providing immediate aid.', link: '/activities' },
  { icon: 'fa-solid fa-om', title: 'Spiritual Growth', color: '#7C3AED', bg: '#F5F3FF', desc: 'Regular spiritual discourses, yoga camps, and cultural programs that nurture the inner life of our community.', link: '/activities' },
]

const events = [
  { date: { day: '01', month: 'Jan', year: '2025' }, title: 'Memorial Event in Honor of Dr. Manmohan Singh', desc: 'Bharat Sevashram Sangha hosted a heartfelt memorial to honor the life and legacy of the former Prime Minister.', category: 'Event' },
  { date: { day: '20', month: 'Feb', year: '2024' }, title: 'Annual Seva Diwas Celebration', desc: 'Commemorating our founding with free medical camps, food distribution, and cultural programs.', category: 'Celebration' },
  { date: { day: '15', month: 'Aug', year: '2024' }, title: 'Independence Day Rally & Youth Program', desc: 'A grand rally followed by motivational talks, physical training demonstrations, and cultural events.', category: 'National Event' },
]

const quickLinks = [
  { icon: 'fa-solid fa-book-open', label: 'About BSS', path: '/about' },
  { icon: 'fa-solid fa-calendar-days', label: 'Our Activities', path: '/activities' },
  { icon: 'fa-solid fa-map-location-dot', label: 'Find Branches', path: '/branches' },
  { icon: 'fa-solid fa-images', label: 'Photo Gallery', path: '/media' },
  { icon: 'fa-solid fa-phone-volume', label: 'Contact Us', path: '/contact' },
  { icon: 'fa-solid fa-hand-holding-heart', label: 'Donate', path: '/donate' },
]

const vaniItems = [
  { q: 'What are Real Assets?', a: 'Self-confidence, Self-reliance and Self-respect' },
  { q: 'What are Real Friends?', a: 'Energy, Enthusiasm and Perseverance' },
  { q: 'What is the Goal?', a: 'Self Realization, Universal Emancipation' },
  { q: 'What is Religion?', a: 'Self-sacrifice, Self-abnegation, Self-Discipline' },
  { q: 'What are Real Virtues?', a: 'Heroism, Virility, Manliness and Aspiration' },
  { q: 'What is Real Strength?', a: 'Patience, Fortitude and Endurance' },
]

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Hero />

      {/* Quick Links Strip */}
      <section className="relative z-20 -mt-10 md:-mt-12">
        <div className="container">
          <div className="bg-white rounded-xl shadow-premium overflow-hidden grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 border-x border-t border-border">
            {quickLinks.map((ql) => (
              <Link key={ql.label} to={ql.path} className="flex flex-col items-center justify-center gap-3 py-6 md:py-8 px-4 hover:bg-surface transition-all group border-b lg:border-b-0 border-border">
                <i className={`${ql.icon} text-2xl md:text-3xl text-primary group-hover:scale-110 group-hover:text-secondary transition-all`} />
                <span className="text-xs md:text-sm font-bold text-heading group-hover:text-primary transition-colors">{ql.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section bg-white overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-slide-up">
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900&q=80"
              alt="Bharat Sevashram Sangha Volunteers"
              className="rounded-2xl shadow-2xl object-cover w-full h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-secondary text-white p-6 md:p-8 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce-slow border-4 border-white">
              <span className="text-4xl md:text-5xl font-black font-heading">107</span>
              <span className="text-xs md:text-sm font-bold uppercase leading-tight tracking-wider">Years of<br />Pure Service</span>
            </div>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="section-tag">Welcome To</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-heading mt-4 leading-tight">
              Bharat Sevashram <span className="text-primary italic">Sangha</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full my-6" />
            <p className="text-lg text-text leading-relaxed mb-6">
              Founded by <strong className="text-heading font-extrabold">Acharya Srimat Swami Pranavanandaji Maharaj</strong> in 1917, we are a philanthropic, charitable registered organisation dedicated to the service of humanity worldwide.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              For over a century, the Sangha has worked tirelessly to uplift the afflicted, provide education to the underprivileged, and offer healthcare and relief during natural calamities — operating on a purely non-sectarian basis.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                '100+ schools and centers',
                'Immediate disaster response',
                'Charitable hospitals',
                'Youth empowerment'
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm font-bold text-heading">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-check text-[10px]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-primary px-8 py-4">
              Read Our Full Story <i className="fa-solid fa-arrow-right ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary relative py-20 overflow-hidden shadow-inner">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <StatCard icon="fa-solid fa-users" end={50000} suffix="+" label="Lives Impacted" />
            <StatCard icon="fa-solid fa-school" end={100} suffix="+" label="Schools & Centers" />
            <StatCard icon="fa-solid fa-map-pin" end={30} suffix="+" label="Branch Offices" />
            <StatCard icon="fa-solid fa-calendar-check" end={107} suffix="" label="Years of Service" />
          </div>
        </div>
      </section>

      {/* Programs / Activities */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-tag">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-heading mt-4">Our Core <span className="text-primary italic">Programs</span></h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto my-6" />
            <p className="text-muted text-lg">We serve humanity across four pillars — education, healthcare, disaster relief, and spiritual upliftment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((p) => (
              <div key={p.title} className="card p-8 flex flex-col group h-full">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform shadow-lg" style={{ background: p.bg, color: p.color }}>
                  <i className={p.icon} />
                </div>
                <h3 className="text-xl font-heading font-bold text-heading mb-4 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6 flex-grow">{p.desc}</p>
                <Link to={p.link} className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link">
                  Learn more <i className="fa-solid fa-arrow-right text-[10px] group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <span className="section-tag">Stay Updated</span>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-heading mt-4">Recent <span className="text-primary italic">Events</span></h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-6" />
            </div>
            <Link to="/media" className="btn btn-outline border-border text-heading hover:bg-surface">View All Events</Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {events.map((ev, i) => (
              <div key={i} className="flex flex-col bg-white rounded-2xl shadow-premium border border-border group overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary text-white p-3 rounded-xl flex flex-col items-center justify-center min-w-[70px] shadow-lg shadow-primary/20">
                      <span className="text-2xl font-black leading-none">{ev.date.day}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest mt-1">{ev.date.month}</span>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-surface text-primary text-[10px] font-bold uppercase tracking-wider mb-1">{ev.category}</span>
                      <div className="text-xs text-muted font-medium">{ev.date.year}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-heading mb-4 group-hover:text-primary transition-colors leading-tight">
                    {ev.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-8 line-clamp-2">{ev.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary group/btn">
                    Read Details <i className="fa-solid fa-arrow-right text-[10px] group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?w=1600&q=80" 
          className="absolute inset-0 w-full h-full object-cover opacity-30" 
          alt="Banner bg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent mix-blend-multiply" />
        <div className="container relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <i className="fa-solid fa-quote-left text-5xl md:text-7xl text-secondary/30 mb-8 block mx-auto" />
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 leading-tight drop-shadow-lg italic">"Service to man is service to God"</h2>
            <p className="text-lg md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
              Join hands with Bharat Sevashram Sangha and be part of a century-old mission of selfless service to humanity.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/donate" className="btn bg-white text-primary hover:bg-gray-100 px-10 py-5 text-lg shadow-2xl shadow-black/40">
                <i className="fa-solid fa-heart mr-2" /> Support Our Mission
              </Link>
              <Link to="/contact" className="btn border-2 border-white/40 text-white hover:bg-white/10 px-10 py-5 text-lg backdrop-blur-sm">
                Volunteer With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-tag">Visuals</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-heading mt-4">Impact in <span className="text-primary italic">Action</span></h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto my-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-[500px] md:h-[600px]">
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group shadow-xl">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <span className="text-white font-bold text-xl">Relief Operations</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group shadow-lg">
              <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <i className="fa-solid fa-plus text-white text-3xl" />
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group shadow-lg">
              <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <i className="fa-solid fa-plus text-white text-3xl" />
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group shadow-lg">
              <img src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?w=600&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <i className="fa-solid fa-plus text-white text-3xl" />
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group shadow-lg">
              <img src="https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?w=600&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <i className="fa-solid fa-plus text-white text-3xl" />
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/media" className="btn btn-outline border-border text-heading px-10">View Full Photo Gallery <i className="fa-solid fa-images ml-3" /></Link>
          </div>
        </div>
      </section>

      {/* Sangha Vani */}
      <section className="section bg-topbar relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-tag bg-secondary/10 border-secondary/20 text-secondary">Divine Messages</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mt-4 tracking-tight">Shri Shri Sangha <span className="text-secondary italic">Vani</span></h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto my-6 shadow-lg shadow-secondary/20" />
            <p className="text-white/60 text-lg">Ten divine messages of Acharya Srimat Swami Pranavanandaji Maharaj.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vaniItems.map((v, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <i className="fa-solid fa-om text-7xl text-white" />
                </div>
                <h4 className="text-secondary font-heading font-bold text-xl mb-4 leading-snug drop-shadow-sm">{v.q}</h4>
                <p className="text-white/70 text-base leading-relaxed italic">"{v.a}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-tag">Join Hands</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-heading mt-4 tracking-tight">How You Can <span className="text-primary italic">Help</span></h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto my-6" />
            <p className="text-muted text-lg leading-relaxed">We depend on the generosity of individuals and organizations to continue our century-long mission of service.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { icon: 'fa-solid fa-hand-holding-dollar', title: 'Donate', desc: 'Your financial contributions directly fund our schools, hospitals, and disaster relief operations.', cta: 'Make a Donation', path: '/donate', primary: true },
              { icon: 'fa-solid fa-users', title: 'Volunteer', desc: 'Donate your time and skills at our centers or during emergency relief operations across India.', cta: 'Become a Volunteer', path: '/contact', primary: false },
              { icon: 'fa-solid fa-bullhorn', title: 'Spread Word', desc: 'Follow and share our stories on social media. Raising awareness helps us reach more supporters.', cta: 'Follow Us', path: '/media', primary: false },
            ].map((item) => (
              <div key={item.title} className="card p-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-surface flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform shadow-inner text-primary">
                  <i className={item.icon} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-heading mb-4 tracking-tight">{item.title}</h3>
                <p className="text-muted leading-relaxed mb-10 flex-grow">{item.desc}</p>
                <Link to={item.path} className={`btn ${item.primary ? 'btn-primary' : 'btn-outline border-border text-heading hover:bg-surface'} w-full py-4 shadow-lg shadow-black/5`}>
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
