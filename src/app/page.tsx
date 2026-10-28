import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Skills } from "@/app/components/Skills";
import { Experience } from "@/app/components/Experience";
import { Projects } from "@/app/components/Projects";
import { Education } from "@/app/components/Education";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
