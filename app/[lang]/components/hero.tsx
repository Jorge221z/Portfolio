import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

interface HeroProps {
  dict: any
}

export function Hero({ dict }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-4">{dict.hero.greeting}</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Alex Johnson</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">{dict.hero.title}</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">{dict.hero.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              {dict.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Mail className="h-4 w-4" />
              {dict.hero.contact}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
