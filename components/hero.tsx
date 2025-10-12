'use client';

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Code, Brain, Cpu, Database, Bot } from "lucide-react"
import Link from "next/link"
import { TypingAnimation } from "./typing-animation"
import { DownloadResumeButton } from "./download-resume-button"
import { useEffect, useState } from "react"

export function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const floatingIcons = [
    { icon: <Code className="w-5 h-5 text-primary/70" />, x: 5, y: 30, delay: 0, tooltip: 'Code' },
    { icon: <Brain className="w-5 h-5 text-accent/70" />, x: 95, y: 25, delay: 0.2, tooltip: 'AI/ML' },
    { icon: <Cpu className="w-5 h-5 text-primary/70" />, x: 20, y: 70, delay: 0.4, tooltip: 'Hardware' },
    { icon: <Database className="w-5 h-5 text-accent/70" />, x: 80, y: 65, delay: 0.6, tooltip: 'Databases' },
    { icon: <Bot className="w-5 h-5 text-primary/70" />, x: 50, y: 15, delay: 0.8, tooltip: 'Automation' },
  ]

  if (!isMounted) return null

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => (
        <div 
          key={index}
          className="absolute hidden sm:block group"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            animation: `float 6s ease-in-out ${item.delay}s infinite`,
          }}
          title={item.tooltip}
        >
          <div className="relative">
            {item.icon}
            <span className="absolute left-1/2 -bottom-6 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs transition-opacity">
              {item.tooltip}
            </span>
          </div>
        </div>
      ))}

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-6">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
          >
            <Sparkles className="h-4 w-4" />
            <span>Machine Learning Engineer</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-foreground bg-clip-text text-transparent">
              Lovish Batra
            </span>
          </h1>

          <div className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed min-h-[3.5rem]">
            <TypingAnimation
              text="Developing intelligent systems and machine learning solutions that transform data into actionable insights."
              speed={30}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <DownloadResumeButton />
            <Button
              variant="outline"
              className="group border-2 border-primary/40 hover:border-primary hover:bg-primary/5 transition-colors"
              asChild
            >
              <Link href="#projects" className="flex items-center">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Tech Stack */}
          <div className="mt-12 max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground mb-4">Tech I work with</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {['Python', 'TensorFlow', 'PyTorch', 'React', 'Next.js', 'Node.js', 'Docker', 'AWS'].map((tech, i) => (
                <div 
                  key={i} 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-foreground/40 rounded-full animate-bounce"></div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
      `}</style>
    </section>
  )
}
