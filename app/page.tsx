import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"
import { StatsSection } from "@/components/stats-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <StatsSection />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}
