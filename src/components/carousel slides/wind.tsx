import { WeatherData } from "@/lib/weather-data";

interface WindSlideProps {
  weatherData: WeatherData[];
}

export default function WindSlide({ weatherData }: WindSlideProps) {
  return (
    <div>
      <h1>Wind</h1>
    </div>
  );
}
