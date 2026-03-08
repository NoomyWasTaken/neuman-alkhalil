import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

interface ProjectDetailLayoutProps {
  project: Project;
}

export function ProjectDetailLayout({ project }: ProjectDetailLayoutProps) {
  return (
    <div className="container max-w-3xl py-16 px-4">
      <Link
        to="/projects"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
      >
        ← Back to projects
      </Link>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs font-normal">
            {tag}
          </Badge>
        ))}
      </div>

      <h1 className="text-3xl font-bold tracking-tight mb-2">{project.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{project.tagline}</p>

      <div className="flex gap-3 mb-10">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-1.5" />
              Source Code
            </a>
          </Button>
        )}
        {project.demoUrl && (
          <Button size="sm" asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-1.5" />
              Live Demo
            </a>
          </Button>
        )}
      </div>

      <section className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold mb-3">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Problem</h2>
          <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Approach</h2>
          <p className="text-muted-foreground leading-relaxed">{project.approach}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm font-normal px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Architecture</h2>
          <p className="text-muted-foreground leading-relaxed">{project.architecture}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Outcomes</h2>
          <ul className="space-y-2">
            {project.outcomes.map((outcome, i) => (
              <li key={i} className="text-muted-foreground flex gap-2">
                <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
