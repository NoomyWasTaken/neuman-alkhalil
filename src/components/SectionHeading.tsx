import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, className, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", "mb-10", className)}>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
