'use client';

import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal } from "lucide-react"
import Link from "next/link"
import { DownloadResumeButton } from "./download-resume-button"
import { useEffect, useState } from "react"

export function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border text-sm font-medium">
            <Terminal className="h-4 w-4" />
            <span>Machine Learning Engineer</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Hi, I'm <span className="text-primary">Lovish Batra</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              I build intelligent systems and machine learning solutions that transform data into actionable insights.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
            <DownloadResumeButton />
            <Button
              variant="outline"
              className="group"
              asChild
            >
              <Link href="#projects" className="flex items-center">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-3">
              {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'AWS', 'Azure', 'GCP', 'Docker'].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-sm bg-muted border border-border rounded-md hover:border-primary/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
