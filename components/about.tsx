import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award } from "lucide-react"
import Image from "next/image"

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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-sm" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <div className="relative aspect-square max-w-sm overflow-hidden rounded-lg border-2 border-border">
              <Image src="/my-photo.jpeg" alt="Lovish Batra" fill className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500" style={{objectPosition: 'center top'}} />
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <div className="space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                I'm a passionate machine learning engineer specializing in building intelligent systems that solve
                real-world problems. With expertise in deep learning, natural language processing, and computer vision,
                I create AI solutions that are both innovative and production-ready.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                My journey in machine learning has been driven by curiosity and a desire to push the boundaries of
                what's possible with AI. I believe in developing models that are not only accurate but also
                interpretable, scalable, and ethically responsible.
              </p>
            </div>

            <div className="grid gap-4 pt-4">
              {highlights.map((item, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="p-2 rounded-md bg-primary/10">
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
        </div>
      </div>
    </section>
  )
}
