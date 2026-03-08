export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Rust", "Go", "C++"],
  },
  {
    name: "ML / AI",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "LangChain", "OpenAI API", "FAISS", "MLflow"],
  },
  {
    name: "Frameworks",
    skills: ["FastAPI", "React", "Next.js", "Node.js", "Flask", "Django"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "CI/CD"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "Redis", "MongoDB", "InfluxDB", "Elasticsearch", "Pinecone"],
  },
  {
    name: "Tools & Practices",
    skills: ["Git", "Linux", "Agile/Scrum", "System Design", "Technical Writing", "Code Review"],
  },
];
