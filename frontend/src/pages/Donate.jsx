import { useState } from 'react'
import { Link } from 'react-router-dom'

const amounts = [100, 250, 500, 1000, 2500, 5000]

const causes = [
  { id: 'education', icon: 'fa-solid fa-graduation-cap', label: 'Education', color: '#1D4ED8' },
  { id: 'healthcare', icon: 'fa-solid fa-heart-pulse', label: 'Healthcare', color: '#059669' },
  { id: 'disaster', icon: 'fa-solid fa-truck-fast', label: 'Relief', color: '#DC2626' },
  { id: 'general', icon: 'fa-solid fa-hands-holding-heart', label: 'General', color: '#7C3AED' },
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
    <div className="animate-fade-in">
      {/* Page Hero */}
      <div className="relative py-20 md:py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4 drop-shadow-md tracking-tight">Support Our Mission</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">Your generosity fuels a century of selfless service</p>
          <div className="flex items-center justify-center gap-2 mt-8 text-sm font-bold tracking-wide">
            <Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
            <i className="fa-solid fa-chevron-right text-[10px] text-white/30" />
            <span className="text-secondary">Donate</span>
          </div>
        </div>
      </div>

      <section className="section bg-surface">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Donation form */}
          <div className="lg:col-span-2 card p-8 md:p-12 animate-slide-up">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center text-4xl mx-auto mb-8 shadow-inner">
                  <i className="fa-solid fa-heart" />
                </div>
                <h2 className="text-3xl font-heading font-extrabold text-heading mb-4 tracking-tight">Thank You, {name}!</h2>
                <p className="text-muted text-lg leading-relaxed max-w-md mx-auto mb-10">
                  We've received your donation request of <strong className="text-heading">₹{finalAmount.toLocaleString()}</strong>. Our team will contact you at <strong className="text-heading">{email}</strong> with payment details.
                </p>
                <button 
                  className="btn btn-primary px-10 py-4" 
                  onClick={() => { setSubmitted(false); setName(''); setEmail(''); setCustomAmount(''); setSelectedAmount(500); }}
                >
                  Make Another Donation
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-heading font-extrabold text-heading mb-2 tracking-tight">Make a Donation</h2>
                <p className="text-muted text-sm mb-10">Choose a cause and amount that resonates with you.</p>

                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Choose cause */}
                  <div className="space-y-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">1. Select a Cause</div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {causes.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all group ${selectedCause === c.id ? 'border-primary bg-primary/5' : 'border-border bg-white hover:border-primary/30'}`}
                          onClick={() => setSelectedCause(c.id)}
                        >
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all shadow-sm ${selectedCause === c.id ? 'bg-primary text-white scale-110 shadow-primary/20' : 'bg-surface text-gray-400 group-hover:text-primary'}`}>
                            <i className={c.icon} />
                          </div>
                          <span className={`text-xs font-black uppercase tracking-widest ${selectedCause === c.id ? 'text-primary' : 'text-muted'}`}>{c.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Choose amount */}
                  <div className="space-y-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">2. Select Amount (₹)</div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {amounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          className={`py-4 rounded-xl border-2 font-black transition-all ${selectedAmount === amt && !customAmount ? 'border-primary bg-primary text-white shadow-xl shadow-primary/20 scale-105' : 'border-border bg-white text-heading hover:border-primary hover:text-primary'}`}
                          onClick={() => { setSelectedAmount(amt); setCustomAmount('') }}
                        >
                          ₹{amt.toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <span className="text-gray-400 font-bold text-lg">₹</span>
                      </div>
                      <input
                        type="number"
                        placeholder="Enter custom amount"
                        className="w-full pl-12 pr-6 py-4 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-bold text-lg"
                        value={customAmount}
                        onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null) }}
                      />
                    </div>
                  </div>

                  {/* Donor info */}
                  <div className="space-y-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">3. Your Information</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-heading ml-1">Full Name <span className="text-primary">*</span></label>
                        <input type="text" required placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-5 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-heading ml-1">Email Address <span className="text-primary">*</span></label>
                        <input type="email" required placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-5 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button type="submit" className="btn btn-primary w-full py-5 text-lg shadow-2xl shadow-primary/30">
                      <i className="fa-solid fa-heart mr-2" /> Donate ₹{finalAmount ? finalAmount.toLocaleString() : '—'} Now
                    </button>
                    <p className="flex items-center justify-center gap-2 mt-6 text-xs font-bold text-emerald-600 uppercase tracking-widest">
                      <i className="fa-solid fa-shield-halved" /> Secure & 80G tax-exempt
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="card p-8 bg-white overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full" />
              <h3 className="text-xl font-heading font-extrabold text-heading mb-8 relative">Your Impact</h3>
              <ul className="space-y-8 relative">
                {[
                  { amt: '₹100', desc: 'Provides a meal to 5 underprivileged children', icon: 'fa-utensils' },
                  { amt: '₹500', desc: 'Covers one month of school supplies for a student', icon: 'fa-book' },
                  { amt: '₹1,000', desc: 'Funds a free medical camp for 10 people', icon: 'fa-stethoscope' },
                  { amt: '₹5,000', desc: "Sponsors a student's education for an entire year", icon: 'fa-graduation-cap' },
                ].map((item) => (
                  <li key={item.amt} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-primary shrink-0 shadow-sm">
                      <i className={`fa-solid ${item.icon} text-sm`} />
                    </div>
                    <div>
                      <span className="block font-black text-primary text-base mb-1">{item.amt}</span>
                      <span className="text-xs text-muted leading-relaxed font-medium">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="card p-8 bg-heading text-white">
              <h4 className="flex items-center gap-3 text-lg font-bold mb-6">
                <i className="fa-solid fa-university text-primary" /> Bank Transfer
              </h4>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">For direct bank transfers, please reach out to us:</p>
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Email</span>
                  <span className="text-sm font-bold">contact@bssgaria.org</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Phone</span>
                  <span className="text-sm font-bold">+91-9434012856</span>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed pt-6 border-t border-white/10">
                All donations are exempt from Income Tax under Section 80G of the IT Act.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
