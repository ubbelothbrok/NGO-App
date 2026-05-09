import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import './Home.css'

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

function StatCard({ icon, end, suffix, label, delay }) {
  const [count, ref] = useCounter(end)
  return (
    <div className="stat-card" ref={ref} style={{ animationDelay: delay }}>
      <div className="stat-icon"><i className={icon} /></div>
      <div className="stat-number">{count.toLocaleString()}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

const programs = [
  { icon: 'fa-solid fa-graduation-cap', title: 'Education', color: '#1D4ED8', bg: '#EFF6FF', desc: 'Over 100 schools and training centers providing holistic education, moral values, and free stay for students from underprivileged backgrounds.', link: '/activities' },
  { icon: 'fa-solid fa-heart-pulse', title: 'Healthcare', color: '#059669', bg: '#ECFDF5', desc: 'Charitable dispensaries, mobile medical camps, and free healthcare services reaching thousands of patients annually.', link: '/activities' },
  { icon: 'fa-solid fa-hands-helping', title: 'Disaster Relief', color: '#D97706', bg: '#FFFBEB', desc: 'Our monks and volunteers are first responders during natural calamities — floods, cyclones, earthquakes — providing immediate aid.', link: '/activities' },
  { icon: 'fa-solid fa-om', title: 'Spiritual Growth', color: '#7C3AED', bg: '#F5F3FF', desc: 'Regular spiritual discourses, yoga camps, and cultural programs that nurture the inner life of our community members.', link: '/activities' },
]

const events = [
  { date: { day: '01', month: 'Jan', year: '2025' }, title: 'Memorial Event in Honor of Dr. Manmohan Singh', desc: 'Bharat Sevashram Sangha hosted a heartfelt memorial to honor the life and legacy of the former Prime Minister.', category: 'Event' },
  { date: { day: '20', month: 'Feb', year: '2024' }, title: 'Annual Seva Diwas Celebration', desc: 'Commemorating our founding with free medical camps, food distribution, and cultural programs across all branches.', category: 'Celebration' },
  { date: { day: '15', month: 'Aug', year: '2024' }, title: 'Independence Day Rally & Youth Program', desc: 'A grand rally followed by motivational talks, physical training demonstrations, and patriotic cultural events.', category: 'National Event' },
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
    <div className="page-enter">
      <Hero />

      {/* ── Quick Links Strip ── */}
      <section className="quick-links-strip">
        <div className="container">
          <div className="quick-links-grid">
            {quickLinks.map((ql) => (
              <Link key={ql.label} to={ql.path} className="quick-link-item">
                <i className={ql.icon} />
                <span>{ql.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Welcome Section ── */}
      <section className="section bg-white">
        <div className="container grid-2 align-center" style={{ gap: '4rem' }}>
          <div className="welcome-img-wrapper animate-fade-up">
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900&q=80"
              alt="Bharat Sevashram Sangha Volunteers"
              className="welcome-img"
            />
            <div className="welcome-badge">
              <span className="badge-year">100+</span>
              <span className="badge-text">Years of<br />Service</span>
            </div>
          </div>
          <div className="welcome-content animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="section-tag">Welcome To</span>
            <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
              Bharat Sevashram <span>Sangha</span>
            </h2>
            <div className="section-divider" style={{ margin: '1rem 0 1.5rem', marginLeft: 0 }} />
            <p className="text-muted mb-sm" style={{ fontSize: '1.05rem' }}>
              Founded by <strong>Acharya Srimat Swami Pranavanandaji Maharaj</strong> in 1917, we are a philanthropic, charitable registered organisation dedicated to the service of humanity worldwide.
            </p>
            <p className="text-muted mb-md">
              For over a century, the Sangha has worked tirelessly to uplift the afflicted, provide education to the underprivileged, and offer healthcare and relief during natural calamities — operating on a purely non-sectarian, non-communal basis.
            </p>
            <ul className="welcome-list mb-md">
              <li><i className="fa-solid fa-check" />Operating 100+ schools and training centers</li>
              <li><i className="fa-solid fa-check" />Immediate response during natural disasters</li>
              <li><i className="fa-solid fa-check" />Running charitable hospitals & dispensaries</li>
              <li><i className="fa-solid fa-check" />Empowering youth through moral education</li>
            </ul>
            <Link to="/about" className="btn btn-primary">
              Read Our Full Story <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <StatCard icon="fa-solid fa-users" end={50000} suffix="+" label="Lives Impacted" delay="0s" />
            <StatCard icon="fa-solid fa-school" end={100} suffix="+" label="Schools & Centers" delay="0.1s" />
            <StatCard icon="fa-solid fa-map-pin" end={30} suffix="+" label="Branch Offices" delay="0.2s" />
            <StatCard icon="fa-solid fa-calendar-check" end={107} suffix="" label="Years of Service" delay="0.3s" />
          </div>
        </div>
      </section>

      {/* ── Programs / Activities ── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title" style={{ marginTop: '0.75rem' }}>Our Core <span>Programs</span></h2>
            <div className="section-divider" />
            <p className="section-desc">We serve humanity across four pillars — education, healthcare, disaster relief, and spiritual upliftment.</p>
          </div>
          <div className="grid-4 programs-grid">
            {programs.map((p) => (
              <div key={p.title} className="program-card">
                <div className="program-icon" style={{ background: p.bg, color: p.color }}>
                  <i className={p.icon} />
                </div>
                <h3 className="program-title">{p.title}</h3>
                <p className="program-desc">{p.desc}</p>
                <Link to={p.link} className="program-link">
                  Learn more <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Events ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Stay Updated</span>
            <h2 className="section-title" style={{ marginTop: '0.75rem' }}>Recent <span>Events</span></h2>
            <div className="section-divider" />
          </div>
          <div className="events-grid">
            {events.map((ev, i) => (
              <div key={i} className="event-card">
                <div className="event-date">
                  <span className="event-day">{ev.date.day}</span>
                  <span className="event-month">{ev.date.month}</span>
                  <span className="event-year">{ev.date.year}</span>
                </div>
                <div className="event-body">
                  <span className="event-category">{ev.category}</span>
                  <h3 className="event-title">{ev.title}</h3>
                  <p className="event-desc">{ev.desc}</p>
                  <a href="#" className="event-read-more">Read More <i className="fa-solid fa-arrow-right" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="cta-banner-overlay" />
        <div className="container cta-inner">
          <div className="cta-text">
            <h2>"Service to man is service to God"</h2>
            <p>Join hands with Bharat Sevashram Sangha and be part of a century-old mission of selfless service to humanity.</p>
          </div>
          <div className="cta-actions">
            <Link to="/donate" className="btn btn-white">
              <i className="fa-solid fa-heart" /> Donate Now
            </Link>
            <Link to="/contact" className="btn btn-outline-white">
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Gallery Preview ── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Visuals</span>
            <h2 className="section-title" style={{ marginTop: '0.75rem' }}>Impact in <span>Action</span></h2>
            <div className="section-divider" />
          </div>
          <div className="gallery-grid">
            <div className="gallery-item gallery-item-large">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80" alt="Relief work" />
              <div className="gallery-overlay"><span>Relief Work</span></div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&q=80" alt="Community" />
              <div className="gallery-overlay"><span>Community</span></div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&q=80" alt="Education" />
              <div className="gallery-overlay"><span>Education</span></div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?w=500&q=80" alt="Healthcare" />
              <div className="gallery-overlay"><span>Healthcare</span></div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?w=500&q=80" alt="Volunteers" />
              <div className="gallery-overlay"><span>Volunteers</span></div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/media" className="btn btn-outline">View Full Gallery <i className="fa-solid fa-images" /></Link>
          </div>
        </div>
      </section>

      {/* ── Sangha Vani ── */}
      <section className="section bg-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: 'var(--color-secondary)', background: 'rgba(255,143,0,0.1)', borderColor: 'rgba(255,143,0,0.3)' }}>Divine Messages</span>
            <h2 className="section-title text-white" style={{ marginTop: '0.75rem', color: 'white' }}>
              Shri Shri Sangha <span style={{ color: 'var(--color-secondary)' }}>Vani</span>
            </h2>
            <div className="section-divider" style={{ background: 'linear-gradient(90deg, var(--color-secondary), var(--color-primary))' }} />
            <p className="section-desc" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Ten divine messages of Acharya Srimat Swami Pranavanandaji Maharaj.
            </p>
          </div>
          <div className="grid-3">
            {vaniItems.map((v, i) => (
              <div key={i} className="vani-card animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <h4 className="vani-q">{v.q}</h4>
                <p className="vani-a">{v.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ways to Help ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Join Hands</span>
            <h2 className="section-title" style={{ marginTop: '0.75rem' }}>How You Can <span>Help</span></h2>
            <div className="section-divider" />
            <p className="section-desc">We depend on the generosity of individuals and organizations to continue our century-long mission of service.</p>
          </div>
          <div className="grid-3">
            {[
              { icon: 'fa-solid fa-hand-holding-dollar', title: 'Donate', desc: 'Your financial contributions directly fund our schools, hospitals, and disaster relief operations. Every rupee saves a life.', cta: 'Make a Donation', path: '/donate', primary: true },
              { icon: 'fa-solid fa-users', title: 'Volunteer', desc: 'Donate your time and skills at our centers or during emergency relief operations across India.', cta: 'Become a Volunteer', path: '/contact', primary: false },
              { icon: 'fa-solid fa-bullhorn', title: 'Spread the Word', desc: 'Follow and share our stories on social media. Raising awareness helps us reach more people who can support our cause.', cta: 'Follow Us', path: '/media', primary: false },
            ].map((item) => (
              <div key={item.title} className="help-card card">
                <div className="help-icon">
                  <i className={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
                <Link to={item.path} className={`btn ${item.primary ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', marginTop: '1.5rem' }}>
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
