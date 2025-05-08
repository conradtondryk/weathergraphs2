import { WeatherData } from "./weather-data";

export async function fetchWeatherData(): Promise<WeatherData[]> {
  const response = await fetch("https://fake-api.lynas.dev/weather");

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }

  return response.json();
}
