import { Link } from 'react-router-dom'
import './InnerPage.css'

export default function About() {
  return (
    <div className="page-enter">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>A century of selfless service to humanity</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-chevron-right" />
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* History Section */}
      <section className="section bg-white">
        <div className="container grid-2 align-center" style={{ gap: '4rem' }}>
          <div>
            <span className="section-tag">Our Heritage</span>
            <h2 className="section-title" style={{ marginTop: '0.75rem' }}>History & <span>Mission</span></h2>
            <div className="section-divider" style={{ margin: '1rem 0 1.5rem', marginLeft: 0 }} />
            <p className="text-muted mb-sm">
              The Bharat Sevashram Sangha was founded by <strong>Srimat Swami Pranavanandaji Maharaj</strong>, the great illustrious patriot and philanthropist, in the year 1917. The Garia branch is one of the thriving centres of the Sangha, situated at 58 Pranavananda Road, Garia, Kolkata-700084.
            </p>
            <p className="text-muted mb-sm">
              The Sangha is a philanthropic, charitable registered organisation worldwide dedicated to the service of humanity and service to the afflicted people for over 100 years.
            </p>
            <p className="text-muted mb-md">
              Bharat Sevashram Sangha is a non-profit organisation and depends entirely on the support and generosity of individuals, foundations, and corporate houses. The Sangha operates on a purely non-sectarian, non-communal, and non-political basis, irrespective of caste or creed.
            </p>
            <Link to="/activities" className="btn btn-primary">Our Activities <i className="fa-solid fa-arrow-right" /></Link>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80"
              alt="Bharat Sevashram Sangha"
              style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '12px', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section bg-surface">
        <div className="container grid-2 align-center" style={{ gap: '4rem' }}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=800&q=80"
              alt="Founder"
              style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '12px', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
          <div>
            <span className="section-tag">Our Inspiration</span>
            <h2 className="section-title" style={{ marginTop: '0.75rem' }}>The <span>Founder</span></h2>
            <div className="section-divider" style={{ margin: '1rem 0 1.5rem', marginLeft: 0 }} />
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Acharya Srimat Swami Pranavanandaji Maharaj</h3>
            <p className="text-muted mb-sm">
              Swami Pranavanandaji was an illustrious patriot, spiritual leader, and philanthropist who dedicated his entire life to the nation and its people. From a young age, he exhibited extraordinary spiritual prowess and a deep empathy for the suffering masses.
            </p>
            <p className="text-muted mb-md">
              He founded the Bharat Sevashram Sangha with the vision of building a strong, united, and culturally rooted society. His teachings emphasise self-discipline, manliness, and the supreme duty of selfless service to all human beings as a form of worship of the Divine.
            </p>
            <div className="quote-block">
              <i className="fa-solid fa-quote-left" />
              <p>"Service to man is service to God"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Five Point Code */}
      <section className="section bg-primary">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: 'var(--color-secondary)', background: 'rgba(255,143,0,0.15)', borderColor: 'rgba(255,143,0,0.3)' }}>Our Values</span>
            <h2 className="section-title text-white" style={{ marginTop: '0.75rem', color: 'white' }}>Five Point Code for <span style={{ color: 'var(--color-secondary)' }}>BSS Workers</span></h2>
            <div className="section-divider" style={{ background: 'rgba(255,255,255,0.4)' }} />
          </div>
          <div className="five-code-grid">
            {[
              { num: '01', title: 'Integrity', icon: 'fa-solid fa-shield-halved' },
              { num: '02', title: 'Loyalty to the Nation', icon: 'fa-solid fa-flag' },
              { num: '03', title: 'Selfless Service', icon: 'fa-solid fa-hands-holding-heart' },
              { num: '04', title: 'Peaceful Conduct', icon: 'fa-solid fa-dove' },
              { num: '05', title: 'Economic Living', icon: 'fa-solid fa-leaf' },
            ].map((item) => (
              <div key={item.num} className="code-card">
                <div className="code-num">{item.num}</div>
                <i className={item.icon} />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
