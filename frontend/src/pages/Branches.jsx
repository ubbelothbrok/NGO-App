export default function Branches() {
  return (
    <div className="page-enter" style={{ paddingTop: '100px' }}>
      <section className="section bg-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Network</span>
            <h2 className="section-title">Global <span>Branches</span></h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="grid-2">
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--color-saffron)', marginBottom: '1.5rem' }}>Branches in India</h3>
              <p style={{ lineHeight: '1.8', color: 'var(--color-muted)' }}>
                Vrindavan, Gaya, Puri, Allahabad, Haridwar, Kedarnath, Kurukshetra, Gorakhpur, New Delhi, Nainital, Mumbai, Hyderabad, Surat, Dwarka, Ahmedabad, Jamshedpur, Guwahati, Shillong, Rameswaram, Kanyakumari, Chennai, Bengaluru, Jabalpur, Varanasi, Port Blair, Nabadwip, Gangasagar, Tarapith, Raipur, Amarkantak
              </p>
            </div>
            
            <div className="card" style={{ padding: '2rem' }}>
               <h3 style={{ color: 'var(--color-saffron)', marginBottom: '1.5rem' }}>Worldwide Branches</h3>
               <p style={{ lineHeight: '1.8', color: 'var(--color-muted)' }}>
                London (UK), New York, New Jersey (USA), Toronto (Canada), Sofia & Plovdiv (Bulgaria), Trinidad & Tobago, Fiji, Nepal, Dhaka (Bangladesh)
               </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
