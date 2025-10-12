"use client"

import { useEffect, useState } from "react"

interface TypingAnimationProps {
  text: string
  className?: string
  speed?: number
}

export function TypingAnimation({ text, className = "", speed = 50 }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  )
}
