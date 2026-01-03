import profileImage from '@/assets/profile-hero.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-20 px-6 md:px-12">
      {/* Top bar with info and name */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
        <div className="font-mono text-sm opacity-80">
          <span>24</span>
          <span className="mx-2">•</span>
          <span>san francisco</span>
          <span className="mx-2">•</span>
          <span>stanford</span>
          <span className="mx-2">•</span>
          <a href="mailto:hello@portfolio.dev" className="hover:text-accent transition-colors">
            hello@portfolio.dev
          </a>
        </div>
        <h1 className="text-hero animate-fade-up">
          ALEX CHEN
        </h1>
      </div>

      {/* Profile image centered */}
      <div className="flex justify-center mb-16">
        <div className="w-48 h-64 md:w-64 md:h-80 overflow-hidden animate-fade-up stagger-1">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      {/* Current work */}
      <div className="text-center space-y-4 animate-fade-up stagger-2">
        <p className="text-xl md:text-2xl font-display">
          building AI developer tools @ <span className="font-semibold">Nexus Labs (YC25)</span>
        </p>
        <p className="text-lg md:text-xl font-display">
          &
        </p>
        <p className="text-xl md:text-2xl font-display">
          building <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 hover:bg-accent hover:text-accent-foreground transition-colors">Horizon.ai ↗</a>
        </p>
        
        <div className="pt-8">
          <span className="status-badge">
            <span className="status-dot"></span>
            open to work
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
