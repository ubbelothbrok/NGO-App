import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import './Home.css'

export default function Home() {
  return (
    <div className="page-enter">
      <Hero />

      {/* Welcome Section */}
      <section id="welcome" className="section bg-surface">
        <div className="container grid-2 align-center">
          <div className="welcome-img-wrapper animate-fade-up">
            <img 
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80" 
              alt="Bharat Sevashram Sangha Volunteers" 
              className="welcome-img"
            />
            <div className="welcome-badge">
              <span className="badge-year">100+</span>
              <span className="badge-text">Years of<br/>Service</span>
            </div>
          </div>
          
          <div className="welcome-content animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="section-tag">Welcome To</span>
            <h2 className="section-title">Bharat Sevashram <span>Sangha</span></h2>
            <div className="section-divider" style={{ margin: '1rem 0 1.5rem', marginLeft: 0 }}></div>
            
            <p className="text-muted mb-sm" style={{ fontSize: '1.1rem' }}>
              Founded by <strong>Acharya Srimat Swami Pranavanandaji Maharaj</strong> in 1917, we are a philanthropic, charitable registered organisation dedicated to the service of humanity worldwide.
            </p>
            <p className="text-muted mb-md">
              For over a century, the Sangha has worked tirelessly to uplift the afflicted, provide education to the underprivileged, and offer healthcare and relief during natural calamities. We operate purely on a non-sectarian, non-communal basis, serving everyone irrespective of caste or creed.
            </p>
            
            <ul className="welcome-list mb-md">
              <li><i className="fa-solid fa-check text-primary"></i> Operating 100+ schools and training centers</li>
              <li><i className="fa-solid fa-check text-primary"></i> Immediate response during natural disasters</li>
              <li><i className="fa-solid fa-check text-primary"></i> Running charitable hospitals & dispensaries</li>
              <li><i className="fa-solid fa-check text-primary"></i> Empowering youth through moral education</li>
            </ul>
            
            <Link to="/about" className="btn btn-primary">
              Read Our Full History <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section bg-white">
        <div className="container grid-2 align-center" style={{ gap: '4rem' }}>
          <div className="animate-fade-up">
            <span className="section-tag">Our Inspiration</span>
            <h2 className="section-title">The Founder <span>Acharya</span></h2>
            <div className="section-divider" style={{ margin: '1rem 0 1.5rem', marginLeft: 0 }}></div>
            
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Acharya Srimat Swami Pranavanandaji Maharaj</h3>
            <p className="text-muted mb-sm">
              Swami Pranavanandaji was an illustrious patriot, spiritual leader, and philanthropist who dedicated his life to the nation and its people. From a young age, he exhibited extraordinary spiritual prowess and a deep empathy for the suffering masses.
            </p>
            <p className="text-muted mb-md">
              He founded the Bharat Sevashram Sangha with the vision of building a strong, united, and culturally rooted society. His teachings emphasize self-discipline, manliness, and the supreme duty of selfless service. He envisioned an organization of dedicated monks and volunteers who would be the first to respond to any national crisis.
            </p>
          </div>
          <div className="founder-img-container animate-fade-up" style={{ animationDelay: '0.2s' }}>
             <img 
               src="https://images.unsplash.com/photo-1544883626-d6e2e505500e?w=800&q=80" 
               alt="Spiritual Leadership" 
               className="founder-img"
               style={{ borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', width: '100%', height: '400px', objectFit: 'cover' }}
             />
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Join Hands</span>
            <h2 className="section-title">How You Can <span>Help</span></h2>
            <div className="section-divider"></div>
            <p className="text-muted" style={{ marginTop: '1.5rem', maxWidth: '600px', margin: '1.5rem auto 0' }}>
              We depend entirely on the generosity of individuals, foundations, and corporate houses to continue our century-long mission of service.
            </p>
          </div>
          
          <div className="grid-3 text-center">
            <div className="card" style={{ padding: '2.5rem 2rem' }}>
              <i className="fa-solid fa-hand-holding-dollar" style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}></i>
              <h3 style={{ marginBottom: '1rem' }}>Donate</h3>
              <p className="text-muted mb-md">Your financial contributions directly fund our schools, hospitals, and disaster relief operations. Every rupee counts in saving a life.</p>
              <Link to="/donate" className="btn btn-primary" style={{ width: '100%' }}>Make a Donation</Link>
            </div>
            <div className="card" style={{ padding: '2.5rem 2rem' }}>
              <i className="fa-solid fa-users" style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}></i>
              <h3 style={{ marginBottom: '1rem' }}>Volunteer</h3>
              <p className="text-muted mb-md">Join our dedicated team of volunteers. Donate your time and skills at our centers or during emergency relief operations.</p>
              <Link to="/contact" className="btn btn-white" style={{ border: '1px solid var(--color-primary)', width: '100%' }}>Become a Volunteer</Link>
            </div>
            <div className="card" style={{ padding: '2.5rem 2rem' }}>
              <i className="fa-solid fa-bullhorn" style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}></i>
              <h3 style={{ marginBottom: '1rem' }}>Spread the Word</h3>
              <p className="text-muted mb-md">Follow us on social media and share our stories. Raising awareness helps us reach more people who can support our cause.</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <a href="#" style={{ fontSize: '1.5rem', color: 'var(--color-text)' }}><i className="fab fa-facebook"></i></a>
                <a href="#" style={{ fontSize: '1.5rem', color: 'var(--color-text)' }}><i className="fab fa-twitter"></i></a>
                <a href="#" style={{ fontSize: '1.5rem', color: 'var(--color-text)' }}><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Gallery Preview */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Visuals</span>
            <h2 className="section-title">Impact in <span>Action</span></h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="grid-4">
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&q=80" alt="Relief work" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
            <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&q=80" alt="Community" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
            <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&q=80" alt="Education" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
            <img src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?w=500&q=80" alt="Healthcare" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/media" className="btn btn-primary">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* Sangha Vani Section */}
      <section className="section bg-dark text-white" style={{ backgroundColor: '#1a202c' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: 'var(--color-secondary)' }}>Divine Messages</span>
            <h2 className="section-title text-white" style={{ color: 'white' }}>Shri Shri Sangha <span>Vani</span></h2>
            <div className="section-divider" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
            <p className="text-white" style={{ opacity: 0.8, marginTop: '1.5rem' }}>
              Ten divine messages of Acharya Srimat Swami Pranavanandaji Maharaj.
            </p>
          </div>

          <div className="grid-3 vani-grid">
            {[
              { q: 'What are Real Assets?', a: 'Self-confidence, Self-reliance and Self-respect' },
              { q: 'What are Real Friends?', a: 'Energy, Enthusiasm and Perseverance' },
              { q: 'What is the Goal?', a: 'Self Realization, Universal Emancipation' },
              { q: 'What is Religion?', a: 'Self-sacrifice, Self-abnegation, Self-Discipline, Adherence to truth and Continence' },
              { q: 'What are Real Virtues?', a: 'Heroism, Virility, Manliness and Aspiration for emancipation' },
              { q: 'What are Real Source of Strength?', a: 'Patience, Fortitude and Endurance' },
            ].map((vani, i) => (
              <div key={i} className="vani-card animate-fade-up" style={{ animationDelay: `${i * 0.1}s`, backgroundColor: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h4 className="vani-q" style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>{vani.q}</h4>
                <p className="vani-a" style={{ color: 'rgba(255,255,255,0.8)' }}>{vani.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
