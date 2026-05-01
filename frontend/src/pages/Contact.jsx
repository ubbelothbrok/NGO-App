import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app this would POST to Django
    setStatus('Message sent successfully! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="page-enter" style={{ paddingTop: '100px' }}>
      <section className="section bg-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Get in Touch</span>
            <h2 className="section-title">Contact <span>Us</span></h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="grid-2">
            <div className="card" style={{ padding: '3rem' }}>
              <h3 style={{ marginBottom: '2rem' }}>Send a Message</h3>
              
              {status && (
                <div style={{ padding: '1rem', background: '#d4edda', color: '#155724', borderRadius: '8px', marginBottom: '1.5rem' }}>
                  {status}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Subject</label>
                  <input required type="text" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                  <textarea required rows="4" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', alignSelf: 'flex-start' }}>Send Message</button>
              </form>
            </div>

            <div className="card" style={{ padding: '3rem', background: 'var(--color-dark)', color: 'white' }}>
              <h3 style={{ marginBottom: '2rem', color: 'white' }}>Contact Information</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--grad-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'white', flexShrink: 0 }}>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Address</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>Bharat Sevashram Sangha<br/>58 Pranavananda Road, Garia,<br/>South 24 Paragana,<br/>Kolkata-700084</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--grad-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'white', flexShrink: 0 }}>
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Phone</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>+91-9434012856<br/>+91-9596943769</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--grad-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'white', flexShrink: 0 }}>
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Email</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>contact@bssgaria.org</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
