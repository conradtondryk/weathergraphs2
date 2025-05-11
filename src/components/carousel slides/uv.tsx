import { WeatherData } from "@/lib/weather-data";

interface UvSlideProps {
  weatherData: WeatherData[];
}

export default function UvSlide({ weatherData }: UvSlideProps) {
  return (
    <div>
      <h1>Uv</h1>
    </div>
  );
}
