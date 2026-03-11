export default function ResumeTab() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-16 animate-fade-in">
      {/* Education */}
      <div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-neutral-light">
          Education
        </h2>
        <div className="border-l-2 border-primary-accent pl-6 pb-6">
          <h3 className="font-bold text-lg text-primary-accent">
            PGDM - Post Graduate Diploma in Management
          </h3>
          <p className="text-neutral-light/70 text-sm my-2">IIM Indore</p>
          <p className="text-neutral-light/80">
            Specialized in Business Strategy, AI & Technology. Active in case competitions, student leadership, and cross-functional projects. Relevant coursework: Strategic Management, Generative AI & NLP, Algorithmic Problem Solving, Economics, Finance.
          </p>
        </div>
      </div>

      {/* Experience */}
      <div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-neutral-light">
          Experience & Internships
        </h2>
        <div className="space-y-6">
          <div className="bg-primary-dark/30 rounded-lg p-6 border border-primary-light/20 hover:border-primary-accent/50 hover:bg-primary-dark/40 transition-all">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
              <div>
                <h3 className="font-bold text-lg text-primary-accent">
                  Consulting Intern - Public Policy
                </h3>
                <p className="text-neutral-light/70">Edelman</p>
              </div>
              <span className="text-neutral-light/60 text-sm whitespace-nowrap">Summer 2023</span>
            </div>
            <ul className="space-y-2">
              <li className="text-neutral-light/80 flex gap-3 text-sm">
                <span className="text-primary-accent">›</span>
                <span>Developed policy impact analysis and market research deliverables</span>
              </li>
              <li className="text-neutral-light/80 flex gap-3 text-sm">
                <span className="text-primary-accent">›</span>
                <span>Collaborated on regulatory briefings and stakeholder communications</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-neutral-light">
          Leadership & Involvement
        </h2>
        <div className="border-l-2 border-primary-light pl-6 pb-6">
          <h3 className="font-bold text-lg text-primary-light">Vice President - IPM Entrepreneurship Cell</h3>
          <p className="text-neutral-light/70 text-sm my-2">IIM Indore</p>
          <p className="text-neutral-light/80">
            Organized 15+ events, managed partnerships, coordinated mentorship programs, and drove student engagement around entrepreneurship and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
