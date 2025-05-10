import Graph2 from "@/components/graphs/graph-2";
import TemperatureGraph from "@/components/graphs/temperature-graph1";
import { SparkAreaChart } from "@/tremorcomponents/spark-chart";
import { WeatherData } from "@/lib/weather-data";
import { CarouselDemo } from "@/components/carousel-demo";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 max-w-4xl mx-auto">
      <TemperatureGraph />
      <CarouselDemo />
      <Graph2 />
    </main>
  );
}
