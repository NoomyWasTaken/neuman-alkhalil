import { Github, Linkedin, Mail, Download } from "lucide-react";
import { socialLinks, resumeUrl, profile } from "@/data/social";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.icon === "mail" ? undefined : "_blank"}
                rel={link.icon === "mail" ? undefined : "noopener noreferrer"}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <a
            href={resumeUrl}
            download
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            <Download className="h-3 w-3" />
            Resume
          </a>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
