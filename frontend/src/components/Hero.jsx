import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const slides = [
  {
    id: 1,
    tag: 'Welcome to',
    title: 'Bharat Sevashram Sangha',
    titleAccent: 'Garia, Kolkata',
    subtitle: 'Founded by Acharya Srimat Swami Pranavanandaji Maharaj in 1917, dedicated to the service of humanity irrespective of caste and creed.',
    cta: { label: 'Join Our Mission', path: '/about' },
    cta2: { label: 'Donate Now', path: '/donate' },
    bg: 'slide-1',
  },
  {
    id: 2,
    tag: 'Education Program',
    title: 'Empowering Through',
    titleAccent: 'Education',
    subtitle: 'Over 100 schools and training centers providing holistic education, moral values, and free stay across India.',
    cta: { label: 'Read More', path: '/activities' },
    cta2: { label: 'Register Now', path: '/activities' },
    bg: 'slide-2',
  },
  {
    id: 3,
    tag: 'Healthcare & Relief',
    title: 'Service to',
    titleAccent: 'The Afflicted',
    subtitle: 'Charitable dispensaries, mobile medical units, and disaster relief work across our worldwide branches.',
    cta: { label: 'Our Services', path: '/activities' },
    cta2: { label: 'Find Branches', path: '/branches' },
    bg: 'slide-3',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero">
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
                <Link to={slide.cta.path} className="btn btn-primary">
                  {slide.cta.label}
                </Link>
                <Link to={slide.cta2.path} className="btn btn-white">
                  {slide.cta2.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide Navigation */}
      <div className="hero-nav">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  )
}
