import { WeatherData } from "@/lib/weather-data";
import { DataContext } from "@/contexts/data";
import { useContext } from "react";
import { SparkAreaChart } from "@/tremorcomponents/spark-chart";

interface HumiditySlideProps {
  weatherData: WeatherData[];
}

export default function HumiditySlide({ weatherData }: HumiditySlideProps) {
  const chartData =
    weatherData?.map((item) => ({
      date: new Date(item.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      humidity: item.humidity_percent,
    })) || [];

  return (
    <>
      <SparkAreaChart
        data={chartData}
        index="date"
        categories={["humidity"]}
        colors={["blue"]}
        className="h-24 w-full"
        connectNulls={true}
      />
    </>
  );
}
