import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const slides = [
  {
    id: 1,
    tag: 'Welcome to',
    title: 'Bharat Sevashram Sangha',
    titleAccent: 'Garia, Kolkata',
    subtitle: 'Founded by Acharya Srimat Swami Pranavanandaji Maharaj in 1917 — dedicated to the service of humanity irrespective of caste and creed.',
    cta: { label: 'Our Mission', path: '/about' },
    cta2: { label: 'Donate Now', path: '/donate' },
    bg: 'slide-1',
  },
  {
    id: 2,
    tag: 'Education Program',
    title: 'Empowering Lives Through',
    titleAccent: 'Education',
    subtitle: 'Over 100 schools and training centers providing holistic education, moral values, and free stay across India.',
    cta: { label: 'Our Activities', path: '/activities' },
    cta2: { label: 'Learn More', path: '/about' },
    bg: 'slide-2',
  },
  {
    id: 3,
    tag: 'Healthcare & Relief',
    title: 'Compassionate Service to',
    titleAccent: 'The Afflicted',
    subtitle: 'Charitable dispensaries, mobile medical units, and immediate disaster relief — always first on the ground.',
    cta: { label: 'Our Services', path: '/activities' },
    cta2: { label: 'Find Branches', path: '/branches' },
    bg: 'slide-3',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => goTo((prev) => (prev + 1) % slides.length), 6000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (fn) => {
    if (animating) return
    setAnimating(true)
    setCurrent(typeof fn === 'function' ? fn : fn)
    setTimeout(() => setAnimating(false), 700)
  }

  const prev = () => goTo((c) => (c - 1 + slides.length) % slides.length)
  const next = () => goTo((c) => (c + 1) % slides.length)

  return (
    <section className="hero" aria-label="Hero slider">
      {slides.map((slide, i) => (
        <div key={slide.id} className={`hero-slide ${i === current ? 'active' : ''}`}>
          <div className={`hero-bg ${slide.bg}`} />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-text-box">
              <span className="hero-tag">{slide.tag}</span>
              <h1 className="hero-title">
                {slide.title}<br />
                <span className="hero-accent">{slide.titleAccent}</span>
              </h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <div className="hero-actions">
                <Link to={slide.cta.path} className="btn btn-primary btn-lg">{slide.cta.label}</Link>
                <Link to={slide.cta2.path} className="btn btn-outline-white btn-lg">{slide.cta2.label}</Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next arrows */}
      <button className="hero-arrow hero-arrow-prev" onClick={prev} aria-label="Previous slide">
        <i className="fa-solid fa-chevron-left" />
      </button>
      <button className="hero-arrow hero-arrow-next" onClick={next} aria-label="Next slide">
        <i className="fa-solid fa-chevron-right" />
      </button>

      {/* Dots */}
      <div className="hero-nav">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint">
        <span>Scroll Down</span>
        <i className="fa-solid fa-chevron-down" />
      </div>
    </section>
  )
}
