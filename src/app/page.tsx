import Graph2 from "@/components/graph-2";
import TemperatureGraph from "@/components/temperature-graph1";
import { Carousel1 } from "@/components/ui/carousel-1";
import { SparkAreaChart } from "@/tremorcomponents/spark-chart";
import { WeatherData } from "@/lib/weather-data";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 max-w-4xl mx-auto">
      <TemperatureGraph />
      <Graph2 />
      <Carousel1 />
    </main>
  );
}
