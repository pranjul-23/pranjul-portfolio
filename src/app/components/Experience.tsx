import { experiences } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="space-y-8">
      <div className="flex items-center gap-3">
        <Briefcase className="w-6 h-6 text-indigo-400" />
        <h2 className="text-2xl font-semibold text-white tracking-tight">
          Professional History
        </h2>
      </div>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
              <div>
                <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                <p className="text-sm text-indigo-400">
                  {exp.company}
                  {exp.client && (
                    <span className="text-slate-400 font-normal">
                      {" "}
                      ({exp.client})
                    </span>
                  )}
                </p>
                {exp.location && (
                  <p className="text-xs text-slate-500 mt-0.5">
                    {exp.location}
                  </p>
                )}
              </div>
              <span className="text-xs font-mono text-slate-500 whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <ul className="space-y-2 list-disc list-inside text-sm text-slate-400">
              {exp.highlights.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
