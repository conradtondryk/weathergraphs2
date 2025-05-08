"use client";

import { WeatherData } from "@/lib/weather-data";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { SparkBarChart } from "@/tremorcomponents/spark-chart";

export default function UvSlide({ data }: { data: WeatherData[] }) {
  return (
    <>
      <CardHeader>
        <CardTitle>UV Index</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 justify-between h-full">
        <UvStats data={data} />
        <UvChart data={data} />
      </CardContent>
    </>
  );
}

function UvStats({ data }: { data: WeatherData[] }) {
  return (
    <div className="grid grid-cols-3 gap-4 p-2">
      <div className="flex flex-col items-center p-3 rounded-lg bg-amber-100 dark:bg-amber-900/20">
        <span className="text-xs text-amber-500 dark:text-amber-400 mb-1">
          MAX
        </span>
        <span className="text-2xl font-bold">
          {Math.max(...data.map((item) => item.uv_index))}
        </span>
      </div>
      <div className="flex flex-col items-center p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20">
        <span className="text-xs text-amber-500 dark:text-amber-400 mb-1">
          MIN
        </span>
        <span className="text-2xl font-bold">
          {Math.min(...data.map((item) => item.uv_index))}
        </span>
      </div>
      <div className="flex flex-col items-center p-3 rounded-lg bg-amber-200 dark:bg-amber-800/20">
        <span className="text-xs text-amber-500 dark:text-amber-400 mb-1">
          AVG
        </span>
        <span className="text-2xl font-bold">
          {Math.round(
            data.map((item) => item.uv_index).reduce((a, b) => a + b, 0) /
              data.length
          )}
        </span>
      </div>
    </div>
  );
}

function UvChart({ data }: { data: WeatherData[] }) {
  const chartdata = data.map((item) => ({
    date: item.date,
    "UV Index": item.uv_index,
  }));

  return (
    <div className="h-3/5">
      <SparkBarChart
        data={chartdata}
        index="date"
        categories={["UV Index"]}
        colors={["amber"]}
        className="h-full w-full min-w-0"
      />
    </div>
  );
}
