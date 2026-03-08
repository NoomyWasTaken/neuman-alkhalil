import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceItem } from "@/components/ExperienceItem";
import { SkillBadge } from "@/components/SkillBadge";
import { PaperItem } from "@/components/PaperItem";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { papers } from "@/data/papers";
import { resumeUrl } from "@/data/social";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
const featuredExperience = experiences.slice(0, 2);
const featuredPapers = papers.slice(0, 2);
const topSkillCategories = skillCategories.slice(0, 3);

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="container max-w-3xl py-24 px-4 md:py-32">
        <p className="text-sm font-medium text-primary mb-3">AI Software Engineer</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Building intelligent systems that solve real problems
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
          I design, build, and deploy production ML systems — from research prototypes to scalable 
          infrastructure serving millions. Specializing in NLP, search, and applied AI.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href={resumeUrl} download>
              <Download className="h-4 w-4 mr-1.5" />
              Download Resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/projects">
              View Projects
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/contact">
              <Mail className="h-4 w-4 mr-1.5" />
              Contact
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container max-w-5xl px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <SectionHeading title="Featured Projects" subtitle="Selected work in AI and ML" className="mb-0" />
          <Link to="/projects" className="text-sm text-primary hover:underline hidden sm:inline-flex items-center gap-1">
            View all <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link to="/projects" className="text-sm text-primary hover:underline mt-6 inline-flex items-center gap-1 sm:hidden">
          View all projects <ArrowRight className="h-3 w-3" />
        </Link>
      </section>

      {/* Experience Highlights */}
      <section className="container max-w-3xl px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <SectionHeading title="Experience" subtitle="Recent roles" className="mb-0" />
          <Link to="/experience" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
            Full timeline <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div>
          {featuredExperience.map((exp) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      </section>

      {/* Skills Summary */}
      <section className="container max-w-3xl px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <SectionHeading title="Technical Skills" subtitle="Core competencies" className="mb-0" />
          <Link to="/skills" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
            All skills <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="space-y-6">
          {topSkillCategories.map((cat) => (
            <div key={cat.name}>
              <h3 className="text-sm font-medium mb-2">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Papers Preview */}
      <section className="container max-w-3xl px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <SectionHeading title="Publications" subtitle="Research contributions" className="mb-0" />
          <Link to="/papers" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
            All papers <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="space-y-6">
          {featuredPapers.map((paper) => (
            <PaperItem key={paper.id} paper={paper} />
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container max-w-3xl px-4 py-16">
        <div className="rounded-lg border border-border bg-card p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Let's work together</h2>
          <p className="text-muted-foreground mb-6">
            Interested in collaborating or have a question? I'd love to hear from you.
          </p>
          <Button asChild>
            <Link to="/contact">
              <Mail className="h-4 w-4 mr-1.5" />
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
