import { useState } from 'react'
import { Link } from 'react-router-dom'
import './InnerPage.css'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setStatus('success')
      setLoading(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 1000)
  }

  return (
    <div className="page-enter">
      <div className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you — reach out anytime</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-chevron-right" />
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      {/* Info strip */}
      <div className="contact-strip">
        <div className="container contact-strip-grid">
          <a href="tel:+919434012856" className="contact-strip-item">
            <div className="cs-icon"><i className="fa-solid fa-phone" /></div>
            <div><span className="cs-label">Call Us</span><span className="cs-value">+91-9434012856</span></div>
          </a>
          <a href="mailto:contact@bssgaria.org" className="contact-strip-item">
            <div className="cs-icon"><i className="fa-solid fa-envelope" /></div>
            <div><span className="cs-label">Email Us</span><span className="cs-value">contact@bssgaria.org</span></div>
          </a>
          <div className="contact-strip-item">
            <div className="cs-icon"><i className="fa-solid fa-location-dot" /></div>
            <div><span className="cs-label">Visit Us</span><span className="cs-value">58 Pranavananda Road, Garia, Kolkata</span></div>
          </div>
          <div className="contact-strip-item">
            <div className="cs-icon"><i className="fa-solid fa-clock" /></div>
            <div><span className="cs-label">Open Hours</span><span className="cs-value">Mon–Sat: 8:00 AM – 7:00 PM</span></div>
          </div>
        </div>
      </div>

      <section className="section bg-surface">
        <div className="container contact-layout">
          {/* Form */}
          <div className="contact-form-card card">
            <h2 className="contact-form-title">Send Us a Message</h2>
            <p className="text-muted mb-md" style={{ fontSize: '0.95rem' }}>Fill out the form and our team will get back to you within 24 hours.</p>

            {status === 'success' && (
              <div className="form-success">
                <i className="fa-solid fa-circle-check" />
                <span>Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name <span>*</span></label>
                  <input id="name" name="name" type="text" required placeholder="Your full name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address <span>*</span></label>
                  <input id="email" name="email" type="email" required placeholder="your@email.com" value={formData.email} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="+91-XXXXXXXXXX" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject <span>*</span></label>
                  <input id="subject" name="subject" type="text" required placeholder="How can we help?" value={formData.subject} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message <span>*</span></label>
                <textarea id="message" name="message" rows="5" required placeholder="Tell us more about your inquiry..." value={formData.message} onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" disabled={loading} style={{ alignSelf: 'flex-start' }}>
                {loading ? <><i className="fa-solid fa-spinner fa-spin" /> Sending...</> : <><i className="fa-solid fa-paper-plane" /> Send Message</>}
              </button>
            </form>
          </div>

          {/* Info panel */}
          <div className="contact-info-panel">
            <div className="info-panel-top">
              <h3>Bharat Sevashram Sangha</h3>
              <p>Garia Branch, Kolkata</p>
            </div>
            <ul className="info-panel-list">
              <li>
                <div className="ip-icon"><i className="fa-solid fa-location-dot" /></div>
                <div>
                  <strong>Address</strong>
                  <span>58 Pranavananda Road, Garia,<br />South 24 Paraganas,<br />Kolkata-700084, West Bengal</span>
                </div>
              </li>
              <li>
                <div className="ip-icon"><i className="fa-solid fa-phone" /></div>
                <div>
                  <strong>Phone</strong>
                  <span>+91-9434012856<br />+91-9596943769</span>
                </div>
              </li>
              <li>
                <div className="ip-icon"><i className="fa-solid fa-envelope" /></div>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:contact@bssgaria.org">contact@bssgaria.org</a>
                </div>
              </li>
            </ul>
            <div className="info-panel-social">
              <p>Follow Us</p>
              <div className="ip-social">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-youtube" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
