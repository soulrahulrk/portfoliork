"use client";

import { motion } from "framer-motion";
import { useRoleStore } from "@/store/role-store";

export function Hero() {
  const { activeRole } = useRoleStore();
  
  return (
    <section className="pt-20 pb-16 px-4 md:pt-32 md:pb-24">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6 text-primary">
            <span className="h-px w-10 bg-primary/50" />
            <span className="text-sm font-mono tracking-widest uppercase">System Online // AI/ML Engineer</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Rahul Kadyan
          </h1>
          <p className="text-xl md:text-3xl text-muted-foreground leading-snug font-light">
            Aspiring AI/ML Engineer building LLM-powered applications, recommendation systems, and predictive models. Strong foundation in Python, ML frameworks, and API development with <span className="text-primary font-medium">1020+ LeetCode problems solved</span>.
          </p>
          
          {activeRole === "recruiter" && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }}
              className="mt-10 p-4 rounded-lg bg-primary/5 border border-primary/20 text-sm text-foreground flex gap-4 items-center max-w-2xl"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              <span>Actively seeking full-time AI/ML Engineering roles. Fast-tracking to the Experience and Resume sections.</span>
            </motion.div>
          )}

          {activeRole === "technical" && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }}
              className="mt-10 flex gap-4 text-sm font-mono text-muted-foreground"
            >
              <span className="flex items-center gap-2"><span className="text-primary">❯</span> Python, C++</span>
              <span className="flex items-center gap-2"><span className="text-primary">❯</span> PyTorch, Scikit-learn</span>
              <span className="flex items-center gap-2"><span className="text-primary">❯</span> XGBoost, NLP</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
