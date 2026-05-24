import { projects } from "@/lib/data/projects";
import Link from "next/link";
import { ArrowUpRight, Cpu } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-4">
          <Cpu className="w-10 h-10 text-primary" />
          Systems Architecture
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Detailed technical breakdowns of deployed machine learning systems, predictive analytics engines, and intelligent pipelines.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative rounded-3xl border border-border/50 bg-card/50 overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_40px_rgba(59,130,246,0.05)]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row gap-8 md:items-center">
              <div className="flex-1 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-3 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl font-semibold group-hover:text-primary transition-colors tracking-tight">{project.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{project.fullDescription}</p>
              </div>
              <div className="flex-shrink-0 md:w-64 flex flex-col justify-between h-full space-y-8 md:pl-8 md:border-l border-border/50">
                <div className="space-y-5">
                  {project.metrics.map(m => (
                    <div key={m.label} className="border-l-2 border-primary pl-4">
                      <div className="text-2xl font-mono text-foreground">{m.value}</div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
                <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background hover:bg-primary hover:text-white font-medium transition-all w-full justify-center group/btn shadow-md">
                  View Architecture <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
