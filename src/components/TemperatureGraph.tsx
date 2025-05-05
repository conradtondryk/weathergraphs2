"use client";

import useSWR from "swr";
import { BarChart } from "@/tremorcomponents/BarGraph";
import { AreaChart } from "@/tremorcomponents/areagraph";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useGraphType } from "@/contexts/GraphContext";
import GraphButton from "@/components/ui/graphtype";

interface WeatherData {
  date: string;
  temperature_c: number;
  humidity_percent: number;
  uv_index: number;
  precipitation_mm: number;
  wind_speed_kmh: number;
  id: string;
}

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }
  return response.json();
};

export default function TemperatureGraph() {
  const { graphType } = useGraphType();

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
      Temperature: item.temperature_c,
    })) || [];

  if (isLoading) return <Skeleton className="h-68" />;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <Card className="p-4">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Temperature</CardTitle>
        <GraphButton />
      </CardHeader>
      <CardContent>
        {graphType === "bar" ? (
          <BarChart
            className="h-60"
            data={chartData}
            index="date"
            categories={["Temperature"]}
            colors={["emerald"]}
            valueFormatter={(number: number) => `${number.toFixed(1)}°C`}
          />
        ) : (
          <AreaChart
            className="h-60"
            data={chartData}
            index="date"
            categories={["Temperature"]}
            valueFormatter={(number: number) => `${number.toFixed(1)}°C`}
          />
        )}
      </CardContent>
    </Card>
  );
}
