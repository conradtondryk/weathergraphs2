"use client";

import useSWR from "swr";
import { BarChart } from "@/tremorcomponents/Bar-Graph";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

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

// const chartdata = [
//   {
//     date: "Jan 23",
//     SolarPanels: 2890,
//     Inverters: 2338,
//   },
//   {
//     date: "Feb 23",
//     SolarPanels: 2756,
//     Inverters: 2103,
//   },
//   {
//     date: "Mar 23",
//     SolarPanels: 3322,
//     Inverters: 2194,
//   },
//   {
//     date: "Apr 23",
//     SolarPanels: 3470,
//     Inverters: 2108,
//   },
//   {
//     date: "May 23",
//     SolarPanels: 3475,
//     Inverters: 1812,
//   },
//   {
//     date: "Jun 23",
//     SolarPanels: 3129,
//     Inverters: 1726,
//   },
//   {
//     date: "Jul 23",
//     SolarPanels: 3490,
//     Inverters: 1982,
//   },
//   {
//     date: "Aug 23",
//     SolarPanels: 2903,
//     Inverters: 2012,
//   },
//   {
//     date: "Sep 23",
//     SolarPanels: 2643,
//     Inverters: 2342,
//   },
//   {
//     date: "Oct 23",
//     SolarPanels: 2837,
//     Inverters: 2473,
//   },
//   {
//     date: "Nov 23",
//     SolarPanels: 2954,
//     Inverters: 3848,
//   },
//   {
//     date: "Dec 23",
//     SolarPanels: 3239,
//     Inverters: 3736,
//   },
// ];

// export default function BarGraph1() {
//   return (
//     <BarChart
//       data={chartdata}
//       index="date"
//       categories={["SolarPanels", "Inverters"]}
//       valueFormatter={(number: number) =>
//         `$${Intl.NumberFormat("us").format(number).toString()}`
//       }
//       onValueChange={(v) => console.log(v)}
//     />
//   );
// }

export default function barGraph1() {
  const {
    data: weatherData,
    error,
    isLoading,
  } = useSWR<WeatherData[]>("https://fake-api.lynas.dev/weather", fetcher);

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
