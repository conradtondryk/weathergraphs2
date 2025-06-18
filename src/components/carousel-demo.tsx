import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PrecipitationSlide from "./carousel slides/precipitation";
import UvSlide from "./carousel slides/uv";
import WindSlide from "./carousel slides/wind";
import useSWR from "swr";
import { WeatherData } from "@/lib/weather-data";
import TemperatureMinSlide from "./carousel slides/temperaturemin";
import { RawData } from "@/lib/weather-data";
import { transformWeatherData } from "@/lib/weather-data";
const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }
  return response.json();
};

export function CarouselDemo() {
  const { data: apiResponse } = useSWR(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=uv_index_max,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&past_days=31&forecast_days=1",
    fetcher
  );
  const weatherData = apiResponse?.daily
    ? transformWeatherData(apiResponse.daily)
    : [];
  const slides = [
    <PrecipitationSlide weatherData={weatherData} />,
    <UvSlide weatherData={weatherData} />,
    <WindSlide weatherData={weatherData} />,
    <TemperatureMinSlide weatherData={weatherData} />,
  ];

  return (
    <Carousel
      className="w-full max-w-md mx-auto select-none"
      opts={{
        loop: true,
        align: "center",
      }}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {slides.map((slide, index) => (
          <CarouselItem
            key={index}
            className="pl-2 md:pl-4 basis-4/5 md:basis-3/4"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {slide}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
