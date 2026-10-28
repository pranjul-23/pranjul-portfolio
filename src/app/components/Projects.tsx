import { projects } from "@/data/portfolio";
import { Terminal, ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <div className="flex items-center gap-3">
        <Terminal className="w-6 h-6 text-indigo-400" />
        <h2 className="text-2xl font-semibold text-white tracking-tight">
          Featured Projects & Architecture
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {proj.title}
                </h3>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {proj.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-6">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
