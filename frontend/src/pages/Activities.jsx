import { Link } from 'react-router-dom'
import './InnerPage.css'

const activities = [
  {
    icon: 'fa-solid fa-graduation-cap',
    title: 'Education Program',
    color: '#1D4ED8',
    bg: '#EFF6FF',
    desc: 'Over 100 schools and training centers providing holistic education, moral values, vocational skills, and free stay for students from underprivileged backgrounds across rural India.',
    points: ['Free Stay and Food Provided', 'Moral values and spiritual training', 'Vocational and skill development', 'Scholarship support for deserving students'],
  },
  {
    icon: 'fa-solid fa-heart-pulse',
    title: 'Healthcare Services',
    color: '#059669',
    bg: '#ECFDF5',
    desc: 'Charitable dispensaries, mobile medical camps, and free healthcare services reaching thousands of patients annually in underserved areas.',
    points: ['Free outpatient clinics', 'Mobile medical camps in rural areas', 'Blood donation drives', 'Health awareness campaigns'],
  },
  {
    icon: 'fa-solid fa-truck-fast',
    title: 'Disaster Relief',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Our monks and volunteers are among the first responders during natural calamities — floods, cyclones, and earthquakes — providing immediate aid and long-term rebuilding support.',
    points: ['Emergency food and shelter', 'Medical aid in disaster zones', 'Rebuilding and rehabilitation', 'Flood and cyclone response'],
  },
  {
    icon: 'fa-solid fa-om',
    title: 'Spiritual Programs',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Regular spiritual discourses, yoga camps, meditation retreats, and cultural programs that nurture the inner life and moral character of community members.',
    points: ['Weekly satsangs and discourses', 'Yoga and meditation camps', 'Festive cultural celebrations', 'Youth spiritual workshops'],
  },
  {
    icon: 'fa-solid fa-wheat-awn',
    title: 'Food Distribution',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Daily langar (community kitchen) serves hundreds of meals to the poor, homeless, and pilgrims. During festivals, large-scale food distribution drives reach thousands.',
    points: ['Daily community kitchen', 'Festival food distribution drives', 'Support for homeless and destitute', 'Annadana (sacred food offering)'],
  },
  {
    icon: 'fa-solid fa-person-running',
    title: 'Youth Empowerment',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Physical training, NCC-style camps, patriotic education, and life-skills programs help youth grow into responsible, disciplined, and nation-serving citizens.',
    points: ['Physical and moral training', 'Patriotic and cultural education', 'Leadership development', 'Community service programs'],
  },
]

export default function Activities() {
  return (
    <div className="page-enter">
      <div className="page-hero">
        <div className="container">
          <h1>Activities & Programs</h1>
          <p>Empowering communities through education, healthcare, and relief</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-chevron-right" />
            <span>Activities</span>
          </div>
        </div>
      </div>

      <section className="section bg-surface">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title" style={{ marginTop: '0.75rem' }}>Our Core <span>Programs</span></h2>
            <div className="section-divider" />
            <p className="section-desc">For over 100 years, we have served humanity across multiple domains — all driven by the singular philosophy of selfless service.</p>
          </div>

          <div className="activities-grid">
            {activities.map((act) => (
              <div key={act.title} className="activity-card card">
                <div className="activity-header" style={{ background: act.bg }}>
                  <div className="activity-icon" style={{ color: act.color }}>
                    <i className={act.icon} />
                  </div>
                  <h3 className="activity-title">{act.title}</h3>
                </div>
                <div className="activity-body">
                  <p className="text-muted mb-sm">{act.desc}</p>
                  <ul className="activity-points">
                    {act.points.map((pt) => (
                      <li key={pt}>
                        <i className="fa-solid fa-circle-check" style={{ color: act.color }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Support Our Mission</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Your donations directly fund these programs. Even a small contribution makes a real difference in someone's life.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/donate" className="btn btn-white">
              <i className="fa-solid fa-heart" /> Donate Now
            </Link>
            <Link to="/contact" className="btn btn-outline-white">
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
