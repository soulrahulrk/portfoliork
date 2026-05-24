"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, Skill } from "@/lib/data/skills";
import { projects } from "@/lib/data/projects";
import { Terminal, Database, BrainCircuit, Wrench, Code2, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const categories = ["Languages", "Machine Learning", "Libraries", "Tools", "Databases"] as const;

const categoryIcons = {
  "Languages": Code2,
  "Machine Learning": BrainCircuit,
  "Libraries": Terminal,
  "Tools": Wrench,
  "Databases": Database,
};

export default function SkillsPage() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <div className="container mx-auto px-4 py-20 max-w-7xl flex flex-col md:flex-row gap-8 relative">
      <div className={cn("flex-1 transition-all duration-300", selectedSkill ? "md:mr-[400px]" : "")}>
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-4">
            <BrainCircuit className="w-10 h-10 text-primary" />
            AI Capability Matrix
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A comprehensive mapping of technical capabilities to practical deployments and systems.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map(category => {
            const catSkills = skills.filter(s => s.category === category);
            if (catSkills.length === 0) return null;
            const Icon = categoryIcons[category];

            return (
              <section key={category}>
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-border/50">
                  <Icon className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-medium tracking-tight">{category}</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {catSkills.map(skill => (
                    <button
                      key={skill.name}
                      onClick={() => setSelectedSkill(skill)}
                      className={cn(
                        "text-left p-5 rounded-2xl border transition-all duration-300",
                        selectedSkill?.name === skill.name 
                          ? "bg-primary/10 border-primary shadow-[0_0_20px_rgba(59,130,246,0.15)] -translate-y-1" 
                          : "bg-card/50 border-border/50 hover:border-primary/40 hover:bg-card hover:-translate-y-1"
                      )}
                    >
                      <div className="font-medium text-foreground mb-1 text-lg">{skill.name}</div>
                      <div className="text-xs font-mono text-muted-foreground">{skill.projects.length} System{skill.projects.length !== 1 && 's'}</div>
                    </button>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* Side Panel Drawer */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full md:w-[450px] bg-background/95 backdrop-blur-xl border-l border-border/50 z-50 p-8 overflow-y-auto shadow-2xl"
          >
            <button 
              onClick={() => setSelectedSkill(null)}
              className="absolute top-8 right-8 p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="mt-12">
              <div className="text-xs font-mono text-primary mb-3 uppercase tracking-widest px-3 py-1 bg-primary/10 rounded-full inline-block border border-primary/20">
                {selectedSkill.category}
              </div>
              <h2 className="text-4xl font-bold mb-10 tracking-tight">{selectedSkill.name}</h2>
              
              <div className="space-y-10">
                <section>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                    <Terminal className="w-4 h-4" /> Practical Usage
                  </h3>
                  <p className="text-foreground leading-relaxed bg-secondary/30 p-5 rounded-2xl border border-border/50 text-sm md:text-base">
                    {selectedSkill.usage}
                  </p>
                </section>

                <section>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                    <Database className="w-4 h-4" /> Deployed Systems
                  </h3>
                  {selectedSkill.projects.length > 0 ? (
                    <div className="space-y-4">
                      {selectedSkill.projects.map(projectId => {
                        const project = projects.find(p => p.id === projectId);
                        if (!project) return null;
                        return (
                          <Link 
                            key={projectId} 
                            href={`/projects/${projectId}`}
                            className="block p-5 rounded-2xl bg-card border border-border/60 hover:border-primary/50 transition-all hover:shadow-lg group"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{project.title}</h4>
                              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{project.shortDescription}</p>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground italic bg-secondary/20 p-4 rounded-xl border border-border/30">
                      No public systems listed for this capability.
                    </p>
                  )}
                </section>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mobile Overlay Backdrop */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
            className="md:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
