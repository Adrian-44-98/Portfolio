'use client'

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  link?: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const CardWrapper = project.link ? Link : 'div'
  
  return (
    <CardWrapper 
      href={project.link || '#'} 
      className={cn(
        "block", 
        project.link && "transition-transform hover:-translate-y-1 hover:shadow-lg"
      )}
    >
      <Card className="overflow-hidden h-full">
        <div className="relative h-48 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={true}
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        {project.link && (
          <CardFooter>
            <span className="text-sm text-primary hover:underline">
              View Project →
            </span>
          </CardFooter>
        )}
      </Card>
    </CardWrapper>
  )
} 