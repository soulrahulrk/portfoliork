export interface Skill {
  name: string;
  category: "Languages" | "Machine Learning" | "Libraries" | "Tools" | "Databases";
  projects: string[]; // Project IDs
  usage: string;
}

export const skills: Skill[] = [
  // Languages
  { name: "Python", category: "Languages", projects: ["placement-llm", "recommendation-engine", "voyage-estimation"], usage: "Core language for ML pipelines, data processing, and scripting." },
  { name: "SQL", category: "Languages", projects: ["recommendation-engine"], usage: "Data extraction and aggregation from relational databases." },
  { name: "C++", category: "Languages", projects: [], usage: "High-performance algorithmic implementations and competitive programming." },
  { name: "HTML/CSS", category: "Languages", projects: [], usage: "Frontend visualization and web integration." },
  
  // Machine Learning
  { name: "LangChain & LangGraph", category: "Machine Learning", projects: ["placement-llm", "recommendation-engine"], usage: "Building agentic workflows and semantic search pipelines." },
  { name: "Scikit-learn", category: "Machine Learning", projects: [], usage: "Model training, evaluation metrics, and pipeline creation." },
  { name: "TensorFlow", category: "Machine Learning", projects: ["recommendation-engine"], usage: "Deep learning models." },
  { name: "Deep Learning", category: "Machine Learning", projects: ["recommendation-engine", "voyage-estimation"], usage: "LSTM for time-series and Neural Collaborative Filtering." },
  { name: "NLP", category: "Machine Learning", projects: ["placement-llm", "recommendation-engine"], usage: "Semantic extraction and text embeddings." },
  
  // Libraries
  { name: "Pandas & NumPy", category: "Libraries", projects: ["voyage-estimation"], usage: "Data manipulation, cleaning, and time-series aggregation." },
  { name: "OpenCV", category: "Libraries", projects: [], usage: "Computer vision and image processing tasks." },
  { name: "Matplotlib & Seaborn", category: "Libraries", projects: [], usage: "Exploratory data analysis and metric visualization." },
  
  // Tools
  { name: "FastAPI", category: "Tools", projects: ["placement-llm", "recommendation-engine", "voyage-estimation"], usage: "Building high-performance REST APIs." },
  { name: "Docker", category: "Tools", projects: [], usage: "Containerization and deployment." },
  { name: "Git", category: "Tools", projects: ["placement-llm", "recommendation-engine", "voyage-estimation"], usage: "Version control and collaborative development." },
  { name: "Power BI", category: "Tools", projects: [], usage: "Business intelligence reporting and dashboards." },
  { name: "Jupyter & VS Code", category: "Tools", projects: ["placement-llm", "recommendation-engine"], usage: "Interactive model prototyping and code development." },
  
  // Databases
  { name: "ChromaDB (Vector DB)", category: "Databases", projects: ["placement-llm", "recommendation-engine"], usage: "Vector database for fast semantic search and embeddings." },
  { name: "PostgreSQL & MySQL", category: "Databases", projects: [], usage: "Relational data schema design and complex querying." }
];
