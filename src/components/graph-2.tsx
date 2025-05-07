"use client";

import useSWR from "swr";
import { AreaChart } from "@/tremorcomponents/area-graph";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartColumnBig } from "lucide-react";
import { WeatherData } from "@/lib/weather-data";

// Fetcher function for SWR
const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }
  return response.json();
};

export default function Graph2() {
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
      "UV Index": item.uv_index,
      Temperature: item.temperature_c,
    })) || [];

  if (isLoading) return <Skeleton className="h-68" />;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>UV Index</CardTitle>
      </CardHeader>
      <AreaChart
        className="h-60"
        data={chartData}
        index="date"
        categories={["UV Index", "Temperature"]}
        colors={["amber", "emerald"]}
        valueFormatter={(number: number) => `${number.toFixed(1)}`}
        onValueChange={(v) => console.log(v)}
      />
    </Card>
  );
}
