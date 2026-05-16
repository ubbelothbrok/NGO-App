import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Activities', path: '/activities' },
  { label: 'Find Branches', path: '/branches' },
  { label: 'Photo Gallery', path: '/media' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Donate Now', path: '/donate' },
]

const activities = [
  'Education & Schools',
  'Healthcare Services',
  'Disaster Relief',
  'Spiritual Programs',
  'Youth Empowerment',
  'Food Distribution',
]

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-[#94a3b8]">
      {/* Newsletter Subscription */}
      <div className="border-b border-white/5 bg-black/20">
        <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-white font-heading font-bold text-2xl md:text-3xl mb-2 uppercase">Subscribe to our Newsletter</h3>
            <p className="text-sm text-gray-400">Stay updated with our latest campaigns, stories of impact, and ways you can help make a difference.</p>
          </div>
          <form className="flex w-full md:w-auto min-w-[300px] gap-2" onSubmit={(e) => { e.preventDefault(); alert('Thanks for subscribing!'); }}>
            <input type="email" placeholder="Your Email Address" className="px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none focus:border-primary flex-grow" required />
            <button type="submit" className="btn btn-primary px-6 py-3 rounded-md text-sm shadow-none">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="py-16 md:py-24 border-b border-white/5">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-2xl shadow-lg">
                <i className="fa-solid fa-om" />
              </div>
              <div>
                <span className="block text-white font-heading font-bold text-lg leading-tight uppercase tracking-wide">Bharat Sevashram Sangha</span>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Garia, Kolkata</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-8">
              Founded in 1917 by Srimat Swami Pranavanandaji Maharaj — a philanthropic, charitable organisation dedicated to the service of humanity for over a century.
            </p>
            <div className="flex gap-2">
              {[
                { icon: 'fab fa-facebook-f', label: 'Facebook' },
                { icon: 'fab fa-youtube', label: 'YouTube' },
                { icon: 'fab fa-twitter', label: 'Twitter' },
                { icon: 'fab fa-instagram', label: 'Instagram' }
              ].map((social) => (
                <a 
                  key={social.label} 
                  href="#" 
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-8 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-primary after:rounded-full">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.path} className="text-sm flex items-center gap-2 hover:text-secondary transition-all hover:pl-1">
                    <i className="fa-solid fa-angle-right text-[10px] text-primary" /> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Activities */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-8 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-primary after:rounded-full">
              Our Activities
            </h3>
            <ul className="flex flex-col gap-3">
              {activities.map((a) => (
                <li key={a}>
                  <Link to="/activities" className="text-sm flex items-center gap-2 hover:text-secondary transition-all hover:pl-1">
                    <i className="fa-solid fa-angle-right text-[10px] text-primary" /> {a}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-8 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-primary after:rounded-full">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-5 mb-8">
              <li className="flex gap-4">
                <i className="fa-solid fa-map-location-dot text-primary text-base mt-1" />
                <span className="text-sm leading-relaxed text-gray-400">58 Pranavananda Road, Garia, South 24 Paragana, Kolkata-700084</span>
              </li>
              <li className="flex gap-4">
                <i className="fa-solid fa-phone text-primary text-base mt-1" />
                <span className="text-sm leading-relaxed text-gray-400">+91-9434012856<br />+91-9596943769</span>
              </li>
              <li className="flex gap-4">
                <i className="fa-solid fa-envelope text-primary text-base mt-1" />
                <a href="mailto:contact@bssgaria.org" className="text-sm text-gray-400 hover:text-white transition-colors">contact@bssgaria.org</a>
              </li>
            </ul>
            <Link to="/donate" className="btn bg-primary text-white hover:bg-primary-dark w-full py-3.5 shadow-lg shadow-primary/20">
              <i className="fa-solid fa-heart text-xs" /> Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 bg-[#0a0f1a]">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-medium">
          <p>© {new Date().getFullYear()} Bharat Sevashram Sangha Garia. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
