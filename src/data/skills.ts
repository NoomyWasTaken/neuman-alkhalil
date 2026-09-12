export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "C#", "TypeScript", "JavaScript", "SQL", "Java"],
  },
  {
    name: "AI & Machine Learning",
    skills: [
      "PyTorch",
      "Scikit-learn",
      "Computer Vision",
      "Large Language Models (LLM)",
      "NLP",
      "Deep Learning",
      "CUDA",
      "Model Deployment",
      "Model Context Protocol (MCP)",
    ],
  },
  {
    name: "Backend & Data",
    skills: [
      "FastAPI",
      "ASP.NET Core",
      "Entity Framework Core",
      "PostgreSQL",
      "SQLAlchemy",
      "REST APIs",
      "Spring Boot",
      "Drizzle ORM",
      "Software Architecture",
    ],
  },
  {
    name: "Frontend",
    skills: ["React", "Angular", "Astro", "Electron"],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "Terraform",
      "Azure DevOps",
      "CI/CD",
      "Bicep",
      "Cloudflare Workers",
      "Keycloak",
      "Git",
      "SonarCloud",
    ],
  },
];
