"use client";

import { BarChart } from "@/tremorcomponents/Bar-Graph";
import { AreaChart } from "@/tremorcomponents/area-graph";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useGraphType } from "@/contexts/graph-context1";
import GraphButton from "@/components/ui/graphtype";
import { WeatherData, transformWeatherData } from "@/lib/weather-data";
import useSWR from "swr";
import { RawData } from "@/lib/weather-data";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }
  return response.json();
};

export default function TemperatureGraph() {
  const { data: apiResponse } = useSWR(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=uv_index_max,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&past_days=31&forecast_days=1",
    fetcher
  );
  const { graphType } = useGraphType();
  const weatherData = apiResponse?.daily
    ? transformWeatherData(apiResponse.daily)
    : [];
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
