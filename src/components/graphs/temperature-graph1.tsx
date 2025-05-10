"use client";

import { BarChart } from "@/tremorcomponents/Bar-Graph";
import { AreaChart } from "@/tremorcomponents/area-graph";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useGraphType } from "@/contexts/graph-context";
import GraphButton from "@/components/ui/graphtype";
import { WeatherData } from "@/lib/weather-data";

interface TemperatureGraphProps {
  weatherData: WeatherData[];
}

export default function TemperatureGraph({
  weatherData,
}: TemperatureGraphProps) {
  const { graphType } = useGraphType();

  // Format data for the chart
  const chartData =
    weatherData?.map((item) => ({
      date: new Date(item.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      Temperature: item.temperature_c,
    })) || [];

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
