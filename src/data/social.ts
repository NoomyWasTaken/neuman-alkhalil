export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "twitter";
}

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Email", url: "mailto:hello@example.com", icon: "mail" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
];

export const resumeUrl = "/resume.pdf";
