'use client';

import ProjectCard from '@/components/ProjectCard';

const liveProjects = [
  {
    id: 'crochet',
    title: 'Crochet by Arsh',
    description:
      'Full-stack e-commerce platform for handmade crochet products. Features product catalog, shopping cart, and checkout flows.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://crochetbyarsh.com',
  },
  {
    id: 'automation',
    title: 'Content Publishing Automation',
    description:
      'Automation script for scheduled publishing and analytics aggregation across multiple platforms.',
    technologies: ['Python', 'APIs', 'Automation'],
  },
];

export default function LiveProjectsTab() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 animate-fade-in">
      <div className="mb-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-neutral-light">
          Live Projects
        </h2>
        <p className="text-neutral-light/70 max-w-2xl">
          Production-deployed projects showcasing end-to-end technical execution and product thinking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {liveProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
