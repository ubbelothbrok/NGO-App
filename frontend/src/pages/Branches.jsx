import { Link } from 'react-router-dom'

const branches = [
  { name: 'Garia, Kolkata (HQ)', address: '58 Pranavananda Road, Garia, South 24 Paraganas, Kolkata-700084', phone: '+91-9434012856', email: 'contact@bssgaria.org', type: 'Headquarters' },
  { name: 'Rashbehari Avenue', address: '211 Rashbehari Avenue, Kolkata-700019, West Bengal', phone: '+91-9876543210', email: 'rashbehari@bss.org', type: 'Major Branch' },
  { name: 'Baruipur Ashram', address: 'Baruipur, South 24 Paraganas, West Bengal-743610', phone: '+91-9123456789', email: 'baruipur@bss.org', type: 'Ashram' },
  { name: 'Diamond Harbour', address: 'Diamond Harbour Road, South 24 Paraganas, West Bengal', phone: '+91-9234567890', email: 'diamondharbour@bss.org', type: 'Branch' },
  { name: 'Sonarpur Kendra', address: 'Sonarpur, South 24 Paraganas, West Bengal-700150', phone: '+91-9345678901', email: 'sonarpur@bss.org', type: 'Kendra' },
  { name: 'Jadavpur Branch', address: 'Jadavpur, Kolkata-700032, West Bengal', phone: '+91-9456789012', email: 'jadavpur@bss.org', type: 'Branch' },
]

const typeColors = {
  'Headquarters': 'bg-red-50 text-red-700 border-red-100',
  'Major Branch': 'bg-blue-50 text-blue-700 border-blue-100',
  'Ashram': 'bg-purple-50 text-purple-700 border-purple-100',
  'Branch': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'Kendra': 'bg-amber-50 text-amber-700 border-amber-100',
}

export default function Branches() {
  return (
    <div className="animate-fade-in">
      {/* Page Hero */}
      <div className="relative py-20 md:py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4 drop-shadow-md tracking-tight">Our Branches</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">Find a Bharat Sevashram Sangha centre near you</p>
          <div className="flex items-center justify-center gap-2 mt-8 text-sm font-bold tracking-wide">
            <Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
            <i className="fa-solid fa-chevron-right text-[10px] text-white/30" />
            <span className="text-secondary">Branches</span>
          </div>
        </div>
      </div>

      <section className="section bg-surface">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-tag">Our Locations</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-heading mt-4 tracking-tight">BSS <span className="text-primary italic">Centres</span></h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto my-6" />
            <p className="text-muted text-lg leading-relaxed">With over 30 branches across India, we bring our services closer to communities in need.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((b) => (
              <div key={b.name} className="card p-8 flex flex-col group hover:border-primary/20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-surface flex items-center justify-center text-xl text-primary border border-border group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                    <i className="fa-solid fa-building-columns" />
                  </div>
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1 border ${typeColors[b.type] || 'bg-gray-50 text-gray-700 border-gray-100'}`}>{b.type}</span>
                    <h3 className="text-xl font-heading font-extrabold text-heading tracking-tight leading-tight">{b.name}</h3>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex gap-4">
                    <i className="fa-solid fa-map-location-dot text-primary text-base mt-1" />
                    <span className="text-sm text-text leading-relaxed font-medium">{b.address}</span>
                  </li>
                  <li className="flex gap-4">
                    <i className="fa-solid fa-phone text-primary text-base mt-1" />
                    <a href={`tel:${b.phone}`} className="text-sm text-text hover:text-primary transition-colors font-bold">{b.phone}</a>
                  </li>
                  <li className="flex gap-4">
                    <i className="fa-solid fa-envelope text-primary text-base mt-1" />
                    <a href={`mailto:${b.email}`} className="text-sm text-text hover:text-primary transition-colors font-bold">{b.email}</a>
                  </li>
                </ul>
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(b.address)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn border-border text-heading hover:bg-surface w-full py-3.5 text-sm font-bold"
                >
                  <i className="fa-solid fa-map text-primary mr-2" /> View on Map
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-white text-center">
        <div className="container max-w-2xl mx-auto">
          <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center text-3xl mx-auto mb-8 shadow-inner">
            <i className="fa-solid fa-map-location-dot" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-heading mb-4 tracking-tight">Can't Find a Branch Near You?</h2>
          <p className="text-muted text-lg mb-10 leading-relaxed">Contact our main office and we'll help you find the nearest centre or connect with our volunteers in your area.</p>
          <Link to="/contact" className="btn btn-primary px-10 py-4 shadow-xl shadow-primary/20 font-black">
            <i className="fa-solid fa-phone mr-2 text-xs" /> Contact Main Office
          </Link>
        </div>
      </section>
    </div>
  )
}
