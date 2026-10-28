import { skills } from "@/data/portfolio";
import { Code2 } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <div className="flex items-center gap-3">
        <Code2 className="w-6 h-6 text-indigo-400" />
        <h2 className="text-2xl font-semibold text-white tracking-tight">
          Technical Capabilities
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="p-6 rounded-xl bg-slate-900/60 border border-slate-800"
          >
            <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
