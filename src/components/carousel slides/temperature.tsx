import { WeatherData } from "@/lib/weather-data";

interface TemperatureSlideProps {
  weatherData: WeatherData[];
}

export default function TemperatureSlide({
  weatherData,
}: TemperatureSlideProps) {
  return (
    <div>
      <h1>Temperature</h1>
    </div>
  );
}
