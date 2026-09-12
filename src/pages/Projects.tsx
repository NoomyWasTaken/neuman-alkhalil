import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => { document.title = "Projects — Neuman Alkhalil"; }, []);

  return (
    <div className="container max-w-5xl py-16 px-4">
      <SectionHeading
        title="Projects"
        subtitle="AI, machine learning, and full-stack systems I've built"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
