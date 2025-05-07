import Graph2 from "@/components/graph-2";
import TemperatureGraph from "@/components/Temperature-Graph";
import { Carousel1 } from "@/components/ui/carousel-1";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 max-w-4xl mx-auto">
      <TemperatureGraph />
      <Graph2 />
      <Carousel1 />
    </main>
  );
}
