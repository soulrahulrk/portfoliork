import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import { ArchitectureNodeMap } from "@/components/projects/architecture-node-map";
import { ArrowLeft, CheckCircle2, Cpu, Database, Network } from "lucide-react";
import Link from "next/link";

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) return notFound();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <Link href="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Systems
      </Link>
      
      {/* Header */}
      <div className="mb-16">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-mono px-3 py-1 rounded bg-secondary text-primary border border-primary/20">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{project.title}</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl leading-relaxed">
          {project.fullDescription}
        </p>
      </div>

      {/* System Architecture Viewer */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Network className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">System Architecture View</h2>
        </div>
        <div className="bg-secondary/20 border border-border/50 rounded-3xl p-8 overflow-hidden relative shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
          <ArchitectureNodeMap architecture={project.architecture} />
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-6 text-primary">
              <Database className="w-5 h-5" />
              <h3 className="text-xl font-medium text-foreground">Dataset & Engineering</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 bg-secondary/30 p-4 rounded-xl border border-border/50">{project.details.dataset}</p>
            <ul className="space-y-4">
              {project.details.featureEngineering.map((feature, i) => (
                <li key={i} className="flex gap-4 text-muted-foreground items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6 text-primary">
              <Cpu className="w-5 h-5" />
              <h3 className="text-xl font-medium text-foreground">Algorithms & Modeling</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.details.algorithms.map((algo, i) => (
                <div key={i} className="px-5 py-3 rounded-xl bg-card border border-border text-foreground text-sm font-medium shadow-sm">
                  {algo}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-12">
          <section className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Network className="w-32 h-32 text-primary" />
            </div>
            <h3 className="text-xl font-medium text-foreground mb-4 relative z-10">Real-world Impact</h3>
            <p className="text-lg text-primary/90 leading-relaxed mb-10 relative z-10">{project.impact}</p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-primary/20 relative z-10">
              {project.metrics.map(m => (
                <div key={m.label}>
                  <div className="text-3xl font-mono font-medium text-foreground mb-2">{m.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 rounded-3xl border border-border/50 bg-secondary/10">
            <h3 className="text-xl font-medium text-foreground mb-4">Challenges & Learnings</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">{project.details.challenges}</p>
            
            <h4 className="font-medium text-foreground mb-3 text-primary">Future Improvements</h4>
            <p className="text-muted-foreground leading-relaxed">{project.details.futureImprovements}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
