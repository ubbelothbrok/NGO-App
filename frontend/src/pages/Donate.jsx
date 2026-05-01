export default function Donate() {
  return (
    <div className="page-enter" style={{ paddingTop: '100px' }}>
      <section className="section bg-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Support Us</span>
            <h2 className="section-title">Make a <span>Donation</span></h2>
            <div className="section-divider"></div>
            <p className="section-desc">Your contribution helps us continue our mission to serve humanity.</p>
          </div>
          
          <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem', textAlign: 'center' }}>
            <i className="fa-solid fa-hand-holding-heart" style={{ fontSize: '4rem', color: 'var(--color-saffron)', marginBottom: '1.5rem' }}></i>
            <h3 style={{ marginBottom: '1rem' }}>Bank Transfer Details</h3>
            <p style={{ color: 'var(--color-muted)', marginBottom: '2rem' }}>Please contact us via email or phone for direct bank transfer details to ensure your donation is properly tracked and receipted.</p>
            
            <div style={{ background: 'var(--color-warm-gray)', padding: '1.5rem', borderRadius: '8px', textAlign: 'left', marginBottom: '2rem' }}>
              <p><strong>Email:</strong> contact@bssgaria.org</p>
              <p><strong>Phone:</strong> +91-9434012856</p>
            </div>
            
            <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)' }}>
              All donations to Bharat Sevashram Sangha are exempt from Income Tax under Section 80G of the IT Act.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
