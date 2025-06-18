import { WeatherData } from "@/lib/weather-data";
import { SparkAreaChart } from "@/tremorcomponents/spark-chart";
interface TemperatureMinSlideProps {
  weatherData: WeatherData[];
}

export default function TemperatureMinSlide({
  weatherData,
}: TemperatureMinSlideProps) {
  const chartData =
    weatherData?.map((item) => ({
      date: new Date(item.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      temperature: item.temperature_min,
    })) || [];

  return (
    <div className="flex flex-col h-full w-full select-none">
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Temperature Min</h2>
      </div>
      <div className="w-full">
        <SparkAreaChart
          data={chartData}
          index="date"
          categories={["temperature"]}
          colors={["blue"]}
          className="h-24 w-full"
          connectNulls={true}
        />
      </div>
    </div>
  );
}
