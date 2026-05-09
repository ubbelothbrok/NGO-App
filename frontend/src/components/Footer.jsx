import { Link } from 'react-router-dom'
import './Footer.css'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Activities', path: '/activities' },
  { label: 'Find Branches', path: '/branches' },
  { label: 'Photo Gallery', path: '/media' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Donate Now', path: '/donate' },
]

const activities = [
  'Education & Schools',
  'Healthcare Services',
  'Disaster Relief',
  'Spiritual Programs',
  'Youth Empowerment',
  'Food Distribution',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Col 1 — Brand */}
          <div className="footer-col footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon"><i className="fa-solid fa-om" /></div>
              <div>
                <span className="footer-logo-name">Bharat Sevashram Sangha</span>
                <span className="footer-logo-sub">Garia, Kolkata</span>
              </div>
            </div>
            <p className="footer-about">
              Founded in 1917 by Srimat Swami Pranavanandaji Maharaj — a philanthropic, charitable organisation dedicated to the service of humanity for over a century.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube" /></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.path}>
                    <i className="fa-solid fa-angle-right" /> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Activities */}
          <div className="footer-col">
            <h3 className="footer-title">Our Activities</h3>
            <ul className="footer-links">
              {activities.map((a) => (
                <li key={a}>
                  <Link to="/activities">
                    <i className="fa-solid fa-angle-right" /> {a}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="footer-col">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <i className="fa-solid fa-map-location-dot" />
                <span>58 Pranavananda Road, Garia, South 24 Paragana, Kolkata-700084</span>
              </li>
              <li>
                <i className="fa-solid fa-phone" />
                <span>+91-9434012856<br />+91-9596943769</span>
              </li>
              <li>
                <i className="fa-solid fa-envelope" />
                <a href="mailto:contact@bssgaria.org">contact@bssgaria.org</a>
              </li>
              <li>
                <i className="fa-solid fa-clock" />
                <span>Mon – Sat: 8:00 AM – 7:00 PM</span>
              </li>
            </ul>
            <Link to="/donate" className="btn btn-primary footer-donate-btn">
              <i className="fa-solid fa-heart" /> Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Bharat Sevashram Sangha Garia. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
