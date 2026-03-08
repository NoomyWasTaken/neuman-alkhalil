import { ExternalLink, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Paper } from "@/data/papers";

interface PaperItemProps {
  paper: Paper;
  showFullAbstract?: boolean;
}

export function PaperItem({ paper, showFullAbstract = false }: PaperItemProps) {
  return (
    <article className="border-b border-border pb-6 last:border-0 last:pb-0">
      <div className="flex flex-wrap gap-1.5 mb-2">
        {paper.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs font-normal">
            {tag}
          </Badge>
        ))}
      </div>
      <h3 className="text-lg font-semibold mb-1">{paper.title}</h3>
      <p className="text-sm text-muted-foreground mb-1">
        {paper.authors.join(", ")}
      </p>
      <p className="text-sm text-primary font-medium mb-2">
        {paper.venue} · {paper.date}
      </p>
      <p className={`text-sm text-muted-foreground mb-3 ${showFullAbstract ? "" : "line-clamp-3"}`}>
        {paper.abstract}
      </p>
      <div className="flex gap-3">
        {paper.arxivUrl && (
          <a
            href={paper.arxivUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          >
            <ExternalLink className="h-3 w-3" />
            arXiv
          </a>
        )}
        {paper.pdfUrl && (
          <a
            href={paper.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          >
            <FileText className="h-3 w-3" />
            PDF
          </a>
        )}
      </div>
    </article>
  );
}
