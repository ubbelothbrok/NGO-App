import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    id: 1,
    tag: 'Welcome to',
    title: 'Bharat Sevashram Sangha',
    titleAccent: 'Garia, Kolkata',
    subtitle: 'Founded by Acharya Srimat Swami Pranavanandaji Maharaj in 1917 — dedicated to the service of humanity irrespective of caste and creed.',
    cta: { label: 'Our Mission', path: '/about' },
    cta2: { label: 'Donate Now', path: '/donate' },
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1600&q=80',
  },
  {
    id: 2,
    tag: 'Education Program',
    title: 'Empowering Lives Through',
    titleAccent: 'Education',
    subtitle: 'Over 100 schools and training centers providing holistic education, moral values, and free stay across India.',
    cta: { label: 'Our Activities', path: '/activities' },
    cta2: { label: 'Learn More', path: '/about' },
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80',
  },
  {
    id: 3,
    tag: 'Healthcare & Relief',
    title: 'Compassionate Service to',
    titleAccent: 'The Afflicted',
    subtitle: 'Charitable dispensaries, mobile medical units, and immediate disaster relief — always first on the ground.',
    cta: { label: 'Our Services', path: '/activities' },
    cta2: { label: 'Find Branches', path: '/branches' },
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=80',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => goTo((prev) => (prev + 1) % slides.length), 7000)
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
    <section className="relative h-[92vh] min-h-[580px] max-h-[820px] overflow-hidden bg-gray-900" aria-label="Hero slider">
      {slides.map((slide, i) => (
        <div 
          key={slide.id} 
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center animate-ken-burns"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
          <div className="relative h-full container flex items-center">
            <div className={`max-w-3xl transition-all duration-700 transform ${i === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-lg">
                {slide.tag}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-heading font-extrabold leading-[1.1] mb-6 drop-shadow-md">
                {slide.title}<br />
                <span className="text-secondary block mt-1">{slide.titleAccent}</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl font-medium">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={slide.cta.path} className="btn bg-primary text-white hover:bg-primary-dark px-8 py-4 text-base">
                  {slide.cta.label} <i className="fa-solid fa-arrow-right ml-2 text-xs" />
                </Link>
                <Link to={slide.cta2.path} className="btn border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-base">
                  {slide.cta2.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 pointer-events-none z-20">
        <button 
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-primary hover:border-primary transition-all pointer-events-auto group"
          onClick={prev}
        >
          <i className="fa-solid fa-chevron-left group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button 
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-primary hover:border-primary transition-all pointer-events-auto group"
          onClick={next}
        >
          <i className="fa-solid fa-chevron-right group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-secondary shadow-lg' : 'w-2 bg-white/40 hover:bg-white/60'}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-4 z-20">
        <span className="[writing-mode:vertical-lr] text-white/50 text-[10px] uppercase tracking-widest font-bold">Scroll Down</span>
        <div className="w-[2px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-secondary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
