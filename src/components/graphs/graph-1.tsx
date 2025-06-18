"use client";

import useSWR from "swr";
import { AreaChart } from "@/tremorcomponents/area-graph";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { WeatherData } from "@/lib/weather-data";

// Fetcher function for SWR
const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }
  return response.json();
};

export default function Graph1() {
  const {
    data: weatherData,
    error,
    isLoading,
  } = useSWR<WeatherData[]>("https://fake-api.lynas.dev/weather", fetcher);

  // Format data for the chart
  const chartData =
    weatherData?.map((item) => ({
      date: new Date(item.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      Temperature: item.temperature_max,
    })) || [];

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Temperature</CardTitle>
      </CardHeader>
      <AreaChart
        className="h-60"
        data={chartData}
        index="date"
        categories={["Temperature"]}
        valueFormatter={(number: number) => `${number.toFixed(1)}°C`}
        onValueChange={(v) => console.log(v)}
      />
    </Card>
  );
}
