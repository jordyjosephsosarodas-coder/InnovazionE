import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { ApproachSection } from "@/components/approach-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Reveal>
          <HeroSection />
        </Reveal>
        <Reveal>
          <ServicesSection />
        </Reveal>
        <Reveal>
          <StatsSection />
        </Reveal>
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal>
          <ApproachSection />
        </Reveal>
        <Reveal>
          <CTASection />
        </Reveal>
      </main>
      <Footer />
    </>
  )
}
