import { Badge } from "@/components/ui/badge";

export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge
      variant="secondary"
      className="h-6 gap-1.5 rounded-full px-3 py-0 text-xs font-medium"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </Badge>
  );
}
