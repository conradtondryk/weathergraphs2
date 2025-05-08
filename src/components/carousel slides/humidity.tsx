"use client";

import { WeatherData } from "@/lib/weather-data";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { SparkAreaChart } from "@/tremorcomponents/spark-chart";

export default function HumiditySlide({ data }: { data: WeatherData[] }) {
  return (
    <>
      <CardHeader>
        <CardTitle>Humidity</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 justify-between h-full">
        <HumidityStats data={data} />
        <HumidityChart data={data} />
      </CardContent>
    </>
  );
}

function HumidityStats({ data }: { data: WeatherData[] }) {
  return (
    <div className="grid grid-cols-3 gap-4 p-2">
      <div className="flex flex-col items-center p-3 rounded-lg bg-cyan-100 dark:bg-cyan-900/20">
        <span className="text-xs text-cyan-500 dark:text-cyan-400 mb-1">
          MAX
        </span>
        <span className="text-2xl font-bold">
          {Math.max(...data.map((item) => item.humidity_percent))}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">%</span>
      </div>
      <div className="flex flex-col items-center p-3 rounded-lg bg-cyan-50 dark:bg-cyan-950/20">
        <span className="text-xs text-cyan-500 dark:text-cyan-400 mb-1">
          MIN
        </span>
        <span className="text-2xl font-bold">
          {Math.min(...data.map((item) => item.humidity_percent))}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">%</span>
      </div>
      <div className="flex flex-col items-center p-3 rounded-lg bg-cyan-200 dark:bg-cyan-800/20">
        <span className="text-xs text-cyan-500 dark:text-cyan-400 mb-1">
          AVG
        </span>
        <span className="text-2xl font-bold">
          {Math.round(
            data
              .map((item) => item.humidity_percent)
              .reduce((a, b) => a + b, 0) / data.length
          )}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">%</span>
      </div>
    </div>
  );
}

function HumidityChart({ data }: { data: WeatherData[] }) {
  const chartdata = data.map((item) => ({
    date: item.date,
    Humidity: item.humidity_percent,
  }));

  return (
    <div className="h-3/5">
      <SparkAreaChart
        data={chartdata}
        index="date"
        categories={["Humidity"]}
        colors={["cyan"]}
        className="h-full w-full min-w-0"
      />
    </div>
  );
}
