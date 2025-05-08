"use client";

import { WeatherData } from "@/lib/weather-data";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { SparkBarChart } from "@/tremorcomponents/spark-chart";

export default function PrecipitationSlide({ data }: { data: WeatherData[] }) {
  return (
    <>
      <CardHeader>
        <CardTitle>Precipitation</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 justify-between h-full">
        <PrecipitationStats data={data} />
        <PrecipitationChart data={data} />
      </CardContent>
    </>
  );
}

function PrecipitationStats({ data }: { data: WeatherData[] }) {
  return (
    <div className="grid grid-cols-3 gap-4 p-2">
      <div className="flex flex-col items-center p-3 rounded-lg bg-blue-100 dark:bg-blue-900/20">
        <span className="text-xs text-blue-500 dark:text-blue-400 mb-1">
          MAX
        </span>
        <span className="text-2xl font-bold">
          {Math.max(...data.map((item) => item.precipitation_mm))}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">mm</span>
      </div>
      <div className="flex flex-col items-center p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20">
        <span className="text-xs text-blue-500 dark:text-blue-400 mb-1">
          MIN
        </span>
        <span className="text-2xl font-bold">
          {Math.min(...data.map((item) => item.precipitation_mm))}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">mm</span>
      </div>
      <div className="flex flex-col items-center p-3 rounded-lg bg-blue-200 dark:bg-blue-800/20">
        <span className="text-xs text-blue-500 dark:text-blue-400 mb-1">
          AVG
        </span>
        <span className="text-2xl font-bold">
          {(
            data
              .map((item) => item.precipitation_mm)
              .reduce((a, b) => a + b, 0) / data.length
          ).toFixed(1)}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">mm</span>
      </div>
    </div>
  );
}

function PrecipitationChart({ data }: { data: WeatherData[] }) {
  const chartdata = data.map((item) => ({
    date: item.date,
    Precipitation: item.precipitation_mm,
  }));

  return (
    <div className="h-3/5">
      <SparkBarChart
        data={chartdata}
        index="date"
        categories={["Precipitation"]}
        colors={["blue"]}
        className="h-full w-full min-w-0"
      />
    </div>
  );
}
