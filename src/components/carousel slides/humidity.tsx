import { WeatherData } from "@/lib/weather-data";
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
    <div className="flex flex-col h-full w-full select-none">
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Humidity</h2>
      </div>
      <div className="w-full">
        <SparkAreaChart
          data={chartData}
          index="date"
          categories={["humidity"]}
          colors={["blue"]}
          className="h-24 w-full"
          connectNulls={true}
        />
      </div>
    </div>
  );
}
