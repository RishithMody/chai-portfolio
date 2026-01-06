import { useState, type MouseEvent } from 'react';
import profileImage from '@/assets/41AF9C30-2DB5-41A3-8853-D5558BF4AEA3.jpeg';
import Typewriter from './Typewriter';

const HeroSection = () => {
  const [holoPos, setHoloPos] = useState({ x: 50, y: 50 });
  const projectLinks = [
    {
      title: 'GitHub',
      href: 'https://github.com/rishithmody',
      tag: 'github',
    },
    {
      title: 'Something called... Hercules',
      subtitle: 'coming soon',
      href: 'mailto:rishithmody@gmail.com?subject=Hercules',
      tag: 'reach out',
    },
    {
      title: 'cOMing S00n',
      subtitle: 'coming soon',
      href: '#home',
    },
  ];

  const handleHoloMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setHoloPos({ x, y });
  };

  const resetHolo = () => setHoloPos({ x: 50, y: 50 });

  return (
    <section id="home" className="relative overflow-hidden min-h-screen pt-20 px-6 md:px-12">
      <div className="grain-overlay" />
      {/* Top bar with info and name */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
        <div className="font-mono text-sm opacity-80">
          <span>tempe, arizona</span>
          <span className="mx-2">•</span>
          <span>asu cs '27</span>
          <span className="mx-2">•</span>
          <a href="mailto:rishithmody@gmail.com" className="hover:text-accent transition-colors">
            rishithmody@gmail.com
          </a>
        </div>
        <h1 className="text-hero animate-fade-up">
          RISHITH MODY
        </h1>
      </div>

      {/* Profile image centered with coming soon placeholders */}
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-10 mb-16">
        {/* Mobile: small squares (stacked, non-overlapping) */}
        <div className="flex md:hidden flex-col gap-3 mb-6 w-full items-center">
          {projectLinks.map((project, i) => (
            <a
              key={project.title}
              href={project.href}
              target={project.href.startsWith('http') ? '_blank' : undefined}
              rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
              className="project-card w-full max-w-[320px] overflow-hidden transition-transform duration-200 ease-out hover:scale-105 active:scale-100 border-2 border-black shadow-[14px_14px_0_#0a0a0f]"
            >
              <div className="w-full flex flex-col items-center gap-2 px-3 py-3 text-sm font-display font-semibold text-center">
                <span className="uppercase tracking-[0.16em] text-[12px]">{project.title}</span>
                <span className="text-[12px] text-muted-foreground font-mono">{project.subtitle}</span>
                <span className="px-2 py-1 text-[11px] uppercase tracking-[0.18em] border border-black bg-black text-white">
                  {project.tag}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Desktop: styled cards */}
        <div className="hidden md:flex flex-col gap-4 animate-fade-up stagger-1 absolute left-0 -translate-x-6 w-64">
          {projectLinks.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target={project.href.startsWith('http') ? '_blank' : undefined}
              rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
              className="project-card overflow-hidden transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[1.03] border-2 border-black shadow-[14px_14px_0_#0a0a0f]"
            >
              <div className="p-4 space-y-2 text-center">
                <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                <p className="font-mono text-xs text-muted-foreground font-semibold">{project.subtitle}</p>
                <span className="inline-block px-2 py-1 text-[11px] uppercase tracking-[0.18em] border border-black bg-black text-white">
                  {project.tag}
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="w-56 h-72 md:w-72 md:h-96 overflow-hidden animate-fade-up stagger-1">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Swiss typography artwork */}
        <div
          className="hidden md:block absolute right-0 translate-x-4 top-6 w-72 animate-fade-up stagger-2"
          aria-hidden="true"
          onMouseMove={handleHoloMove}
          onMouseLeave={resetHolo}
        >
          <div
            className="relative overflow-hidden border-2 border-black bg-white shadow-[14px_14px_0_#0a0a0f] transition-transform duration-150 will-change-transform"
            style={{
              transform: `perspective(1100px) rotateX(${(holoPos.y - 50) / 10}deg) rotateY(${(50 - holoPos.x) / 10}deg)`,
              background: `linear-gradient(135deg, #ffffff 0%, #f8fafc 45%, #eef2ff 100%)`,
            }}
          >
            <div
              className="absolute inset-0 opacity-25 mix-blend-lighten"
              style={{
                background: `radial-gradient(circle at ${holoPos.x}% ${holoPos.y}%, rgba(255,49,49,0.45), rgba(14,165,233,0.28), rgba(16,185,129,0.32))`,
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12px_12px,#ef4444_2px,transparent_2px)] opacity-15" />
            <div className="relative p-6 space-y-5">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.28em]">
                <span>benchmarks</span>
                <span className="h-[6px] w-16 bg-black" />
              </div>
              <div className="text-4xl leading-tight font-black uppercase tracking-tight space-y-1">
                <span className="text-[#ff3131] block">Just</span>
                <span className="block">A</span>
                <span className="block">Noraml Human</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 bg-[#ff3131] shadow-[6px_6px_0_#0a0a0f] rotate-[2deg]" />
                <div className="flex-1 text-xs font-mono uppercase tracking-[0.32em] leading-5">
                  Intel · ASU · Vision Pipelines
                </div>
              </div>
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em]">
                <span className="h-[10px] w-[10px] bg-black" />
                <span className="flex-1 h-[3px] bg-black" />
                <span className="text-[#ff3131]">Latency ↓</span>
                <span className="text-[#0ea5e9]">Throughput ↑</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current work */}
      <div className="text-center space-y-4 animate-fade-up stagger-2">
        <p className="text-xl md:text-2xl font-display flex justify-center">
          <Typewriter 
            words={[
              'benchmark performance intern @ Intel',
              'cs @ Arizona State University',
            ]}
            typingSpeed={80}
            deletingSpeed={50}
            pauseDuration={1200}
          />
        </p>
        <p className="text-lg md:text-xl font-display">
          optimizing AI/vision inference, decode pipelines, and systems performance
        </p>
        <div className="pt-8">
          <span className="status-badge">
            <span className="status-dot"></span>
            open to internships 
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
