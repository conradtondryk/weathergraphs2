"use client";

import { WeatherData } from "@/lib/weather-data";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { SparkAreaChart } from "@/tremorcomponents/spark-chart";

export default function TemperatureSlide({ data }: { data: WeatherData[] }) {
  return (
    <>
      <CardHeader>
        <CardTitle>Temperature</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 justify-between h-full">
        <TemperatureStats data={data} />
        <TemperatureChart data={data} />
      </CardContent>
    </>
  );
}

function TemperatureStats({ data }: { data: WeatherData[] }) {
  return (
    <div className="grid grid-cols-3 gap-4 p-2">
      <div className="flex flex-col items-center p-3 rounded-lg bg-violet-100 dark:bg-violet-900/20">
        <span className="text-xs text-violet-500 dark:text-violet-400 mb-1">
          MAX
        </span>
        <span className="text-2xl font-bold">
          {Math.max(...data.map((item) => item.temperature_c))}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">°C</span>
      </div>
      <div className="flex flex-col items-center p-3 rounded-lg bg-violet-50 dark:bg-violet-950/20">
        <span className="text-xs text-violet-500 dark:text-violet-400 mb-1">
          MIN
        </span>
        <span className="text-2xl font-bold">
          {Math.min(...data.map((item) => item.temperature_c))}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">°C</span>
      </div>
      <div className="flex flex-col items-center p-3 rounded-lg bg-violet-200 dark:bg-violet-800/20">
        <span className="text-xs text-violet-500 dark:text-violet-400 mb-1">
          AVG
        </span>
        <span className="text-2xl font-bold">
          {Math.round(
            data.map((item) => item.temperature_c).reduce((a, b) => a + b, 0) /
              data.length
          )}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">°C</span>
      </div>
    </div>
  );
}

function TemperatureChart({ data }: { data: WeatherData[] }) {
  const chartdata = data.map((item) => ({
    date: item.date,
    Temperature: item.temperature_c,
  }));

  return (
    <div className="h-3/5">
      <SparkAreaChart
        data={chartdata}
        index="date"
        categories={["Temperature"]}
        className="h-full w-full"
      />
    </div>
  );
}
