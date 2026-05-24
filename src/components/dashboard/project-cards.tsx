"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import { Activity, ArrowUpRight, BarChart3, Network } from "lucide-react";
import { useRoleStore } from "@/store/role-store";

const iconMap = {
  "placement-llm": Activity,
  "recommendation-engine": Network,
  "voyage-estimation": BarChart3,
};

export function ProjectCards() {
  const { activeRole } = useRoleStore();

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Active Systems
          </h2>
          <Link href="/projects" className="text-sm text-primary hover:underline flex items-center gap-1 group">
            View All Architecture <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = iconMap[project.id as keyof typeof iconMap] || Activity;
            
            return (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="group relative h-full flex flex-col p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                      <div className="p-3 rounded-xl bg-secondary border border-border text-primary group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-8 flex-grow leading-relaxed">{project.shortDescription}</p>
                    
                    <div className="pt-6 border-t border-border/50">
                      {activeRole === "technical" ? (
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-secondary text-muted-foreground border border-border/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : activeRole === "recruiter" ? (
                        <div className="text-sm text-foreground">
                          <span className="text-primary font-medium">Impact: </span>
                          {project.impact.substring(0, 60)}...
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-4">
                          {project.metrics.slice(0, 2).map(m => (
                            <div key={m.label}>
                              <div className="text-lg font-mono text-foreground">{m.value}</div>
                              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
