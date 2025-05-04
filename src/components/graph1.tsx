"use client"

import { useEffect, useState } from "react"
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

export const AreaChartHero = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("https://fake-api.lynas.dev/weather")
        
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`)
        }
        
        const data = await response.json()
        setWeatherData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
        console.error("Error fetching weather data:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchWeatherData()
  }, [])

  // Format data for the chart
  const chartData = weatherData.map(item => ({
    date: new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    Temperature: item.temperature_c
  }))

  if (isLoading) return <div>Loading weather data...</div>
  if (error) return <div>Error loading data: {error}</div>
  
  return (
    <AreaChart
      className="h-80"
      data={chartData}
      index="date"
      categories={["Temperature"]}
      valueFormatter={(number: number) => `${number.toFixed(1)}°C`}
      onValueChange={(v) => console.log(v)}
    />
  )
}