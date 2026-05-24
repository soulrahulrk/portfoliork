import { Hero } from "@/components/dashboard/hero";
import { LiveMetrics } from "@/components/dashboard/live-metrics";
import { ProjectCards } from "@/components/dashboard/project-cards";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <LiveMetrics />
      <ProjectCards />
    </div>
  );
}
