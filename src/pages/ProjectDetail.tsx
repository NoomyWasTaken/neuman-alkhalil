import { useParams, Navigate } from "react-router-dom";
import { ProjectDetailLayout } from "@/components/ProjectDetailLayout";
import { projects } from "@/data/projects";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) document.title = `${project.title} — Neuman Alkhalil`;
  }, [project]);

  if (!project) return <Navigate to="/projects" replace />;

  return <ProjectDetailLayout project={project} />;
};

export default ProjectDetail;
