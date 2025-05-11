import { WeatherData } from "@/lib/weather-data";

interface PrecipitationSlideProps {
  weatherData: WeatherData[];
}

export default function PrecipitationSlide({
  weatherData,
}: PrecipitationSlideProps) {
  return (
    <div>
      <h1>Precipitation</h1>
    </div>
  );
}
