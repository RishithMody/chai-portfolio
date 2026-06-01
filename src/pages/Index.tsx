import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import PhotosSection from '@/components/PhotosSection';
import ContactSection from '@/components/ContactSection';
import GitHubSection from '@/components/GitHubSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <GitHubSection />
        <ProjectsSection />
        <PhotosSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
