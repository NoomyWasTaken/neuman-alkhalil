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
    id: "horalix",
    role: "Founding AI Software Engineer",
    company: "Horalix",
    location: "Sarajevo, Bosnia & Herzegovina",
    startDate: "Jul 2025",
    endDate: "Present",
    description:
      "Lead AI development of a clinical platform that automatically analyzes heart ultrasound exams and assists clinicians with measurements and reporting, currently being tested and validated across 3 hospital sites.",
    highlights: [
      "Designed and integrated a multi-model computer vision and deep learning pipeline for cardiac measurements, image-view recognition, Doppler analysis, and automated clinical reporting, with reliability and fallback logic for hospital use",
      "Built and deployed the production AI system using Python, FastAPI, PyTorch, React, PostgreSQL, Docker, DICOM/Orthanc, and GPU inference",
      "Supported both on-premise clinical deployments and AWS cloud infrastructure",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PyTorch",
      "React",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
      "DICOM/Orthanc",
      "AWS",
      "Terraform",
      "CI/CD",
    ],
  },
  {
    id: "authority-partners",
    role: "Software Engineer",
    company: "Authority Partners",
    location: "Sarajevo, Bosnia & Herzegovina",
    startDate: "Mar 2026",
    endDate: "Jun 2026",
    description:
      "Built a full-stack internal recruiting platform and an AI recruitment assistant, from data model to production deployment.",
    highlights: [
      "Developed a full-stack internal platform using C#, ASP.NET Core, Entity Framework Core, PostgreSQL, Angular, and Keycloak, implementing authentication, role-based workflows, and REST APIs",
      "Built an AI recruitment chatbot backed by a cached knowledge base of open positions and job descriptions, enabling candidates to discuss roles, submit resumes, and interact with recruiting workflows through natural language",
      "Integrated the chatbot with the existing CATS recruiting system and a newly developed ATS through Model Context Protocol (MCP), with HubSpot contact creation and staging/production deployment via Azure DevOps, CI/CD, Bicep, and SonarCloud",
    ],
    technologies: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "PostgreSQL",
      "Angular",
      "Keycloak",
      "MCP",
      "Azure DevOps",
      "Bicep",
      "SonarCloud",
    ],
  },
  {
    id: "tardigrade",
    role: "Data Scientist",
    company: "Tardigrade Development",
    location: "Chapel Hill, North Carolina, United States · Remote",
    startDate: "Dec 2024",
    endDate: "Jul 2025",
    description:
      "Supported data analysis and lightweight machine learning work for internal and client-facing projects, including dataset exploration, trend analysis, and predictive modeling experiments.",
    highlights: [
      "Explored and prepared datasets for internal and client-facing analysis",
      "Ran predictive modeling experiments and trend analysis to support product decisions",
    ],
    technologies: ["Python", "Machine Learning"],
  },
  {
    id: "sarajevo-unlimited",
    role: "Software Developer & IT Specialist",
    company: "Sarajevo Unlimited",
    location: "Sarajevo, Bosnia & Herzegovina",
    startDate: "Oct 2021",
    endDate: "Dec 2021",
    description:
      "Developed and maintained the full-stack event platform for a major regional innovation forum, while supporting event technology and live technical operations.",
    highlights: [
      "Built and maintained a platform supporting 500+ participants and 30+ keynote speakers",
      "Provided technical support for 20+ live presentations",
      "Received a Letter of Recommendation for the roles played across the event",
    ],
    technologies: ["JavaScript", "Full-Stack Development", "Git"],
  },
  {
    id: "zira",
    role: "Software Engineer Intern",
    company: "ZIRA",
    location: "Sarajevo, Bosnia & Herzegovina · Remote",
    startDate: "Sep 2021",
    endDate: "Nov 2021",
    description:
      "Improved an RSS feed application by developing frontend and backend features, using continuous team feedback to refine functionality.",
    highlights: [
      "Built a full-stack application using Angular, Spring Boot, PostgreSQL, and REST APIs",
      "Implemented live RSS data ingestion, real-time querying, and database optimizations",
    ],
    technologies: ["Angular", "TypeScript", "Spring Boot", "Java", "PostgreSQL", "SQL", "REST APIs"],
  },
];
