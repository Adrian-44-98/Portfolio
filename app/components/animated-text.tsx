'use client'

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  delay?: number
}

export default function AnimatedText({ text, delay = 0 }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }
    }, 50) // Adjust speed by changing this value (lower = faster)

    return () => clearTimeout(timeout)
  }, [currentIndex, text])

  return <span>{displayedText}</span>
} 