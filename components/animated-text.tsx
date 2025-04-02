"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  delay?: number
  className?: string
}

export default function AnimatedText({ text, delay = 0, className }: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <span
      className={cn(
        "transition-all duration-1000",
        {
          "opacity-0 translate-y-4": !isVisible,
          "opacity-100 translate-y-0": isVisible,
        },
        className,
      )}
    >
      {text}
    </span>
  )
}

