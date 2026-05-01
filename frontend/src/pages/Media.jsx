export default function Media() {
  return (
    <div className="page-enter" style={{ paddingTop: '100px' }}>
      <section className="section bg-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Gallery</span>
            <h2 className="section-title">Media & <span>Photos</span></h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="grid-3">
            {[
              'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&q=80',
              'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&q=80',
              'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&q=80',
              'https://images.unsplash.com/photo-1518398046578-8cca57782e17?w=500&q=80',
              'https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=500&q=80',
              'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&q=80'
            ].map((src, i) => (
              <div key={i} className="card" style={{ height: '250px' }}>
                <img src={src} alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
