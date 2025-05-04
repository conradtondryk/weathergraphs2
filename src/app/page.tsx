import { AreaChartHero } from "@/components/graph1";
import { graph2 as Graph2 } from "@/components/graph2";
import { ModeToggle } from "@/components/ui/themebutton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 max-w-4xl mx-auto">
      <Card>
        <AreaChartHero />
      </Card>

      <Card>
        <Graph2 />
      </Card>
    </main>
  );
}
