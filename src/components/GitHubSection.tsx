import { Github } from 'lucide-react';

const GITHUB_USER = 'RishithMody';

const GitHubSection = () => {
  return (
    <section id="github" className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-section-title mb-10 flex items-center gap-3">
          <Github className="w-8 h-8" />
          github activity
        </h2>

        {/* Contribution graph */}
        <div className="rounded-xl border border-border bg-card p-4 md:p-6 overflow-x-auto">
          <img
            src={`https://ghchart.rshah.org/16a34a/${GITHUB_USER}`}
            alt={`${GITHUB_USER} GitHub contribution graph`}
            className="w-full min-w-[640px]"
            loading="lazy"
          />
        </div>

        <a
          href={`https://github.com/${GITHUB_USER}`}
          className="inline-flex items-center gap-2 mt-8 font-mono text-sm underline underline-offset-4 hover:text-accent transition-colors"
        >
          <Github className="w-4 h-4" />
          @{GITHUB_USER} ↗
        </a>
      </div>
    </section>
  );
};

export default GitHubSection;
