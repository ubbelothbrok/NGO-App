import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: '/about',
    children: [
      { label: 'History & Mission', path: '/about' },
      { label: 'Our Activities', path: '/activities' },
      { label: 'Our Branches', path: '/branches' },
    ],
  },
  { label: 'Activities', path: '/activities' },
  { label: 'Branches', path: '/branches' },
  { label: 'Media', path: '/media' },
  { label: 'Contact Us', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    setMobileDropdown(null)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className={`bg-topbar text-gray-400 text-xs py-2 border-b border-white/5 transition-all duration-300 ${scrolled ? 'h-0 py-0 overflow-hidden border-none' : 'h-auto'}`}>
        <div className="container flex justify-between items-center">
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+919434012856" className="hover:text-white transition-colors flex items-center gap-2">
              <i className="fa-solid fa-phone text-primary" /> +91-9434012856
            </a>
            <a href="mailto:contact@bssgaria.org" className="hover:text-white transition-colors flex items-center gap-2">
              <i className="fa-solid fa-envelope text-primary" /> contact@bssgaria.org
            </a>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-primary" /> 58 Pranavananda Road, Garia, Kolkata
            </span>
          </div>
          <div className="flex gap-4 ml-auto md:ml-0">
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-facebook-f" /></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-youtube" /></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-twitter" /></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-instagram" /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`fixed left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'top-0 bg-primary/95 backdrop-blur-md shadow-lg py-2' : 'top-10 md:top-8 py-4 bg-primary'}`}>
        <div className="container flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-primary flex items-center justify-center text-xl md:text-2xl shadow-lg group-hover:scale-105 transition-transform">
              <i className="fa-solid fa-om" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-heading font-bold text-sm md:text-lg leading-tight uppercase tracking-wide">Bharat Sevashram Sangha</span>
              <span className="text-white/70 text-[10px] md:text-xs font-medium">Garia, Kolkata — Est. 1917</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group/drop py-2 px-3">
                  <NavLink 
                    to={item.path} 
                    className={({ isActive }) => `flex items-center gap-1.5 text-sm font-bold tracking-wide transition-colors ${isActive ? 'text-secondary' : 'text-white/90 hover:text-white'}`}
                  >
                    {item.label} <i className="fa-solid fa-chevron-down text-[10px] opacity-70 group-hover/drop:rotate-180 transition-transform" />
                  </NavLink>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-border opacity-0 invisible group-hover/drop:opacity-100 group-hover/drop:visible transition-all duration-300 transform translate-y-2 group-hover/drop:translate-y-0 p-2 overflow-hidden">
                    {item.children.map((child) => (
                      <Link 
                        key={child.label} 
                        to={child.path} 
                        className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-text hover:bg-surface hover:text-primary rounded-lg transition-all"
                      >
                        <i className="fa-solid fa-angle-right text-[10px] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" /> 
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => `py-2 px-4 text-sm font-bold tracking-wide transition-colors ${isActive ? 'text-secondary' : 'text-white/90 hover:text-white'}`}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/donate" className="hidden sm:flex btn bg-white text-primary hover:bg-gray-50 px-5 py-2 text-sm shadow-md">
              <i className="fa-solid fa-heart text-xs" /> Donate Now
            </Link>
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white text-xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full h-screen overflow-y-auto pb-32 bg-white z-[60] p-6 transition-transform duration-500 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-gray-100 py-1">
                  <button
                    className="w-full flex items-center justify-between py-3 text-lg font-bold text-heading"
                    onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <i className={`fa-solid fa-chevron-${mobileDropdown === item.label ? 'up' : 'down'} text-xs opacity-50`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === item.label ? 'max-h-60 opacity-100 mt-1 mb-4' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col gap-1 pl-4">
                      {item.children.map((child) => (
                        <Link key={child.label} to={child.path} className="py-2.5 text-base font-medium text-muted flex items-center gap-3">
                          <i className="fa-solid fa-angle-right text-xs text-primary" /> {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink 
                  key={item.label} 
                  to={item.path} 
                  end={item.path === '/'}
                  className={({ isActive }) => `block py-3 text-lg font-bold border-b border-gray-100 ${isActive ? 'text-primary' : 'text-heading'}`}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </div>
          <div className="mt-8">
            <Link to="/donate" className="btn btn-primary w-full py-4 text-lg">
              <i className="fa-solid fa-heart" /> Donate Now
            </Link>
          </div>
        </div>
      </header>
      {/* Spacer to prevent content jump */}
      <div className="h-[72px] md:h-[88px]" />
    </>
  )
}
