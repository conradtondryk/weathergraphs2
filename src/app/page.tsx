import { AreaChartHero } from "@/components/graph1"
import { graph2 as Graph2 } from "@/components/graph2"
import { ModeToggle } from "@/components/ui/themebutton"


export default function Home() {
  return (
    <main>
      <ModeToggle />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AreaChartHero />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Graph2 />
      </div>
    </main>
  )
}


