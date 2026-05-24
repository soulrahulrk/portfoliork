"use client";
import { experience } from "@/lib/data/experience";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl relative">
      <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none -z-10">
        <Briefcase className="w-full h-full text-primary" />
      </div>

      <div className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 flex items-center justify-center gap-4">
          <Briefcase className="w-10 h-10 text-primary" />
          Experience Timeline
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Professional roles, internships, and key achievements in building intelligent systems and data pipelines.
        </p>
      </div>

      <div className="relative border-l-2 border-primary/20 ml-4 md:ml-8 md:pl-12 space-y-16">
        {experience.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[23px] md:-left-[55px] top-2 h-4 w-4 rounded-full bg-primary ring-4 ring-background shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            
            <div className="bg-card/30 border border-border/50 rounded-3xl p-8 hover:border-primary/40 transition-colors shadow-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.05)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h2>
                    <div className="text-lg text-primary font-medium">{exp.company}</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-xl border border-border/50 w-fit">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-8 bg-background/50 p-4 rounded-xl border border-border/30">
                  {exp.description}
                </p>
                
                <div className="space-y-4">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-4 text-foreground/80 items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
