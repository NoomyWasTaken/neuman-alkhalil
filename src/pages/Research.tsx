import { SectionHeading } from "@/components/SectionHeading";
import { ResearchItem } from "@/components/ResearchItem";
import { research } from "@/data/research";
import { useEffect } from "react";

const Research = () => {
  useEffect(() => {
    document.title = "Research — Neuman Alkhalil";
  }, []);

  return (
    <div className="container max-w-3xl py-16 px-4">
      <SectionHeading
        title="Research"
        subtitle="Academic work in speech AI, computer vision, NLP, and information retrieval"
      />
      <div className="space-y-8">
        {research.map((item) => (
          <ResearchItem key={item.id} item={item} showFullAbstract />
        ))}
      </div>
    </div>
  );
};

export default Research;
