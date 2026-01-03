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
      <div className="relative flex justify-center items-center gap-10 mb-16">
        {/* Mobile: small squares */}
        <div className="flex md:hidden flex-col gap-3 absolute left-4 top-1/2 -translate-y-1/2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-14 h-14 rounded-lg bg-black/90 border border-primary/40 transition-transform duration-200 hover:scale-110 active:scale-100"
            />
          ))}
        </div>

        {/* Desktop: styled cards */}
        <div className="hidden md:flex flex-col gap-4 animate-fade-up stagger-1 absolute left-0 -translate-x-6 w-64">
          {['ok', 'coming soon', 'seriously—something is coming'].map((text, i) => (
            <div
              key={i}
              className="project-card bg-gradient-to-br from-black via-zinc-950 to-black text-primary-foreground/90 rounded-xl shadow-[0_18px_38px_-16px_rgba(0,0,0,0.9)] transition-transform duration-200 hover:scale-102 active:scale-100"
            >
              <p className="font-display text-lg leading-tight">{text}</p>
              <p className="font-mono text-xs text-muted-foreground mt-2 uppercase tracking-[0.18em]">
                placeholder
              </p>
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
