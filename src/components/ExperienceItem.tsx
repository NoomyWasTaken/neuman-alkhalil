import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/data/experience";

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="relative pl-8 pb-10 last:pb-0 border-l border-border">
      <div className="absolute left-0 top-1 -translate-x-1/2 h-3 w-3 rounded-full bg-primary" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
        <h3 className="text-lg font-semibold">{experience.role}</h3>
        <span className="text-sm text-muted-foreground">
          {experience.startDate} — {experience.endDate}
        </span>
      </div>
      <p className="text-sm text-primary font-medium mb-2">
        {experience.company} · {experience.location}
      </p>
      <p className="text-sm text-muted-foreground mb-3">{experience.description}</p>
      <ul className="space-y-1.5 mb-3">
        {experience.highlights.map((h, i) => (
          <li key={i} className="text-sm text-muted-foreground flex gap-2">
            <span className="text-primary mt-1 shrink-0">•</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5">
        {experience.technologies.map((tech) => (
          <Badge key={tech} variant="outline" className="text-xs font-normal">
            {tech}
          </Badge>
        ))}
      </div>
    </article>
  );
}
