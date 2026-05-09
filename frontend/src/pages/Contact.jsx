import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setStatus('success')
      setLoading(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 1000)
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
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4 drop-shadow-md tracking-tight">Contact Us</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">We'd love to hear from you — reach out anytime</p>
          <div className="flex items-center justify-center gap-2 mt-8 text-sm font-bold tracking-wide">
            <Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
            <i className="fa-solid fa-chevron-right text-[10px] text-white/30" />
            <span className="text-secondary">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Info strip */}
      <div className="bg-white border-b border-border shadow-premium relative z-10">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {[
            { icon: 'fa-solid fa-phone', label: 'Call Us', value: '+91-9434012856', href: 'tel:+919434012856' },
            { icon: 'fa-solid fa-envelope', label: 'Email Us', value: 'contact@bssgaria.org', href: 'mailto:contact@bssgaria.org' },
            { icon: 'fa-solid fa-location-dot', label: 'Visit Us', value: '58 Pranavananda Road, Garia' },
            { icon: 'fa-solid fa-clock', label: 'Open Hours', value: 'Mon–Sat: 8AM – 7PM' }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-6 hover:bg-surface transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl group-hover:bg-primary group-hover:text-white transition-all">
                <i className={item.icon} />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-0.5">{item.label}</span>
                {item.href ? (
                  <a href={item.href} className="block text-sm font-bold text-heading hover:text-primary transition-colors">{item.value}</a>
                ) : (
                  <span className="block text-sm font-bold text-heading">{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="section bg-surface">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-2 card p-8 md:p-12 animate-slide-up">
            <h2 className="text-3xl font-heading font-extrabold text-heading mb-2 tracking-tight">Send Us a Message</h2>
            <p className="text-muted mb-10 text-sm">Fill out the form and our team will get back to you within 24 hours.</p>

            {status === 'success' && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-center gap-3 mb-8 animate-fade-in font-bold text-sm">
                <i className="fa-solid fa-circle-check text-emerald-500 text-xl" />
                <span>Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-heading ml-1">Full Name <span className="text-primary">*</span></label>
                  <input name="name" type="text" required placeholder="Your full name" value={formData.name} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-heading ml-1">Email Address <span className="text-primary">*</span></label>
                  <input name="email" type="email" required placeholder="your@email.com" value={formData.email} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-heading ml-1">Phone Number</label>
                  <input name="phone" type="tel" placeholder="+91-XXXXXXXXXX" value={formData.phone} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-heading ml-1">Subject <span className="text-primary">*</span></label>
                  <input name="subject" type="text" required placeholder="How can we help?" value={formData.subject} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-heading ml-1">Message <span className="text-primary">*</span></label>
                <textarea name="message" rows="5" required placeholder="Tell us more about your inquiry..." value={formData.message} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium resize-none" />
              </div>
              <button type="submit" className="btn btn-primary px-10 py-4 shadow-xl shadow-primary/20" disabled={loading}>
                {loading ? <><i className="fa-solid fa-spinner fa-spin mr-2" /> Sending...</> : <><i className="fa-solid fa-paper-plane mr-2" /> Send Message</>}
              </button>
            </form>
          </div>

          {/* Info panel */}
          <div className="bg-[#111827] rounded-2xl overflow-hidden shadow-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-primary p-8">
              <h3 className="text-xl font-heading font-extrabold text-white leading-tight">Bharat Sevashram Sangha</h3>
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest mt-1">Garia Branch, Kolkata</p>
            </div>
            <div className="p-8 space-y-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Office Address</span>
                  <p className="text-sm text-gray-400 leading-relaxed">58 Pranavananda Road, Garia,<br />South 24 Paraganas,<br />Kolkata-700084, West Bengal</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <i className="fa-solid fa-phone" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Phone Support</span>
                  <p className="text-sm text-gray-400 font-bold">+91-9434012856<br />+91-9596943769</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <i className="fa-solid fa-envelope" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Email Inquiry</span>
                  <a href="mailto:contact@bssgaria.org" className="text-sm text-gray-400 hover:text-white transition-colors font-bold underline underline-offset-4 decoration-primary/50">contact@bssgaria.org</a>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/5">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-6 text-center">Follow Our Impact</span>
                <div className="flex justify-center gap-3">
                  {['fa-facebook-f', 'fa-youtube', 'fa-twitter', 'fa-instagram'].map(icon => (
                    <a key={icon} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                      <i className={`fab ${icon}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
