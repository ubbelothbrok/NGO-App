import { Link } from 'react-router-dom'
import './InnerPage.css'

const branches = [
  { name: 'Garia, Kolkata (HQ)', address: '58 Pranavananda Road, Garia, South 24 Paraganas, Kolkata-700084', phone: '+91-9434012856', email: 'contact@bssgaria.org', type: 'Headquarters' },
  { name: 'Rashbehari Avenue', address: '211 Rashbehari Avenue, Kolkata-700019, West Bengal', phone: '+91-9876543210', email: 'rashbehari@bss.org', type: 'Major Branch' },
  { name: 'Baruipur Ashram', address: 'Baruipur, South 24 Paraganas, West Bengal-743610', phone: '+91-9123456789', email: 'baruipur@bss.org', type: 'Ashram' },
  { name: 'Diamond Harbour', address: 'Diamond Harbour Road, South 24 Paraganas, West Bengal', phone: '+91-9234567890', email: 'diamondharbour@bss.org', type: 'Branch' },
  { name: 'Sonarpur Kendra', address: 'Sonarpur, South 24 Paraganas, West Bengal-700150', phone: '+91-9345678901', email: 'sonarpur@bss.org', type: 'Kendra' },
  { name: 'Jadavpur Branch', address: 'Jadavpur, Kolkata-700032, West Bengal', phone: '+91-9456789012', email: 'jadavpur@bss.org', type: 'Branch' },
]

const typeColors = {
  'Headquarters': { color: '#C62828', bg: '#FEF2F2' },
  'Major Branch': { color: '#1D4ED8', bg: '#EFF6FF' },
  'Ashram': { color: '#7C3AED', bg: '#F5F3FF' },
  'Branch': { color: '#059669', bg: '#ECFDF5' },
  'Kendra': { color: '#D97706', bg: '#FFFBEB' },
}

export default function Branches() {
  return (
    <div className="page-enter">
      <div className="page-hero">
        <div className="container">
          <h1>Our Branches</h1>
          <p>Find a Bharat Sevashram Sangha centre near you</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-chevron-right" />
            <span>Branches</span>
          </div>
        </div>
      </div>

      <section className="section bg-surface">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Locations</span>
            <h2 className="section-title" style={{ marginTop: '0.75rem' }}>BSS <span>Centres</span></h2>
            <div className="section-divider" />
            <p className="section-desc">With over 30 branches across India, we bring our services closer to communities in need.</p>
          </div>

          <div className="branches-grid">
            {branches.map((b) => {
              const tc = typeColors[b.type] || { color: '#374151', bg: '#F3F4F6' }
              return (
                <div key={b.name} className="branch-card card">
                  <div className="branch-header">
                    <div className="branch-icon">
                      <i className="fa-solid fa-building-columns" />
                    </div>
                    <div>
                      <span className="branch-type" style={{ background: tc.bg, color: tc.color }}>{b.type}</span>
                      <h3 className="branch-name">{b.name}</h3>
                    </div>
                  </div>
                  <ul className="branch-info">
                    <li>
                      <i className="fa-solid fa-map-location-dot" />
                      <span>{b.address}</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-phone" />
                      <a href={`tel:${b.phone}`}>{b.phone}</a>
                    </li>
                    <li>
                      <i className="fa-solid fa-envelope" />
                      <a href={`mailto:${b.email}`}>{b.email}</a>
                    </li>
                  </ul>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(b.address)}`} target="_blank" rel="noopener noreferrer" className="branch-map-btn">
                    <i className="fa-solid fa-map" /> View on Map
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-white" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <i className="fa-solid fa-map-location-dot" style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem', display: 'block' }} />
          <h2 style={{ marginBottom: '1rem' }}>Can't Find a Branch Near You?</h2>
          <p className="text-muted mb-md">Contact our main office and we'll help you find the nearest centre or connect with our volunteers in your area.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            <i className="fa-solid fa-phone" /> Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
