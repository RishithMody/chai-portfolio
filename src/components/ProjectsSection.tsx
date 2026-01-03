import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  award: string;
  venue: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'AeroDocs',
    award: 'RAG knowledge base & VPC for Honeywell',
    venue: 'Next.js, TypeScript, Python, Ollama LLaMA 3.2, YOLOv8',
    link: '#',
  },
  {
    title: 'Object Detecting Vest',
    award: 'Assistive computer vision vest for the visually impaired',
    venue: 'Python, Raspberry Pi, mobile companion app',
    link: '#',
  },
  {
    title: "Schrodinger's AI",
    award: 'Hallucination-resistant chatbot with factual verification',
    venue: 'Next.js, Node.js, MongoDB, AWS, Vercel, Docker',
    link: '#',
  },
  {
    title: 'Orbit',
    award: 'Real-time travel planning with live flight/booking data',
    venue: 'React, TypeScript, Gemini 1.5 Flash, FlightLabs API',
    link: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-section-title mb-4">featured projects</h2>
        <p className="font-mono text-muted-foreground mb-12">what i've built</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="project-card group"
            >
              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="font-mono text-sm text-accent mb-1">{project.award}</p>
              <p className="font-mono text-xs text-muted-foreground">{project.venue}</p>
              <div className="mt-4 flex items-center gap-2 font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                see here <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
