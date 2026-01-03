import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  award: string;
  venue: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'CodeSync',
    award: 'winner at Harvard',
    venue: 'HackHarvard 2024',
    link: '#',
  },
  {
    title: 'NeuralDocs',
    award: 'winner at Stanford',
    venue: 'TreeHacks 2024',
    link: '#',
  },
  {
    title: 'ChainVote',
    award: 'winner at Princeton',
    venue: 'HackPrinceton 2023',
    link: '#',
  },
  {
    title: 'HealthAI',
    award: 'winner at MIT',
    venue: 'HackMIT 2023',
    link: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-section-title mb-4">i love hackathons</h2>
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
