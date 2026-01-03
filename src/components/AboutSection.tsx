import Typewriter from './Typewriter';

const skills = [
  'i benchmark cpus/gpus',
  'i optimize ai inference',
  'i ship full-stack apps',
  'i tune models & tokenizers',
  'i love hackathons',
];

const experiences = [
  { 
    company: 'Intel Corporation', 
    role: 'Benchmark Performance Intern (May 2025 - Present)',
    description: 'Built benchmarking pipelines for CPUs/GPUs/AI accelerators using GStreamer, OpenCV, ONNX Runtime, PyTorch, and TensorRT; optimized inference via quantization (FP32/BF16/INT8) and vLLM/AMD Quark; performed real-time system analysis with rt-tests and tuning patches.',
  },
  { 
    company: 'VOVANCE Ltd', 
    role: 'Software Developer (May 2024 - Aug 2024)',
    description: 'Developed RAG pipelines with LangChain + FAISS; improved tokenizer/preprocessing to boost accuracy; shipped scalable backends with FastAPI/Express and optimized SQL/async to raise throughput; contributed reviews and documentation.',
  },
  { 
    company: 'ASU - Ask A Biologist', 
    role: 'Software Developer (Sep 2024 - Dec 2024)',
    description: 'Built a custom crawler to migrate legacy content to Drupal; optimized migration scripts for accuracy and minimal downtime while collaborating across teams to enhance functionality and UX.',
  },
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
            <p className="text-3xl md:text-5xl font-display min-h-[60px]">
              <Typewriter 
                words={skills} 
                typingSpeed={80} 
                deletingSpeed={40} 
                pauseDuration={1500} 
              />
            </p>
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
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 font-mono text-sm">
            <a
              href="https://linkedin.com/in/rishith-mody-9a481a248"
              className="underline underline-offset-4 hover:text-accent transition-colors"
            >
              LinkedIn ↗
            </a>
            <span className="text-muted-foreground">/</span>
            <a
              href="/RishithModyResume-internal.pdf"
              className="underline underline-offset-4 hover:text-accent transition-colors"
            >
              Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
