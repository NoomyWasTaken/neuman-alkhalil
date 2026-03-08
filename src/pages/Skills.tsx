import { useState, useEffect } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillBadge } from "@/components/SkillBadge";
import { Input } from "@/components/ui/input";
import { skillCategories } from "@/data/skills";
import { Search } from "lucide-react";

const Skills = () => {
  const [filter, setFilter] = useState("");

  useEffect(() => { document.title = "Skills — Portfolio"; }, []);

  const filtered = skillCategories
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter((s) =>
        s.toLowerCase().includes(filter.toLowerCase())
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <div className="container max-w-3xl py-16 px-4">
      <SectionHeading
        title="Technical Skills"
        subtitle="Languages, frameworks, tools, and platforms I work with"
      />
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Filter skills..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="pl-9"
        />
      </div>
      <div className="space-y-8">
        {filtered.map((cat) => (
          <div key={cat.name}>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">{cat.name}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-muted-foreground text-center py-8">No skills match your filter.</p>
        )}
      </div>
    </div>
  );
};

export default Skills;
