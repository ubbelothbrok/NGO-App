export default function Activities() {
  return (
    <div className="page-enter" style={{ paddingTop: '100px' }}>
      <section className="section bg-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Work</span>
            <h2 className="section-title">Activities & <span>Programs</span></h2>
            <div className="section-divider"></div>
            <p className="section-desc">Empowering communities through education, healthcare, and relief.</p>
          </div>
          
          <div className="grid-2">
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--color-saffron)', marginBottom: '1rem' }}>Education Program</h3>
              <p>Over 100 schools and training centers across India provide holistic education, moral values, and vocational skills. The Sangha supports students through scholarships, coaching, physical training, and spiritual learning in rural and underserved areas.</p>
              <ul style={{ marginTop: '1rem', color: 'var(--color-muted)' }}>
                <li><i className="fa-solid fa-check text-saffron"></i> Free Stay and Food Provided</li>
                <li><i className="fa-solid fa-check text-saffron"></i> Moral values and vocational training</li>
              </ul>
            </div>
            
            <div className="card" style={{ padding: '2rem' }}>
               <h3 style={{ color: 'var(--color-saffron)', marginBottom: '1rem' }}>Healthcare & Relief</h3>
               <p>We operate numerous charitable dispensaries and mobile medical units. In times of natural calamities, our monks and volunteers are often the first to arrive, providing langar seva, medical aid, and rebuilding efforts.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
