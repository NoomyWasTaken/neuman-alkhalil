export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Senior AI Engineer",
    company: "TechCorp AI",
    location: "San Francisco, CA",
    startDate: "Jan 2023",
    endDate: "Present",
    description: "Lead the design and deployment of production ML systems serving millions of users. Architect scalable inference pipelines and mentor junior engineers.",
    highlights: [
      "Designed and deployed a real-time recommendation engine processing 50M+ events/day",
      "Reduced model inference latency by 40% through quantization and custom serving infrastructure",
      "Led a team of 5 engineers to deliver a multi-modal AI search feature",
    ],
    technologies: ["Python", "PyTorch", "Kubernetes", "AWS", "FastAPI"],
  },
  {
    id: "2",
    role: "Machine Learning Engineer",
    company: "DataScale Inc.",
    location: "New York, NY",
    startDate: "Jun 2021",
    endDate: "Dec 2022",
    description: "Built end-to-end ML pipelines for NLP and computer vision applications. Collaborated with product and data teams to ship data-driven features.",
    highlights: [
      "Built an NLP pipeline for document classification achieving 94% F1 score",
      "Developed automated model retraining workflows with MLflow and Airflow",
      "Implemented A/B testing framework for ML model deployment",
    ],
    technologies: ["Python", "TensorFlow", "Docker", "GCP", "Spark"],
  },
  {
    id: "3",
    role: "Software Engineer — AI/ML",
    company: "InnovateLab",
    location: "Boston, MA",
    startDate: "Aug 2019",
    endDate: "May 2021",
    description: "Developed AI-powered features for enterprise SaaS products. Focused on integrating ML models into production web applications.",
    highlights: [
      "Integrated GPT-based text generation into the product, increasing user engagement by 25%",
      "Built a data labeling platform used by 200+ annotators",
      "Contributed to open-source ML tooling libraries",
    ],
    technologies: ["Python", "React", "PostgreSQL", "Redis", "scikit-learn"],
  },
];
