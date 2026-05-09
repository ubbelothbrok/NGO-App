import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

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
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-contact">
            <a href="tel:+919434012856"><i className="fa-solid fa-phone" /> +91-9434012856</a>
            <a href="mailto:contact@bssgaria.org"><i className="fa-solid fa-envelope" /> contact@bssgaria.org</a>
            <span className="topbar-addr"><i className="fa-solid fa-location-dot" /> 58 Pranavananda Road, Garia, Kolkata-700084</span>
          </div>
          <div className="topbar-social">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube" /></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo">
            <div className="logo-img-placeholder">
              <i className="fa-solid fa-om" />
            </div>
            <div className="logo-text">
              <span className="logo-name">Bharat Sevashram Sangha</span>
              <span className="logo-sub">Garia, Kolkata — Est. 1917</span>
            </div>
          </Link>

          <nav className="navbar-links">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="nav-item has-dropdown">
                  <NavLink to={item.path} className={({ isActive }) => (isActive ? 'active' : '')}>
                    {item.label} <i className="fa-solid fa-chevron-down nav-arrow" />
                  </NavLink>
                  <div className="dropdown">
                    {item.children.map((child) => (
                      <Link key={child.label} to={child.path} className="dropdown-item">
                        <i className="fa-solid fa-angle-right" /> {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="navbar-actions">
            <Link to="/donate" className="btn btn-white donate-btn">
              <i className="fa-solid fa-heart" /> Donate Now
            </Link>
            <button
              className="mobile-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="mobile-nav-group">
                <button
                  className="mobile-nav-parent"
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <i
                    className={`fa-solid fa-chevron-${
                      mobileDropdown === item.label ? 'up' : 'down'
                    }`}
                  />
                </button>
                {mobileDropdown === item.label && (
                  <div className="mobile-dropdown">
                    {item.children.map((child) => (
                      <Link key={child.label} to={child.path} className="mobile-dropdown-item">
                        <i className="fa-solid fa-angle-right" /> {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={item.label} to={item.path} end={item.path === '/'}>
                {item.label}
              </NavLink>
            )
          )}
          <div className="mobile-cta">
            <Link to="/donate" className="btn btn-primary" style={{ width: '100%' }}>
              <i className="fa-solid fa-heart" /> Donate Now
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
