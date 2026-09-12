export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export const awards: Award[] = [
  {
    id: "medrecon",
    title: "Winner — SSST MedReCon Hackathon 2026",
    issuer: "SSST MedReCon",
    date: "Jun 2026",
    description:
      "Team Horalix developed a patient-facing solution for oncology symptom monitoring and structured symptom tracking.",
  },
  {
    id: "viennaup",
    title: "Discover ViennaUP Travel Grant Winner",
    issuer: "Vienna Business Agency",
    date: "May 2026",
    description:
      "Horalix was selected for the travel grant supporting international startups at ViennaUP 2026.",
  },
  {
    id: "adria",
    title: "Special Recognition — Adria Future Hackathon 2026",
    issuer: "Adria Future Summit / AI Nation",
    date: "Apr 2026",
    description:
      "One of 10 finalist teams selected from more than 30 registered teams across the Western Balkans.",
  },
  {
    id: "futureminds",
    title: "Winner — FutureMinds Lab Healthcare Hackathon",
    issuer: "FutureMinds Lab / SSST",
    date: "Oct 2025",
    description:
      "Healthcare track winner for a digital concept improving hospital bed management and capacity utilization.",
  },
  {
    id: "ssst-academic",
    title: "Certificate of Outstanding Academic Achievement",
    issuer: "Sarajevo School of Science and Technology",
    date: "Dec 2021",
  },
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

export const certifications: Certification[] = [
  {
    id: "cuda",
    title: "Getting Started with Accelerated Computing in CUDA C/C++",
    issuer: "NVIDIA",
    date: "Sep 2024",
  },
];

export interface Language {
  name: string;
  level: string;
}

export const languages: Language[] = [
  { name: "English", level: "Native or bilingual proficiency" },
  { name: "Bosnian/Croatian", level: "Intermediate" },
  { name: "Arabic", level: "Elementary proficiency" },
];
