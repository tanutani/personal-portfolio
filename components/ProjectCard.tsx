interface ProjectProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectProps) {
  return (
    <div className="group h-full flex flex-col rounded-lg border border-primary-light/20 hover:border-primary-accent/50 bg-primary-dark/20 hover:bg-primary-dark/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-main/20 hover:-translate-y-1">
      {/* Image area */}
      <div className="h-40 bg-gradient-to-br from-primary-main to-primary-light flex items-center justify-center group-hover:from-primary-light group-hover:to-primary-accent transition-all duration-300">
        <div className="text-neutral-light/80 text-sm font-medium text-center px-4">Project Preview</div>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-serif text-lg font-bold text-primary-accent mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-neutral-light/70 text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs bg-primary-main/40 text-primary-accent rounded-full hover:bg-primary-main/60 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-accent hover:text-primary-light font-medium text-sm inline-flex items-center gap-2 mt-auto"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
}
