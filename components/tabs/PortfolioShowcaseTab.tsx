import RevealOnScroll from '@/components/RevealOnScroll'
import showcaseItems from '@/data/portfolio-showcase.json'

export default function PortfolioShowcaseTab() {
  return (
    <div>
      <RevealOnScroll>
        <div className="section-header">
          <span className="section-index">01</span>
          <h2 className="section-title">Showcase</h2>
          <div className="section-line" />
        </div>
      </RevealOnScroll>

      <div className="space-y-6">
        {showcaseItems.map((item, index) => (
          <RevealOnScroll key={item.id} delay={index * 100}>
            <article className="glass-card overflow-hidden rounded-lg">
              <div className="relative border-b border-white/10 bg-black">
                <video
                  className="aspect-video w-full bg-black object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`${item.title} ${item.category}`}
                >
                  <source src={item.videoSrc} type="video/mp4" />
                  Your browser does not support MP4 video playback.
                </video>
              </div>

              <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-end md:p-8">
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="mono rounded border border-red-400/30 bg-red-500/10 px-2.5 py-1 text-[0.68rem] font-medium uppercase text-red-200">
                      {item.category}
                    </span>
                    <span className="mono text-xs text-gray-400">Case competition submission</span>
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold text-white md:text-3xl">{item.title}</h3>
                  <p className="max-w-3xl text-gray-300">{item.description}</p>
                </div>

                <div className="mono flex gap-5 text-xs text-gray-400 md:justify-end">
                  <span>{item.year}</span>
                  <span>{item.duration}</span>
                </div>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  )
}
