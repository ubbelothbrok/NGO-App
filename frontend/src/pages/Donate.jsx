import { useState } from 'react'
import { Link } from 'react-router-dom'
import './InnerPage.css'
import './Donate.css'

const amounts = [100, 250, 500, 1000, 2500, 5000]

const causes = [
  { id: 'education', icon: 'fa-solid fa-graduation-cap', label: 'Education', color: '#1D4ED8' },
  { id: 'healthcare', icon: 'fa-solid fa-heart-pulse', label: 'Healthcare', color: '#059669' },
  { id: 'disaster', icon: 'fa-solid fa-truck-fast', label: 'Disaster Relief', color: '#DC2626' },
  { id: 'general', icon: 'fa-solid fa-hands-holding-heart', label: 'General Fund', color: '#7C3AED' },
]

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(500)
  const [customAmount, setCustomAmount] = useState('')
  const [selectedCause, setSelectedCause] = useState('general')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page-enter">
      <div className="page-hero">
        <div className="container">
          <h1>Support Our Mission</h1>
          <p>Your generosity fuels a century of selfless service</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-chevron-right" />
            <span>Donate</span>
          </div>
        </div>
      </div>

      <section className="section bg-surface">
        <div className="container donate-layout">
          {/* Donation form */}
          <div className="donate-form-card card">
            {submitted ? (
              <div className="donate-success">
                <div className="donate-success-icon"><i className="fa-solid fa-heart" /></div>
                <h2>Thank You, {name}!</h2>
                <p>We've received your donation request of <strong>₹{finalAmount.toLocaleString()}</strong>. Our team will contact you at <strong>{email}</strong> with payment details.</p>
                <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--color-muted)' }}>All donations are eligible for 80G tax exemption.</p>
                <button className="btn btn-primary" style={{ marginTop: '2rem' }} onClick={() => { setSubmitted(false); setName(''); setEmail(''); setCustomAmount(''); setSelectedAmount(500); }}>
                  Make Another Donation
                </button>
              </div>
            ) : (
              <>
                <h2 className="donate-title">Make a Donation</h2>
                <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>Choose a cause and amount that resonates with you.</p>

                <form onSubmit={handleSubmit} className="donate-form">
                  {/* Choose cause */}
                  <div className="donate-section-label">Select a Cause</div>
                  <div className="causes-grid">
                    {causes.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        className={`cause-btn ${selectedCause === c.id ? 'active' : ''}`}
                        onClick={() => setSelectedCause(c.id)}
                        style={{ '--cause-color': c.color }}
                      >
                        <i className={c.icon} />
                        <span>{c.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Choose amount */}
                  <div className="donate-section-label">Select Amount (₹)</div>
                  <div className="amounts-grid">
                    {amounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        className={`amount-btn ${selectedAmount === amt && !customAmount ? 'active' : ''}`}
                        onClick={() => { setSelectedAmount(amt); setCustomAmount('') }}
                      >
                        ₹{amt.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="custom-amount">
                    <span className="rupee-symbol">₹</span>
                    <input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null) }}
                      min="10"
                    />
                  </div>

                  {/* Donor info */}
                  <div className="donate-section-label">Your Information</div>
                  <div className="form-row-donate">
                    <div className="form-group">
                      <label>Full Name <span style={{ color: 'var(--color-primary)' }}>*</span></label>
                      <input type="text" required placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label>Email Address <span style={{ color: 'var(--color-primary)' }}>*</span></label>
                      <input type="email" required placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg donate-submit">
                    <i className="fa-solid fa-heart" /> Donate ₹{finalAmount ? finalAmount.toLocaleString() : '—'} Now
                  </button>
                  <p className="donate-note"><i className="fa-solid fa-shield-halved" /> Secure & 80G tax-exempt. We'll send you bank details via email.</p>
                </form>
              </>
            )}
          </div>

          {/* Info sidebar */}
          <div className="donate-sidebar">
            <div className="donate-impact card">
              <h3>Your Impact</h3>
              <ul className="impact-list">
                {[
                  { amt: '₹100', desc: 'Provides a meal to 5 underprivileged children' },
                  { amt: '₹500', desc: 'Covers one month of school supplies for a student' },
                  { amt: '₹1,000', desc: 'Funds a free medical checkup camp for 10 people' },
                  { amt: '₹5,000', desc: "Sponsors a student's education for an entire year" },
                ].map((item) => (
                  <li key={item.amt}>
                    <span className="impact-amt">{item.amt}</span>
                    <span className="impact-desc">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="donate-bank card">
              <h4><i className="fa-solid fa-university" /> Bank Transfer</h4>
              <p>For direct bank transfers, please contact us:</p>
              <div className="bank-detail"><strong>Email:</strong> contact@bssgaria.org</div>
              <div className="bank-detail"><strong>Phone:</strong> +91-9434012856</div>
              <p className="bank-note">All donations are exempt from Income Tax under Section 80G of the IT Act.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
