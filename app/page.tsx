'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import TabNav from '@/components/TabNav';
import ResumeTab from '@/components/tabs/ResumeTab';
import AcademicProjectsTab from '@/components/tabs/AcademicProjectsTab';
import LiveProjectsTab from '@/components/tabs/LiveProjectsTab';
import PortfolioShowcaseTab from '@/components/tabs/PortfolioShowcaseTab';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState('resume');

  const tabs = [
    { id: 'resume', label: 'Resume' },
    { id: 'academic', label: 'Academic Projects' },
    { id: 'live', label: 'Live Projects' },
    { id: 'showcase', label: 'Portfolio Showcase' },
  ];

  return (
    <main className="min-h-screen bg-neutral-dark">
      <Hero />
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

      <div className="relative">
        {activeTab === 'resume' && <ResumeTab />}
        {activeTab === 'academic' && <AcademicProjectsTab />}
        {activeTab === 'live' && <LiveProjectsTab />}
        {activeTab === 'showcase' && <PortfolioShowcaseTab />}
      </div>

      <Footer />
    </main>
  );
}
