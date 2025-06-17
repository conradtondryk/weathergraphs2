"use client";

import useSWR from "swr";
import Graph2 from "@/components/graphs/graph-2";
import TemperatureGraph from "@/components/graphs/temperature-graph1";
import { WeatherData } from "@/lib/weather-data";
import { CarouselDemo } from "@/components/carousel-demo";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }
  return response.json();
};

export default function Home() {
  const { data: weatherData = [] } = useSWR<WeatherData[]>(
    "https://fake-api.lynas.dev/weather",
    fetcher
  );

  return (
    <main className="flex flex-col gap-8 max-w-4xl mx-auto p-4 pb-16">
      <TemperatureGraph weatherData={weatherData} />
      <CarouselDemo />
      <Graph2 weatherData={weatherData} />
    </main>
  );
}
