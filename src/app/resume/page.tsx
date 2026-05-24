import { Download, Mail, ExternalLink, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 flex items-center justify-center gap-4">
          <FileText className="w-10 h-10 text-primary" />
          Curriculum Vitae
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Comprehensive overview of my qualifications, optimized for both human review and ATS systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-foreground border-b border-border/50 pb-4">ATS Summary</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong>AI/ML Engineer</strong> specializing in designing, building, and deploying intelligent decision systems and predictive analytics pipelines. Proficient in Python, C++, and SQL, with hands-on experience in machine learning frameworks including Scikit-learn, TensorFlow, and XGBoost.
              </p>
              <p>
                Demonstrated ability to handle end-to-end ML lifecycles: from data extraction (SQL) and complex feature engineering to model training, evaluation, and deployment. Strong focus on practical business impact, reducing false positives, and optimizing resource efficiency.
              </p>
              <p>
                Key domains include anomaly detection (financial fraud), recommender systems (collaborative filtering & NLP), and time-series forecasting (geospatial risk estimation).
              </p>
            </div>
            
            <h3 className="text-lg font-semibold mt-8 mb-4 text-foreground">Core Competencies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Machine Learning Pipelines", "Predictive Analytics", "Feature Engineering", 
                "Data Visualization", "Statistical Modeling", "Cross-functional Collaboration"
              ].map(comp => (
                <div key={comp} className="flex items-center gap-3 text-sm text-muted-foreground bg-secondary/30 p-3 rounded-lg border border-border/30">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {comp}
                </div>
              ))}
            </div>
          </div>
          
          {/* Mock Embedded PDF View */}
          <div className="bg-secondary/10 border border-border/50 rounded-3xl p-4 md:p-8 flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <FileText className="w-20 h-20 text-muted-foreground/30 mb-6" />
            <div className="text-center space-y-4 relative z-10">
              <h3 className="text-xl font-medium text-foreground">Interactive Resume Preview</h3>
              <p className="text-muted-foreground max-w-sm mx-auto text-sm leading-relaxed">
                The visual resume preview requires a PDF plugin. Please download the full PDF to view the formatted version.
              </p>
              <button className="mt-4 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-all inline-flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-0.5">
                <Download className="w-4 h-4" /> Download PDF
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-card border border-border/50 rounded-3xl p-8 sticky top-28 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Contact & Links</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
              Available for full-time opportunities. Reach out to discuss how I can help build intelligent systems for your team.
            </p>
            
            <div className="space-y-4">
              <Link href="mailto:rahul@example.com" className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors group">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Email</div>
                  <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">rahul@example.com</div>
                </div>
              </Link>
              
              <Link href="https://www.linkedin.com/in/rahul-kadyan/" target="_blank" className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors group">
                <div className="font-medium text-foreground">LinkedIn</div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              
              <Link href="https://github.com/soulrahulrk" target="_blank" className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors group">
                <div className="font-medium text-foreground">GitHub</div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              
              <Link href="https://leetcode.com/u/j5Fa0igpi6/" target="_blank" className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors group">
                <div className="font-medium text-foreground">LeetCode</div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
