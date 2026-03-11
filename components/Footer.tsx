export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-light/20 bg-primary-dark/30 backdrop-blur-sm mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold text-primary-accent">
              Tanish Chaudhary
            </h3>
            <p className="text-neutral-light/70 text-sm">
              Building at the intersection of strategy, technology, and design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-neutral-light">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <button className="text-neutral-light/70 hover:text-primary-accent transition-colors text-sm text-left">
                Resume
              </button>
              <button className="text-neutral-light/70 hover:text-primary-accent transition-colors text-sm text-left">
                Projects
              </button>
              <button className="text-neutral-light/70 hover:text-primary-accent transition-colors text-sm text-left">
                Portfolio
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold text-neutral-light">Connect</h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://linkedin.com/in/tanish-chaudhary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-light/70 hover:text-primary-accent transition-colors text-sm"
              >
                LinkedIn →
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-light/70 hover:text-primary-accent transition-colors text-sm"
              >
                GitHub →
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-neutral-light/70 hover:text-primary-accent transition-colors text-sm"
              >
                Email →
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-light/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-light/60">
            <p>&copy; {currentYear} Tanish Chaudhary. All rights reserved.</p>
            <p>Designed & Built with care</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
