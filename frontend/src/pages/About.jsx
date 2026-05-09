import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="animate-fade-in">
      {/* Page Hero */}
      <div className="relative py-20 md:py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4 drop-shadow-md">About Us</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl font-medium leading-relaxed">A century of selfless service to humanity</p>
          <div className="flex items-center gap-2 mt-8 text-sm font-bold tracking-wide">
            <Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
            <i className="fa-solid fa-chevron-right text-[10px] text-white/30" />
            <span className="text-secondary">About Us</span>
          </div>
        </div>
      </div>

      {/* History Section */}
      <section className="section bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <span className="section-tag">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-heading mt-4 leading-tight">History & <span className="text-primary italic">Mission</span></h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full my-6" />
            <p className="text-text leading-relaxed mb-4">
              The Bharat Sevashram Sangha was founded by <strong className="text-heading font-bold">Srimat Swami Pranavanandaji Maharaj</strong>, the great illustrious patriot and philanthropist, in the year 1917. The Garia branch is one of the thriving centres of the Sangha.
            </p>
            <p className="text-text leading-relaxed mb-4">
              The Sangha is a philanthropic, charitable registered organisation worldwide dedicated to the service of humanity and service to the afflicted people for over 100 years.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Bharat Sevashram Sangha is a non-profit organisation and depends entirely on the support and generosity of individuals and foundations. The Sangha operates on a purely non-sectarian basis, irrespective of caste or creed.
            </p>
            <Link to="/activities" className="btn btn-primary px-8 py-4">Our Activities <i className="fa-solid fa-arrow-right ml-2" /></Link>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80"
                alt="Bharat Sevashram Sangha"
                className="w-full h-[450px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section bg-surface">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2 animate-slide-up">
            <span className="section-tag">Our Inspiration</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-heading mt-4 leading-tight">The <span className="text-primary italic">Founder</span></h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full my-6" />
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">Acharya Srimat Swami Pranavanandaji Maharaj</h3>
            <p className="text-text leading-relaxed mb-4">
              Swami Pranavanandaji was an illustrious patriot, spiritual leader, and philanthropist who dedicated his entire life to the nation and its people. From a young age, he exhibited extraordinary spiritual prowess and deep empathy.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              He founded the Bharat Sevashram Sangha with the vision of building a strong, united, and culturally rooted society. His teachings emphasise self-discipline, manliness, and the supreme duty of selfless service.
            </p>
            <div className="relative p-8 bg-white border-l-4 border-primary rounded-r-2xl shadow-premium italic text-lg text-heading">
              <i className="fa-solid fa-quote-left absolute top-4 left-4 text-4xl text-primary/10" />
              <p className="relative z-10">"Service to man is service to God"</p>
            </div>
          </div>
          <div className="lg:order-1 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=800&q=80"
                alt="Founder"
                className="w-full h-[450px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Five Point Code */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-tag bg-secondary/20 border-secondary/30 text-secondary">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mt-4 tracking-tight">Five Point Code for <span className="text-secondary italic">BSS Workers</span></h2>
            <div className="w-20 h-1.5 bg-white/20 rounded-full mx-auto my-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { num: '01', title: 'Integrity', icon: 'fa-solid fa-shield-halved' },
              { num: '02', title: 'Loyalty to the Nation', icon: 'fa-solid fa-flag' },
              { num: '03', title: 'Selfless Service', icon: 'fa-solid fa-hands-holding-heart' },
              { num: '04', title: 'Peaceful Conduct', icon: 'fa-solid fa-dove' },
              { num: '05', title: 'Economic Living', icon: 'fa-solid fa-leaf' },
            ].map((item, i) => (
              <div 
                key={item.num} 
                className="bg-white/10 border border-white/20 p-10 rounded-2xl text-center text-white hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-3xl font-black opacity-20 mb-4 group-hover:opacity-40 transition-opacity font-heading">{item.num}</div>
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                  <i className={item.icon} />
                </div>
                <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
