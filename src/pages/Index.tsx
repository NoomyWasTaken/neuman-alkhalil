import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, Award as AwardIcon, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceItem } from "@/components/ExperienceItem";
import { SkillBadge } from "@/components/SkillBadge";
import { ResearchItem } from "@/components/ResearchItem";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { research } from "@/data/research";
import { education } from "@/data/education";
import { awards, certifications, languages } from "@/data/awards";
import { resumeUrl, profile } from "@/data/social";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
const featuredExperience = experiences.slice(0, 2);
const featuredResearch = research.slice(0, 2);
const topSkillCategories = skillCategories.slice(0, 3);

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="container max-w-3xl py-24 px-4 md:py-32">
        <p className="text-sm font-medium text-primary mb-3">{profile.title}</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{profile.name}</h1>
        <p className="text-lg text-muted-foreground mb-4 max-w-2xl leading-relaxed">{profile.intro}</p>
        <p className="text-base text-muted-foreground mb-8 max-w-2xl leading-relaxed">
          {profile.longIntro}
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
          <SectionHeading title="Featured Projects" subtitle="Selected work in AI and full-stack engineering" className="mb-0" />
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

      {/* Education */}
      <section className="container max-w-3xl px-4 py-16">
        <SectionHeading title="Education" subtitle="Degrees and focus areas" />
        <ul className="space-y-5">
          {education.map((ed) => (
            <li key={ed.id} className="flex gap-3">
              <GraduationCap className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-medium">{ed.school}</h3>
                <p className="text-sm text-muted-foreground">
                  {ed.degree} · {ed.startDate} – {ed.endDate}
                </p>
                {ed.note && <p className="text-sm text-muted-foreground">{ed.note}</p>}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Awards & Recognition */}
      <section className="container max-w-3xl px-4 py-16">
        <SectionHeading title="Awards & Recognition" subtitle="Hackathons, grants, and certifications" />
        <ul className="space-y-5">
          {awards.map((award) => (
            <li key={award.id} className="flex gap-3">
              <AwardIcon className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-medium">{award.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {award.issuer} · {award.date}
                </p>
                {award.description && (
                  <p className="text-sm text-muted-foreground mt-1">{award.description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="grid gap-8 sm:grid-cols-2 mt-10 pt-8 border-t border-border">
          <div>
            <h3 className="text-sm font-medium mb-3">Certifications</h3>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert.id} className="text-sm text-muted-foreground">
                  {cert.title} — {cert.issuer}, {cert.date}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3">Languages</h3>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li key={lang.name} className="text-sm text-muted-foreground">
                  {lang.name} — {lang.level}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Research Preview */}
      <section className="container max-w-3xl px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <SectionHeading title="Research" subtitle="Academic work" className="mb-0" />
          <Link to="/research" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
            All research <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="space-y-6">
          {featuredResearch.map((item) => (
            <ResearchItem key={item.id} item={item} />
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
