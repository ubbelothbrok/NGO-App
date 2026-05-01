import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1 */}
          <div className="footer-col">
            <h3 className="footer-title">Bharat Sevashram Sangha</h3>
            <p className="footer-text">
              Founded in 1917 by Srimat Swami Pranavanandaji Maharaj. A philanthropic, charitable registered organisation worldwide on service to the humanity for over 100 years.
            </p>
            <div className="footer-socials">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/about"><i className="fa-solid fa-angle-right"></i> About Us</Link></li>
              <li><Link to="/activities"><i className="fa-solid fa-angle-right"></i> Activities</Link></li>
              <li><Link to="/branches"><i className="fa-solid fa-angle-right"></i> Branches</Link></li>
              <li><Link to="/media"><i className="fa-solid fa-angle-right"></i> Media</Link></li>
              <li><Link to="/contact"><i className="fa-solid fa-angle-right"></i> Contact Us</Link></li>
              <li><Link to="/donate" style={{ color: 'var(--color-secondary)' }}><i className="fa-solid fa-angle-right"></i> Donate Now</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h3 className="footer-title">Contact Information</h3>
            <ul className="footer-contact">
              <li>
                <i className="fa-solid fa-map-marker-alt"></i>
                <span>58 Pranavananda Road, Garia, South 24 Paragana, Kolkata-700084</span>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <span>+91-9434012856<br />+91-9596943769</span>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <span>contact@bssgaria.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>Copyright &copy; 2025 Bharat Sevashram Sangha Garia. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
