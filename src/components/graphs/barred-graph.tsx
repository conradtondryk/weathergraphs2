"use client";

import useSWR from "swr";
import { BarChart } from "@/tremorcomponents/Bar-Graph";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { RawData } from "@/lib/weather-data";
import { transformWeatherData } from "@/lib/weather-data";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }
  return response.json();
};

export function BarredGraph() {
  const { data: apiResponse } = useSWR(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=uv_index_max,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&past_days=31&forecast_days=1",
    fetcher
  );
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
      <CardHeader>
        <CardTitle>Temperature</CardTitle>
      </CardHeader>
      <BarChart
        className="h-60"
        data={chartData}
        index="date"
        categories={["Temperature"]}
        colors={["emerald"]}
        valueFormatter={(number: number) => `${number.toFixed(1)}°C`}
        onValueChange={(v) => console.log(v)}
      />
    </Card>
  );
}
