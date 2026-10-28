import { personalInfo } from "@/data/portfolio";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mono text-sm font-semibold tracking-wider text-indigo-400">
          &lt;{personalInfo.name.replace(/\s+/g, "")} /&gt;
        </span>
        <nav className="flex items-center gap-6 text-sm text-slate-400">
          <a href="#about" className="hover:text-slate-100 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-slate-100 transition-colors">
            Skills
          </a>
          <a
            href="#experience"
            className="hover:text-slate-100 transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-slate-100 transition-colors"
          >
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
}
