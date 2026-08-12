function Gallery() {
  const images = [
    '/assets/gallery/1.jpg',
    '/assets/gallery/2.jpg',
    '/assets/gallery/3.jpg',
    '/assets/gallery/4.jpg',
    '/assets/gallery/5.jpg',
    '/assets/gallery/6.jpg'
  ]

  return (
    <section className="px-6 pt-28 pb-20 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Gallery</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-100">Campus and past event highlights</h1>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, index) => (
            <div key={src} className="overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-950/80 shadow-glow">
              <img src={src} alt={`Gallery image ${index + 1}`} className="h-72 w-full object-cover transition duration-300 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
