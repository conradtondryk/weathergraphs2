import { WeatherData } from "@/lib/weather-data";
import { SparkAreaChart } from "@/tremorcomponents/spark-chart";

interface UvSlideProps {
  weatherData: WeatherData[];
}

export default function UvSlide({ weatherData }: UvSlideProps) {
  const chartData =
    weatherData?.map((item) => ({
      date: new Date(item.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      uv: item.uv_index,
    })) || [];

  return (
    <div className="flex flex-col h-full w-full select-none">
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Uv</h2>
      </div>
      <div className="w-full">
        <SparkAreaChart
          data={chartData}
          index="date"
          categories={["uv"]}
          colors={["blue"]}
          className="h-24 w-full"
          connectNulls={true}
        />
      </div>
    </div>
  );
}
