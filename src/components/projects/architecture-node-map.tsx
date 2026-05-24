"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface NodeMapProps {
  architecture: {
    inputs: string[];
    processing: string[];
    model: string[];
    decision: string[];
    output: string[];
  };
}

export function ArchitectureNodeMap({ architecture }: NodeMapProps) {
  const steps = [
    { id: "inputs", label: "Input Data", items: architecture.inputs },
    { id: "processing", label: "Processing", items: architecture.processing },
    { id: "model", label: "ML Model", items: architecture.model },
    { id: "decision", label: "Decision Layer", items: architecture.decision },
    { id: "output", label: "Output", items: architecture.output },
  ];

  return (
    <div className="py-12 overflow-x-auto no-scrollbar relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />
      
      <div className="flex items-start min-w-[1000px] justify-between gap-2 relative z-10">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="group relative flex flex-col items-center w-48"
            >
              <div className="mb-6 text-xs font-mono font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">{step.label}</div>
              
              <div className="w-full space-y-3 relative z-10">
                {step.items.map((item, i) => (
                  <div 
                    key={i} 
                    className="bg-card border border-border/60 p-4 rounded-xl text-sm font-medium text-center shadow-sm group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute top-10 inset-0 bg-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 -m-4 blur-xl" />
            </motion.div>
            
            {index < steps.length - 1 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 + 0.1 }}
                className="w-16 flex justify-center text-primary/50 relative mt-12"
              >
                <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent top-1/2 -translate-y-1/2" />
                <ArrowRight className="w-6 h-6 bg-background rounded-full z-10" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
