'use client'

interface SkillBadgeProps {
  name: string
  category: string
}

export default function SkillBadge({ name, category }: SkillBadgeProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "backend":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "tools":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
        category
      )}`}
    >
      {name}
    </span>
  )
} 