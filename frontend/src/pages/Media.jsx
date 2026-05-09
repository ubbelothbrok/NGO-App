import { useState } from 'react'
import { Link } from 'react-router-dom'
import './InnerPage.css'

const photos = [
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80', caption: 'Relief Operations', category: 'Disaster Relief' },
  { src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=700&q=80', caption: 'Community Gathering', category: 'Events' },
  { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=700&q=80', caption: 'Education Program', category: 'Education' },
  { src: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?w=700&q=80', caption: 'Healthcare Camp', category: 'Healthcare' },
  { src: 'https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?w=700&q=80', caption: 'Volunteer Team', category: 'Volunteers' },
  { src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=700&q=80', caption: 'Food Distribution', category: 'Food' },
  { src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=700&q=80', caption: 'Youth Program', category: 'Youth' },
  { src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=700&q=80', caption: 'Spiritual Discourse', category: 'Spiritual' },
  { src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=700&q=80', caption: 'Medical Camp', category: 'Healthcare' },
  { src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=700&q=80', caption: 'Annual Celebration', category: 'Events' },
  { src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=700&q=80', caption: 'Student Graduation', category: 'Education' },
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80', caption: 'Awareness Rally', category: 'Events' },
]

const categories = ['All', ...new Set(photos.map((p) => p.category))]

export default function Media() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? photos : photos.filter((p) => p.category === active)

  return (
    <div className="page-enter">
      <div className="page-hero">
        <div className="container">
          <h1>Photo Gallery</h1>
          <p>Moments of service, compassion, and community</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-chevron-right" />
            <span>Media</span>
          </div>
        </div>
      </div>

      <section className="section bg-surface">
        <div className="container">
          {/* Filter tabs */}
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <div className="media-grid">
            {filtered.map((photo, i) => (
              <div
                key={i}
                className="media-item"
                onClick={() => setLightbox(photo)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLightbox(photo)}
              >
                <img src={photo.src} alt={photo.caption} loading="lazy" />
                <div className="media-overlay">
                  <i className="fa-solid fa-magnifying-glass-plus" />
                  <span>{photo.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>
            <i className="fa-solid fa-xmark" />
          </button>
          <img src={lightbox.src} alt={lightbox.caption} onClick={(e) => e.stopPropagation()} />
          <p className="lightbox-caption">{lightbox.caption}</p>
        </div>
      )}
    </div>
  )
}
