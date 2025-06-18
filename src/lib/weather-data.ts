interface RawData {
  time: string[];
  uv_index_max: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_sum: number[];
  wind_speed_10m_max: number[];
}

interface WeatherData {
  time: string;
  uv_index: number;
  temperature_max: number;
  temperature_min: number;
  precipitation: number;
  wind: number;
} 

function transformWeatherData(data: RawData): WeatherData[] {
  return data.time.map((time, index) => ({
    time: time,
    uv_index: data.uv_index_max[index],
    temperature_max: data.temperature_2m_max[index],
    temperature_min: data.temperature_2m_min[index],
    precipitation: data.precipitation_sum[index],
    wind: data.wind_speed_10m_max[index],
  }));
}
