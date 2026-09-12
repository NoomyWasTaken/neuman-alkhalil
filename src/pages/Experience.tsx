import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceItem } from "@/components/ExperienceItem";
import { experiences } from "@/data/experience";
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => { document.title = "Experience — Neuman Alkhalil"; }, []);

  return (
    <div className="container max-w-3xl py-16 px-4">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey in AI and software engineering"
      />
      <div>
        {experiences.map((exp) => (
          <ExperienceItem key={exp.id} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
