import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  category: "frontend" | "backend" | "tools"
}

export default function SkillBadge({ name, category }: SkillBadgeProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20"
      case "backend":
        return "bg-purple-500/10 text-purple-600 hover:bg-purple-500/20"
      case "tools":
        return "bg-amber-500/10 text-amber-600 hover:bg-amber-500/20"
      default:
        return "bg-primary/10 text-primary hover:bg-primary/20"
    }
  }

  return (
    <div className={cn("px-4 py-2 rounded-full font-medium text-sm transition-colors", getCategoryColor(category))}>
      {name}
    </div>
  )
}

