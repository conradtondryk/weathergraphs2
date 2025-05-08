import Graph2 from "@/components/graph-2";
import TemperatureGraph from "@/components/temperature-graph1";
import { Carousel1 } from "@/components/ui/carousel-1";
import { SparkAreaChart } from "@/tremorcomponents/spark-chart";

import { fetchWeatherData } from "@/lib/fetch-data";

export default async function Home() {
  const data = await fetchWeatherData();

  return (
    <main className="flex flex-col gap-4 max-w-4xl mx-auto">
      <TemperatureGraph />
      <Graph2 />
      <Carousel1 data={data} />
    </main>
  );
}
