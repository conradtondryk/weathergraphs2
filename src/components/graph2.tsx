"use client"

import useSWR from "swr"
import { AreaChart } from "@/tremorcomponents/areagraph"

interface WeatherData {
  date: string
  temperature_c: number
  humidity_percent: number
  uv_index: number
  precipitation_mm: number
  wind_speed_kmh: number
  id: string
}

// Fetcher function for SWR
const fetcher = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`)
  }
  return response.json()
}

export const graph2 = () => {
  const { data: weatherData, error, isLoading } = useSWR<WeatherData[]>(
    "https://fake-api.lynas.dev/weather",
    fetcher
  )

  // Format data for the chart
  const chartData = weatherData?.map(item => ({
    date: new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    UV_Index: item.uv_index
  })) || []

  if (isLoading) return <div>Loading weather data...</div>
  if (error) return <div>Error loading data: {error.message}</div>
  
  return (
    <AreaChart
      className="h-80"
      data={chartData}
      index="date"
      categories={["UV_Index"]}
      valueFormatter={(number: number) => `${number.toFixed(1)}°C`}
      onValueChange={(v) => console.log(v)}
    />
  )
}