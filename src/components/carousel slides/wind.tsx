"use client";

import { WeatherData } from "@/lib/weather-data";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { SparkAreaChart } from "@/tremorcomponents/spark-chart";

export default function WindSlide({ data }: { data: WeatherData[] }) {
  return (
    <>
      <CardHeader>
        <CardTitle>Wind Speed</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 justify-between h-full">
        <WindStats data={data} />
        <WindChart data={data} />
      </CardContent>
    </>
  );
}

function WindStats({ data }: { data: WeatherData[] }) {
  return (
    <div className="grid grid-cols-3 gap-4 p-2">
      <div className="flex flex-col items-center p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/20">
        <span className="text-xs text-emerald-500 dark:text-emerald-400 mb-1">
          MAX
        </span>
        <span className="text-xl font-bold">
          {Math.max(...data.map((item) => item.wind_speed_kmh))}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">km/h</span>
      </div>
      <div className="flex flex-col items-center p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/20">
        <span className="text-xs text-emerald-500 dark:text-emerald-400 mb-1">
          MIN
        </span>
        <span className="text-xl font-bold">
          {Math.min(...data.map((item) => item.wind_speed_kmh))}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">km/h</span>
      </div>
      <div className="flex flex-col items-center p-3 rounded-lg bg-emerald-200 dark:bg-emerald-800/20">
        <span className="text-xs text-emerald-500 dark:text-emerald-400 mb-1">
          AVG
        </span>
        <span className="text-xl font-bold">
          {Math.round(
            data.map((item) => item.wind_speed_kmh).reduce((a, b) => a + b, 0) /
              data.length
          )}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">km/h</span>
      </div>
    </div>
  );
}

function WindChart({ data }: { data: WeatherData[] }) {
  const chartdata = data.map((item) => ({
    date: item.date,
    "Wind Speed": item.wind_speed_kmh,
  }));

  return (
    <div className="h-3/5">
      <SparkAreaChart
        data={chartdata}
        index="date"
        categories={["Wind Speed"]}
        colors={["emerald"]}
        className="h-full w-full min-w-0"
      />
    </div>
  );
}
