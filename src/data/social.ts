export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail";
}

export const profile = {
  name: "Neuman Alkhalil",
  title: "Founding AI Software Engineer & Chief Science Officer @ Horalix",
  shortTitle: "AI Software Engineer",
  location: "Sarajevo, Bosnia & Herzegovina",
  email: "neuman.alkhalil@outlook.com",
  intro:
    "I build end-to-end production AI systems — not just models. My work spans backend engineering, AI workflows, databases, deployment, evaluation, and the infrastructure needed to turn AI into reliable products.",
  longIntro:
    "Recent work spans clinical AI systems used in hospital environments, AI-powered recruiting workflows, and full-stack products built with Python, FastAPI, PostgreSQL, AWS, React, and modern LLM tooling including Claude, GPT, and MCP. M.S. in Computer Science from Georgetown University. I like high standards, fast iteration, and results you can measure.",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/NoomyWasTaken", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/neuman-alkhalil/", icon: "linkedin" },
  { name: "Email", url: `mailto:${profile.email}`, icon: "mail" },
];

export const resumeUrl = "/Neuman-Alkhalil-Resume.pdf";
