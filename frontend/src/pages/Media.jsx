import { useState } from 'react'
import { Link } from 'react-router-dom'

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

const videos = [
  { id: '1', title: 'Winter Relief Operations 2024', thumb: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80', videoId: 'dQw4w9WgXcQ' },
  { id: '2', title: 'Youth Empowerment Camp Highlight', thumb: 'https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?w=600&q=80', videoId: 'dQw4w9WgXcQ' },
  { id: '3', title: 'Healthcare Drive in Rural Bengal', thumb: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80', videoId: 'dQw4w9WgXcQ' },
]

const categories = ['All', ...new Set(photos.map((p) => p.category))]

export default function Media() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const [videoLightbox, setVideoLightbox] = useState(null)

  const filtered = active === 'All' ? photos : photos.filter((p) => p.category === active)

  return (
    <div className="animate-fade-in">
      {/* Page Hero */}
      <div className="relative py-20 md:py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4 drop-shadow-md tracking-tight">Photo Gallery</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">Moments of service, compassion, and community</p>
          <div className="flex items-center justify-center gap-2 mt-8 text-sm font-bold tracking-wide">
            <Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
            <i className="fa-solid fa-chevron-right text-[10px] text-white/30" />
            <span className="text-secondary">Media</span>
          </div>
        </div>
      </div>

      <section className="section bg-surface min-h-[600px]">
        <div className="container">
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-black uppercase tracking-widest border-2 transition-all duration-300 shadow-sm ${active === cat ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105' : 'bg-white border-border text-heading hover:border-primary hover:text-primary'}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((photo, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-border bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
                style={{ animationDelay: `${i * 0.05}s` }}
                onClick={() => setLightbox(photo)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLightbox(photo)}
              >
                <img src={photo.src} alt={photo.caption} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <i className="fa-solid fa-magnifying-glass-plus text-xl" />
                  </div>
                  <span className="font-bold text-sm tracking-wide uppercase leading-tight">{photo.caption}</span>
                  <span className="text-[10px] opacity-70 mt-2 font-bold uppercase tracking-widest">{photo.category}</span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <i className="fa-solid fa-images text-5xl text-gray-200 mb-4" />
              <p className="text-muted text-lg">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Gallery */}
      <section className="section bg-white border-t border-border">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-tag bg-secondary/10 text-secondary border-secondary/20">Video Library</span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-heading mt-4 uppercase">Watch Our <span className="text-secondary">Impact</span></h2>
            <div className="w-20 h-1.5 bg-secondary rounded-full mx-auto my-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((vid) => (
              <div 
                key={vid.id} 
                className="card overflow-hidden group cursor-pointer"
                onClick={() => setVideoLightbox(vid)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img src={vid.thumb} alt={vid.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform pl-1">
                      <i className="fa-solid fa-play" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-heading group-hover:text-primary transition-colors leading-tight">{vid.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-4 md:p-8 animate-fade-in" onClick={() => setLightbox(null)}>
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white text-3xl md:text-5xl hover:text-primary transition-colors z-[110]" 
            onClick={() => setLightbox(null)}
          >
            <i className="fa-solid fa-xmark" />
          </button>
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightbox.src} 
              alt={lightbox.caption} 
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border-4 border-white/5" 
            />
            <div className="mt-8 text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-widest mb-3">{lightbox.category}</span>
              <p className="text-white text-xl md:text-2xl font-heading font-bold drop-shadow-md">{lightbox.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* Video Lightbox */}
      {videoLightbox && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-4 md:p-8 animate-fade-in" onClick={() => setVideoLightbox(null)}>
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white text-3xl md:text-5xl hover:text-primary transition-colors z-[110]" 
            onClick={() => setVideoLightbox(null)}
          >
            <i className="fa-solid fa-xmark" />
          </button>
          <div className="relative max-w-5xl w-full aspect-video bg-black shadow-2xl rounded-lg overflow-hidden border-2 border-white/10" onClick={(e) => e.stopPropagation()}>
            <iframe 
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoLightbox.videoId}?autoplay=1`} 
              title={videoLightbox.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  )
}
