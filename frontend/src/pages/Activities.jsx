import { Link } from 'react-router-dom'

const activities = [
  {
    icon: 'fa-solid fa-graduation-cap',
    title: 'Education Program',
    color: '#1D4ED8',
    bg: '#EFF6FF',
    desc: 'Over 100 schools and training centers providing holistic education, moral values, and free stay for students from underprivileged backgrounds.',
    points: ['Free Stay and Food Provided', 'Moral and spiritual training', 'Vocational skill development', 'Scholarship support'],
  },
  {
    icon: 'fa-solid fa-heart-pulse',
    title: 'Healthcare Services',
    color: '#059669',
    bg: '#ECFDF5',
    desc: 'Charitable dispensaries, mobile medical camps, and free healthcare services reaching thousands of patients annually.',
    points: ['Free outpatient clinics', 'Mobile medical camps', 'Blood donation drives', 'Health awareness campaigns'],
  },
  {
    icon: 'fa-solid fa-truck-fast',
    title: 'Disaster Relief',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Monks and volunteers are among the first responders during natural calamities — floods, cyclones, and earthquakes.',
    points: ['Emergency food and shelter', 'Medical aid in disaster zones', 'Rebuilding and rehabilitation', 'Immediate response'],
  },
  {
    icon: 'fa-solid fa-om',
    title: 'Spiritual Programs',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Regular spiritual discourses, yoga camps, meditation retreats, and cultural programs that nurture the inner life.',
    points: ['Weekly satsangs', 'Yoga and meditation camps', 'Cultural celebrations', 'Youth workshops'],
  },
  {
    icon: 'fa-solid fa-wheat-awn',
    title: 'Food Distribution',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Daily langar (community kitchen) serves hundreds of meals to the poor and homeless. Large-scale drives reach thousands during festivals.',
    points: ['Daily community kitchen', 'Festival food drives', 'Support for destitute', 'Annadana (sacred offering)'],
  },
  {
    icon: 'fa-solid fa-person-running',
    title: 'Youth Empowerment',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Physical training, patriotic education, and life-skills programs help youth grow into responsible citizens.',
    points: ['Physical and moral training', 'Patriotic education', 'Leadership development', 'Community service'],
  },
]

export default function Activities() {
  return (
    <div className="animate-fade-in">
      {/* Page Hero */}
      <div className="relative py-20 md:py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4 drop-shadow-md tracking-tight">Activities & Programs</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">Empowering communities through education, healthcare, and relief</p>
          <div className="flex items-center justify-center gap-2 mt-8 text-sm font-bold tracking-wide">
            <Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
            <i className="fa-solid fa-chevron-right text-[10px] text-white/30" />
            <span className="text-secondary">Activities</span>
          </div>
        </div>
      </div>

      <section className="section bg-surface">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-tag">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-heading mt-4 tracking-tight">Our Core <span className="text-primary italic">Programs</span></h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto my-6" />
            <p className="text-muted text-lg">For over 100 years, we have served humanity across multiple domains — all driven by the philosophy of selfless service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((act) => (
              <div key={act.title} className="card group overflow-hidden flex flex-col h-full hover:border-primary/20">
                <div className="p-10 flex flex-col items-center text-center transition-colors duration-300" style={{ background: act.bg }}>
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center text-3xl mb-6 transition-transform group-hover:scale-110 duration-500" style={{ color: act.color }}>
                    <i className={act.icon} />
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold text-heading tracking-tight leading-tight">{act.title}</h3>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-text leading-relaxed text-base mb-8">{act.desc}</p>
                  <div className="mt-auto">
                    <div className="h-px w-full bg-border mb-6" />
                    <ul className="space-y-4">
                      {act.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-4 text-sm font-bold text-heading">
                          <i className="fa-solid fa-circle-check text-base" style={{ color: act.color }} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-24 bg-primary text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-white/5 opacity-50 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 drop-shadow-md">Support Our Mission</h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-medium">
            Your donations directly fund these programs. Even a small contribution makes a real difference in someone's life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/donate" className="btn bg-white text-primary hover:bg-gray-100 px-10 py-4 shadow-xl shadow-black/20 font-black">
              <i className="fa-solid fa-heart mr-2" /> Donate Now
            </Link>
            <Link to="/contact" className="btn border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 font-black">
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
