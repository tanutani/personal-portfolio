'use client';

import { useState } from 'react';

const portfolioItems = [
  { id: 1, title: 'LM Fine-tuning', category: 'AI', background: 'Language Model Experiment' },
  { id: 2, title: 'Social Scheduler Bot', category: 'Automation', background: 'Posting Automation' },
  { id: 3, title: 'Site Design & Build', category: 'Website', background: 'Portfolio UI' },
  { id: 4, title: 'Branding & UI', category: 'Design', background: 'UI Concept' },
  { id: 5, title: 'Project Walkthrough', category: 'Video', background: 'Explainer Video' },
  { id: 6, title: 'AI & Policy Notes', category: 'Posts', background: 'LinkedIn Thread' },
];

export default function PortfolioShowcaseTab() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'AI', 'Automation', 'Website', 'Design', 'Video', 'Posts'];
  const filteredItems =
    activeFilter === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 animate-fade-in">
      <div className="mb-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-neutral-light">
          Portfolio Showcase
        </h2>
        <p className="text-neutral-light/70 max-w-2xl">
          A collection of diverse work spanning design, technology, content creation, and strategic initiatives.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
              activeFilter === category
                ? 'bg-primary-accent text-neutral-dark shadow-lg shadow-primary-accent/30'
                : 'bg-primary-dark/50 text-neutral-light hover:bg-primary-dark border border-primary-light/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative h-56 rounded-lg border border-primary-light/20 hover:border-primary-accent/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-main/20 hover:-translate-y-2 cursor-pointer bg-primary-dark/20"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-main to-primary-light flex items-center justify-center group-hover:from-primary-light group-hover:to-primary-accent transition-all duration-300">
              <p className="text-neutral-light/70 font-medium text-center px-4">{item.background}</p>
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

            {/* Content */}
            <div className="absolute inset-0 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="font-serif text-xl font-bold text-primary-accent mb-2">{item.title}</h3>
              <span className="inline-block w-fit px-3 py-1 bg-primary-light/90 text-neutral-dark text-xs font-bold rounded-full">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
