'use client';

import ProjectCard from '@/components/ProjectCard';

const academicProjects = [
  {
    id: 'case-1',
    title: 'Market Entry Strategy',
    description:
      'Led team to build go-to-market plan for renewable vertical; included financial modelling and scenario planning.',
    technologies: ['Strategy', 'Finance', 'Market Analysis'],
  },
  {
    id: 'research-1',
    title: 'AI Governance Study',
    description:
      'Comparative analysis of regulatory frameworks and policy recommendations for responsible AI adoption.',
    technologies: ['Research', 'Policy', 'Analysis'],
  },
  {
    id: 'analytics-1',
    title: 'Predictive Analytics Model',
    description:
      'Built ensemble model to forecast outcomes; emphasized feature engineering and model explainability.',
    technologies: ['Python', 'ML', 'Data Science'],
  },
];

export default function AcademicProjectsTab() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 animate-fade-in">
      <div className="mb-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-neutral-light">
          Academic Projects
        </h2>
        <p className="text-neutral-light/70 max-w-2xl">
          Case competitions, research initiatives, and academic endeavors showcasing analytical and strategic thinking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {academicProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
