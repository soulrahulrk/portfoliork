"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter({ target, duration = 2 }: { target: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
}

export function LiveMetrics() {
  const metrics = [
    { label: "ML Models Built", value: 14, suffix: "+" },
    { label: "Datasets Processed", value: 2, suffix: "M+" },
    { label: "Peak Accuracy", value: 99, suffix: "%" },
    { label: "Prediction Systems", value: 3, suffix: "" },
  ];

  return (
    <section className="py-12 border-y border-border/40 bg-secondary/10 backdrop-blur-md relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-border/50">
          {metrics.map((metric, i) => (
            <motion.div 
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-mono font-medium text-foreground mb-3 flex items-baseline tracking-tight">
                <Counter target={metric.value} />
                <span className="text-2xl text-primary/80 font-sans ml-1">{metric.suffix}</span>
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
