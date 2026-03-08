import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group flex flex-col transition-shadow hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex flex-wrap gap-1.5 mb-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        <Link to={`/projects/${project.slug}`} className="block">
          <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground leading-relaxed">{project.tagline}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-0">
        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`${project.title} GitHub`}
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`${project.title} demo`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
        <Link
          to={`/projects/${project.slug}`}
          className="text-sm text-primary hover:underline inline-flex items-center gap-1"
        >
          View details
          <ArrowRight className="h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  );
}
