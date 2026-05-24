export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
}

export const experience: Experience[] = [
  {
    id: "grades-global",
    company: "Grades Global",
    role: "Data Science Intern",
    duration: "Jul 2024 - Aug 2024",
    description: "Led data cleaning, exploratory data analysis, and predictive modeling initiatives to extract actionable business insights from raw educational data.",
    achievements: [
      "Built ensemble models (Random Forest, XGBoost) achieving 91% accuracy for business forecasting.",
      "Engineered data pipelines processing 500K+ records with advanced feature engineering techniques.",
      "Created Power BI dashboards visualizing 40+ KPIs, reducing analysis time by 45%."
    ]
  },
  {
    id: "imarticus-learning",
    company: "Imarticus Learning",
    role: "Machine Learning Intern",
    duration: "Jul 2023 - Aug 2023",
    description: "Collaborated with a cross-functional team to develop and deploy predictive analytics models for financial risk assessment.",
    achievements: [
      "Developed ML solutions for customer churn prediction achieving 85% precision.",
      "Implemented CI/CD pipelines for ML models, reducing deployment time by 40%.",
      "Presented technical findings through data visualizations to senior leadership."
    ]
  }
];
