import { SectionHeading } from "@/components/SectionHeading";
import { PaperItem } from "@/components/PaperItem";
import { papers } from "@/data/papers";
import { useEffect } from "react";

const Papers = () => {
  useEffect(() => { document.title = "Publications — Portfolio"; }, []);

  return (
    <div className="container max-w-3xl py-16 px-4">
      <SectionHeading
        title="Publications"
        subtitle="Research papers and academic contributions"
      />
      <div className="space-y-8">
        {papers.map((paper) => (
          <PaperItem key={paper.id} paper={paper} showFullAbstract />
        ))}
      </div>
    </div>
  );
};

export default Papers;
