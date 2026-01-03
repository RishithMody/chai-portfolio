const skills = [
  'i code',
  'i blog',
  'i design',
  'i photograph',
  'i play soccer',
  'i travel',
  "that's life",
];

const experiences = [
  { company: 'Google', role: 'Software Engineer Intern' },
  { company: 'Meta', role: 'Full Stack Developer' },
  { company: 'Stanford', role: 'Research Assistant' },
  { company: 'Y Combinator', role: 'Startup Founder' },
  { company: 'AWS', role: 'Solutions Architect Intern' },
];

const AboutSection = () => {
  return (
    <section id="work" className="py-24">
      {/* Dark section with skills */}
      <div className="section-dark py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-section-title mb-8">
              building<br />
              <span className="accent-highlight">software at scale.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            {skills.map((skill, index) => (
              <p
                key={skill}
                className={`text-xl md:text-2xl font-display py-2 ${
                  index % 2 === 1 ? 'accent-highlight' : ''
                }`}
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Experience section */}
      <div className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-sm mb-8 opacity-70">I've worked at:</p>
          <div className="flex flex-wrap gap-4 mb-12">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="project-card"
              >
                <h3 className="font-display font-semibold">{exp.company}</h3>
                <p className="font-mono text-sm text-muted-foreground">{exp.role}</p>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="font-mono text-sm underline underline-offset-4 hover:text-accent transition-colors"
          >
            my resume →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
