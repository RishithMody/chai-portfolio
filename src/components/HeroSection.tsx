import profileImage from '@/assets/41AF9C30-2DB5-41A3-8853-D5558BF4AEA3.jpeg';
import Typewriter from './Typewriter';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-20 px-6 md:px-12">
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

      {/* Profile image centered */}
      <div className="flex justify-center mb-16">
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
