import { WeatherData } from "@/lib/weather-data";
import { SparkAreaChart } from "@/tremorcomponents/spark-chart";

interface PrecipitationSlideProps {
  weatherData: WeatherData[];
}

export default function PrecipitationSlide({
  weatherData,
}: PrecipitationSlideProps) {
  const chartData =
    weatherData?.map((item) => ({
      date: new Date(item.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      precipitation: item.precipitation,
    })) || [];

  return (
    <div className="flex flex-col h-full w-full select-none">
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Precipitation</h2>
      </div>
      <div className="w-full">
        <SparkAreaChart
          data={chartData}
          index="date"
          categories={["precipitation"]}
          colors={["blue"]}
          className="h-24 w-full"
          connectNulls={true}
        />
      </div>
    </div>
  );
}
