export default function About() {
  return (
    <div className="page-enter" style={{ paddingTop: '100px' }}>
      <section className="section bg-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">History & <span>Mission</span></h2>
            <div className="section-divider"></div>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
            <p className="mb-md">The Bharat Sevashram Sangha founded by Srimat Swami Pranavanandaji Maharaj, the great illustrious patriot and philanthropist in the year of 1917. The headquarters of the Sangha is situated at 211, Rashbehari Avenue, Kolkata-700019, West Bengal.</p>
            <p className="mb-md">The Sangha is a philanthropic, charitable registered organisation worldwide on service to the humanity and service to the afflicted people for 100 years.</p>
            <p>Bharat Sevashram Sangha is a non-profit organisation and depends entirely on the support and generosity of Individuals, Foundation and Corporate Houses. The Sangha is purely a non-sectarian, non-communal and non-political character, irrespective of their caste and creed.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
