"use client";

import { AreaChart } from "@/tremorcomponents/area-graph";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { WeatherData } from "@/lib/weather-data";

interface Graph2Props {
  weatherData: WeatherData[];
}

export default function Graph2({ weatherData }: Graph2Props) {
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
