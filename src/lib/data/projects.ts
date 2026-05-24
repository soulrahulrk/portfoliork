export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  impact: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  architecture: {
    inputs: string[];
    processing: string[];
    model: string[];
    decision: string[];
    output: string[];
  };
  details: {
    problemStatement: string;
    dataset: string;
    featureEngineering: string[];
    algorithms: string[];
    challenges: string;
    futureImprovements: string;
  };
}

export const projects: Project[] = [
  {
    id: "placement-llm",
    title: "Placement LLM – College Placement Management System",
    shortDescription: "LLM-powered platform for college placement cells to track and match student profiles.",
    fullDescription: "An end-to-end college placement management system that uses LLMs and semantic search to automatically track student profiles, placement statuses, and match students with visiting companies based on eligibility criteria, CGPA filters, and skill requirements.",
    impact: "Automated the entire student-company matching workflow using agentic LLMs.",
    tags: ["Python", "LangChain", "LangGraph", "FastAPI", "ChromaDB"],
    metrics: [
      { label: "Architecture", value: "Agentic" },
      { label: "Vector DB", value: "ChromaDB" },
      { label: "Framework", value: "FastAPI" }
    ],
    architecture: {
      inputs: ["Student Profiles", "Company Requirements"],
      processing: ["LLM Parsing", "Semantic Extraction"],
      model: ["LangChain Agents", "Vector Embeddings"],
      decision: ["Eligibility Matching", "Skill Assessment"],
      output: ["Matched Candidates", "Placement Tracking Dashboard"]
    },
    details: {
      problemStatement: "College placement cells manually track hundreds of student profiles and match them against complex company eligibility criteria, which is error-prone and time-consuming.",
      dataset: "Student academic records, resumes, and visiting company job descriptions.",
      featureEngineering: [
        "Extracted structured skills from unstructured resumes using LLMs",
        "Generated vector embeddings for job descriptions"
      ],
      algorithms: ["LangGraph Agentic Workflows", "Semantic Search"],
      challenges: "Ensuring 100% accuracy in eligibility filtering so no student is wrongly disqualified or qualified.",
      futureImprovements: "Implement automated interview scheduling and feedback collection through the platform."
    }
  },
  {
    id: "recommendation-engine",
    title: "SHL Assessment Recommendation Engine",
    shortDescription: "Predictive recommendation system for candidate assessments.",
    fullDescription: "An intelligent recommendation system using semantic search and LLM re-ranking, designed to suggest the optimal assessment tests for job candidates.",
    impact: "Improved placement accuracy by 35% and achieved sub-100ms query times.",
    tags: ["Python", "LangChain", "Vector DB", "FastAPI"],
    metrics: [
      { label: "Accuracy Gain", value: "35%" },
      { label: "Profiles", value: "10K+" },
      { label: "Query Time", value: "<100ms" }
    ],
    architecture: {
      inputs: ["Candidate Profiles", "Job Descriptions"],
      processing: ["Vector Embeddings", "Semantic Search"],
      model: ["ChromaDB", "LLM Re-ranking"],
      decision: ["Relevance Scoring"],
      output: ["Top Recommended Assessments"]
    },
    details: {
      problemStatement: "Selecting the most predictive assessment tests for specialized technical roles is crucial for accurate candidate evaluation.",
      dataset: "Proprietary candidate profiles and historical assessment data.",
      featureEngineering: [
        "Implemented vector embeddings with ChromaDB for 10K+ profiles"
      ],
      algorithms: ["Semantic Search", "LLM Re-ranking"],
      challenges: "Handling 100+ concurrent requests efficiently with authentication and rate limiting.",
      futureImprovements: "Incorporate active learning to continuously update the model based on recruiter feedback and long-term candidate retention data."
    }
  },
  {
    id: "voyage-estimation",
    title: "AI Voyage Estimation & Decision System",
    shortDescription: "Predictive analytics for maritime shipping routes and risks.",
    fullDescription: "A rule-based AI and decision pipeline designed to estimate voyage durations, fuel consumption, and integrate weather and port fees to optimize maritime routes.",
    impact: "Optimized routes and reduced costs by 18%, processing 1000+ scenarios with 92% accuracy.",
    tags: ["Python", "FastAPI", "MCP"],
    metrics: [
      { label: "Cost Reduction", value: "18%" },
      { label: "Accuracy", value: "92%" },
      { label: "Scenarios", value: "1000+" }
    ],
    architecture: {
      inputs: ["Weather Data", "Fuel Costs", "Port Fees"],
      processing: ["Rule-based AI Engine"],
      model: ["Microservices Architecture"],
      decision: ["Route Optimization Pipeline"],
      output: ["Automated Decision Support"]
    },
    details: {
      problemStatement: "Maritime voyage estimation requires complex integration of weather, fuel costs, and port fees to find the most cost-effective routes.",
      dataset: "Real-time weather APIs, maritime fuel cost indices, and port fee schedules.",
      featureEngineering: [
        "Engineered real-time data pipelines for dynamic weather updates"
      ],
      algorithms: ["Rule-based Heuristics", "Optimization Algorithms"],
      challenges: "Engineered microservices architecture with FastAPI for real-time analysis and automated decision support.",
      futureImprovements: "Integrate LLMs via MCP for natural language querying of voyage data and dynamic risk analysis."
    }
  }
];
