"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Star } from "lucide-react"
import Image from "next/image"
import { FadeInSection } from "./fade-in-section"

export function Projects() {
  const projects = [
    {
      title: "Spam Email Detection",
      description:
        "A machine learning model that classifies emails as spam or legitimate using NLP techniques and Logistic Regression. Features a Streamlit web app for real-time predictions with comprehensive text preprocessing using NLTK.",
      image: "/spam-email-detection.jpg",
      tags: ["Python", "NLP", "Scikit-learn", "Streamlit", "NLTK", "Jupyter"],
      liveUrl: "#",
      githubUrl: "https://github.com/LovishTech/Spam_detection_model",
      featured: true,
    },
    {
      title: "AI-Powered Website Generator",
      description:
        "An AI-driven tool that generates complete landing pages from a simple text prompt. Uses a large language model to create structured content and Tailwind CSS-based layouts, with live preview and editable sections for rapid iteration.",
      image: "/machine-learning-project-visualization.png",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI API", "Prompt Engineering"],
      liveUrl: "#",
      githubUrl: "https://github.com/LovishTech/ai-website-generator",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">My Projects</h2>
            <div className="w-20 h-1 bg-primary rounded-sm mx-auto" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A collection of my work showcasing various technologies and problem-solving approaches.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeInSection key={index} delay={index * 120}>
              <Card
                className={`border-border hover:border-primary/50 transition-colors overflow-hidden group h-full ${
                  project.featured ? "border-primary/40 shadow-lg shadow-primary/5" : ""
                }`}
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  {project.featured && (
                    <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-primary/90 text-primary-foreground">
                      <Star className="h-3 w-3 fill-current" />
                      Featured
                    </span>
                  )}
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 text-xs font-mono bg-muted border border-border rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
