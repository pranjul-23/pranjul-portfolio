import { personalInfo } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/app/components/Icons";
import { Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="pt-8 pb-4 space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        Available for Lead & Senior Engineering Opportunities
      </div>
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
        {personalInfo.name}
      </h1>
      <p className="text-xl sm:text-2xl font-medium text-indigo-400">
        {personalInfo.title}
      </p>
      <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
        {personalInfo.summary}
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-sm"
        >
          <Mail className="w-4 h-4" /> Get in Touch
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-sm transition-colors"
        >
          <LinkedinIcon className="w-4 h-4" /> LinkedIn
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-sm transition-colors"
        >
          <GithubIcon className="w-4 h-4" /> GitHub
        </a>
      </div>
    </section>
  );
}
