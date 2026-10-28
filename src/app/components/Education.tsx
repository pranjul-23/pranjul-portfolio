import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3">
        <GraduationCap className="w-6 h-6 text-indigo-400" />
        <h2 className="text-2xl font-semibold text-white tracking-tight">
          Education
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-1"
          >
            <h3 className="text-base font-semibold text-white">
              {item.degree}
            </h3>
            <p className="text-sm text-indigo-400">{item.institution}</p>
            <div className="flex items-center justify-between pt-2 text-xs font-mono text-slate-500">
              <span>{item.location}</span>
              <span>{item.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
