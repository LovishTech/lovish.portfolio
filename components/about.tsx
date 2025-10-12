import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award } from "lucide-react"
import Image from "next/image"
import { FadeInSection } from "./fade-in-section"

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Diploma in Computer Programming from Sault College (2025) - CGPA: 3.98/4.0",
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "1 year in machine learning and AI",
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Capstone Project Certificate from Sault College",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInSection delay={200}>
            <div className="space-y-6">
              <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-full p-1 bg-gradient-to-br from-primary to-accent">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-background">
                  <Image src="/my-photo.jpeg" alt="Lovish Batra" fill className="object-cover object-center" style={{objectPosition: 'center top'}} />
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={400}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                I'm a passionate machine learning engineer specializing in building intelligent systems that solve
                real-world problems. With expertise in deep learning, natural language processing, and computer vision,
                I create AI solutions that are both innovative and production-ready.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                My journey in machine learning has been driven by curiosity and a desire to push the boundaries of
                what's possible with AI. I believe in developing models that are not only accurate but also
                interpretable, scalable, and ethically responsible.
              </p>

              <div className="grid gap-4 pt-4">
                {highlights.map((item, index) => (
                  <Card key={index} className="border-border hover:border-primary/50 transition-colors duration-300">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
