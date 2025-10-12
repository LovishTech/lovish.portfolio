"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
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
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <FadeInSection>
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full shadow-lg shadow-primary/50" />
          </div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            A collection of my work showcasing various technologies and problem-solving approaches.
          </p>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-md mx-auto sm:max-w-none">
          {projects.map((project, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <Card className="border-border hover:border-primary/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/10">
                <div className="relative aspect-video overflow-hidden bg-muted group">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-pretty leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-primary/15 text-primary border border-primary/30 rounded-md font-medium"
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
                    className="w-full border-primary/40 hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all duration-300 bg-transparent"
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
