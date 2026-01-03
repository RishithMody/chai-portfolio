import profileImage from '@/assets/41AF9C30-2DB5-41A3-8853-D5558BF4AEA3.jpeg';
import Typewriter from './Typewriter';

const HeroSection = () => {
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
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-full max-w-[240px] h-14 rounded-xl border border-white/12 bg-gradient-to-br from-black via-zinc-900 to-black text-primary-foreground shadow-[0_10px_20px_-18px_rgba(0,0,0,0.8)] transition-transform duration-200 ease-out hover:scale-105 active:scale-105 overflow-hidden"
            >
              <div className="h-full w-full flex items-center justify-between px-3 text-[10px] font-mono uppercase tracking-[0.12em]">
                <span>coming soon</span>
                <span className="text-xs text-accent">0{i + 1}</span>
              </div>
              <div className="mt-0.5 h-[2px] w-full bg-white/10 opacity-60 rounded-sm transition-all duration-200 hover:h-2.5" />
            </div>
          ))}
        </div>

        {/* Desktop: styled cards */}
        <div className="hidden md:flex flex-col gap-4 animate-fade-up stagger-1 absolute left-0 -translate-x-6 w-64">
          {['something called... Hercules', 'coming soon', "something, haven't thought abt it"].map((text, i) => (
            <div
              key={i}
              className="project-card bg-black text-primary-foreground rounded-xl overflow-hidden transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[1.03] border border-white/10 shadow-[0_18px_38px_-16px_rgba(0,0,0,0.9)]"
            >
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.14em] text-accent mb-2">
                <span>coming soon</span>
                <span>0{i + 1}</span>
              </div>
              <p className="font-display text-lg leading-tight">{text}</p>
              <div className="mt-3 h-16 w-full bg-gradient-to-r from-white/5 via-white/2 to-white/5 opacity-60 rounded-md border border-white/10 transition-all duration-300 hover:opacity-90 hover:h-20" />
            </div>
          ))}
        </div>
        <div className="w-56 h-72 md:w-72 md:h-96 overflow-hidden animate-fade-up stagger-1">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
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
          optimizing AI/vision inference, RAG pipelines, and systems performance
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
