'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 md:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-main/20 via-neutral-dark to-neutral-dark pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="order-2 md:order-1 space-y-6">
            <div className="space-y-3">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-accent">
                Tanish Chaudhary
              </h1>
              <p className="text-xl md:text-2xl text-primary-light font-medium">
                Learning fast and building faster.
              </p>
            </div>

            <p className="text-neutral-light/80 text-base md:text-lg leading-relaxed max-w-lg">
              As a high-agency generalist, I sit right at the crossover of business strategy and emerging tech. I study the macro side of markets, policy, and growth, but my hands-on approach means I also know my way around modern-day AI tools and coding. I want to bring this relentless drive to PE/VC or a high-growth startup to help spot winning products, shape their strategy, and drive scale. If a project requires a skill I don't have yet, I'll learn it by tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-primary-light text-white rounded-lg font-medium hover:bg-primary-main transition-all duration-300 transform hover:scale-105">
                View Resume
              </button>
              <a
                href="https://linkedin.com/in/tanish-chaudhary"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-primary-accent text-primary-accent rounded-lg font-medium hover:bg-primary-accent/10 transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="relative w-64 h-64">
              {/* Animated ring */}
              <div
                className="absolute inset-0 rounded-full avatar-ring-hover"
                style={{
                  background: `conic-gradient(
                    from 0deg,
                    #d2c1b6 0deg,
                    #456882 90deg,
                    #234c6a 180deg,
                    #1b3c53 270deg,
                    #d2c1b6 360deg
                  )`,
                  padding: '3px',
                }}
              >
                {/* Inner circle */}
                <div className="w-full h-full rounded-full bg-neutral-dark flex items-center justify-center overflow-hidden border-4 border-primary-dark">
                  <div className="w-60 h-60 rounded-full bg-primary-main flex items-center justify-center text-primary-accent text-lg font-serif">
                    Your Photo
                  </div>
                </div>
              </div>

              {/* Geometric accents */}
              <div className="absolute -top-4 -right-8 w-32 h-32 border-2 border-primary-light/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-10 w-24 h-24 border-2 border-primary-light/10 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
