import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-contact">
            <span><i className="fa-solid fa-phone"></i> +91-9434012856</span>
            <span><i className="fa-solid fa-envelope"></i> contact@bssgaria.org</span>
          </div>
          <div className="topbar-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="navbar">
        <div className="container navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <div className="logo-img-placeholder">
              <i className="fa-solid fa-om"></i>
            </div>
            <div className="logo-text">
              <span className="logo-name">Bharat Sevashram Sangha</span>
              <span className="logo-sub">Garia, Kolkata</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar-links">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
            <NavLink to="/activities" className={({ isActive }) => isActive ? 'active' : ''}>Activities</NavLink>
            <NavLink to="/branches" className={({ isActive }) => isActive ? 'active' : ''}>Branches</NavLink>
            <NavLink to="/media" className={({ isActive }) => isActive ? 'active' : ''}>Media</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="navbar-actions">
            <Link to="/donate" className="btn btn-white donate-btn">
              Donate Now
            </Link>
            <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/activities">Activities</NavLink>
            <NavLink to="/branches">Branches</NavLink>
            <NavLink to="/media">Media</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <div style={{ padding: '1rem' }}>
              <Link to="/donate" className="btn btn-white" style={{ width: '100%' }}>Donate Now</Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
