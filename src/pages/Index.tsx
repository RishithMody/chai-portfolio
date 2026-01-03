import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import PhotosSection from '@/components/PhotosSection';
import ContactSection from '@/components/ContactSection';
import PixelGrid from '@/components/PixelGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PixelGrid />
        <ProjectsSection />
        <PhotosSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
