import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { TypingAnimation } from "./typing-animation"
import { DownloadResumeButton } from "./download-resume-button"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/8" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(120,200,220,0.15),rgba(0,0,0,0))]" />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/40 text-primary text-sm font-medium shadow-lg shadow-primary/20">
            <Sparkles className="h-4 w-4" />
            <span>Machine Learning Engineer</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-balance tracking-tight bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            Lovish Batra
          </h1>

          <div className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed min-h-[3.5rem]">
            <TypingAnimation
              text="Developing intelligent systems and machine learning solutions that transform data into actionable insights."
              speed={30}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <DownloadResumeButton />
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto group border-2 border-primary/40 hover:border-primary hover:bg-primary/10 text-primary hover:text-primary transition-all bg-transparent"
              asChild
            >
              <Link href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
