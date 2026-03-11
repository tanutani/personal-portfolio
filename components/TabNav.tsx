'use client';

import { useEffect, useState, useRef } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabNavProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  tabs: Tab[];
}

export default function TabNav({ activeTab, setActiveTab, tabs }: TabNavProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = typeof window !== 'undefined' ? window.innerHeight * 0.8 : 0;
      setIsSticky(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateUnderlinePosition = () => {
      const container = containerRef.current;
      if (!container) return;

      const activeButton = container.querySelector(`button:nth-child(${tabs.findIndex(t => t.id === activeTab) + 1})`);
      if (activeButton) {
        const { offsetWidth, offsetLeft } = activeButton as HTMLElement;
        setUnderlineStyle({ width: offsetWidth, left: offsetLeft });
      }
    };

    updateUnderlinePosition();
    window.addEventListener('resize', updateUnderlinePosition);
    return () => window.removeEventListener('resize', updateUnderlinePosition);
  }, [activeTab, tabs]);

  return (
    <nav
      className={`${
        isSticky
          ? 'fixed top-0 left-0 right-0 z-40 shadow-2xl shadow-primary-dark/50'
          : 'relative'
      } bg-neutral-dark/95 backdrop-blur-sm border-b border-primary-light/20 transition-all duration-300`}
    >
      <div className="max-width-1200px mx-auto px-4 md:px-8">
        <div ref={containerRef} className="relative flex gap-2 md:gap-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-4 md:px-6 font-medium text-sm md:text-base transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-primary-accent'
                  : 'text-neutral-light/60 hover:text-neutral-light'
              }`}
            >
              {tab.label}
            </button>
          ))}
          
          {/* Animated underline */}
          <div
            className="absolute bottom-0 h-0.5 bg-primary-accent transition-all duration-300"
            style={{
              width: `${underlineStyle.width}px`,
              left: `${underlineStyle.left}px`,
            }}
          />
        </div>
      </div>
    </nav>
  );
}
