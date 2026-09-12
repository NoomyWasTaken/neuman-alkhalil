import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ResearchItem as ResearchEntry } from "@/data/research";

interface ResearchItemProps {
  item: ResearchEntry;
  showFullAbstract?: boolean;
}

export function ResearchItem({ item, showFullAbstract = false }: ResearchItemProps) {
  return (
    <article className="border-b border-border pb-6 last:border-0 last:pb-0">
      <div className="flex flex-wrap gap-1.5 mb-2">
        {item.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs font-normal">
            {tag}
          </Badge>
        ))}
      </div>
      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
      <p className="text-sm text-muted-foreground mb-1">{item.authors.join(", ")}</p>
      <p className="text-sm text-primary font-medium mb-2">
        {item.venue} · {item.date}
      </p>
      <p className={`text-sm text-muted-foreground mb-3 ${showFullAbstract ? "" : "line-clamp-3"}`}>
        {item.abstract}
      </p>
      <div className="flex flex-wrap gap-4">
        {item.paperUrl && (
          <a
            href={item.paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          >
            <ExternalLink className="h-3 w-3" />
            Paper
          </a>
        )}
        {item.pdfUrl && (
          <a
            href={item.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          >
            <FileText className="h-3 w-3" />
            PDF
          </a>
        )}
        {item.projectSlug && (
          <Link
            to={`/projects/${item.projectSlug}`}
            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          >
            Project write-up
            <ArrowRight className="h-3 w-3" />
          </Link>
        )}
      </div>
    </article>
  );
}
