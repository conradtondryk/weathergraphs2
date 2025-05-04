import { AreaChartHero } from "@/components/graph1"
import { graph2 as Graph2 } from "@/components/graph2"
import { ModeToggle } from "@/components/ui/themebutton"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {
  return (
    <main>
      <ModeToggle />
      <Card className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AreaChartHero />
      </Card>

      <Card className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Graph2 />
      </Card>
    </main>
  )
}


