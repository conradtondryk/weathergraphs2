"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { AreaChart } from "@/tremorcomponents/area-graph";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/carousel";
import { WeatherData } from "@/lib/weather-data";
import TemperatureSlide from "@/components/carousel slides/temperature";
import UvSlide from "@/components/carousel slides/uv";
import PrecipitationSlide from "@/components/carousel slides/precipitation";
import WindSlide from "@/components/carousel slides/wind";
import HumiditySlide from "@/components/carousel slides/humidity";
import { cn } from "@/lib/utils";

// export function Carousel1() {
//   return (
//     <Carousel className="w-full max-w-xs">
//       <CarouselContent>
//         <CarouselItem key={index}>
//           <div className="p-1">
//             <Card></Card>
//           </div>
//         </CarouselItem>
//         ))
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }

export function Carousel1({ data }: { data: WeatherData[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const searchParams = useSearchParams();

  const initialIndex = Number(searchParams.get("slide-index") || 0);
  const [current, setCurrent] = useState(initialIndex);

  useEffect(() => {
    if (!api) return;

    api.scrollTo(initialIndex, true);

    const handleSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      setCurrent(selectedIndex);

      const params = new URLSearchParams(searchParams.toString());
      params.set("slide-index", selectedIndex.toString());
      window.history.pushState(null, "", `?${params.toString()}`);
    };

    api.on("select", handleSelect);
    api.on("reInit", handleSelect);

    return () => {
      api.off("select", handleSelect);
      api.off("reInit", handleSelect);
    };
  }, [api]);

  const handleSlideClick = (index: number) => {
    if (!api || current === index) return;
    api.scrollTo(index);
  };

  const slides = [
    <TemperatureSlide data={data} />,
    <UvSlide data={data} />,
    <WindSlide data={data} />,
    <PrecipitationSlide data={data} />,
    <HumiditySlide data={data} />,
  ];

  return (
    <div className="relative w-full mx-auto">
      {/* Left gradient fade */}
      <div className="absolute left-0 top-0 z-10 h-full w-[5%] bg-gradient-to-r from-white to-transparent dark:from-background"></div>

      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 basis-4/5">
              <div className="p-1" onClick={() => handleSlideClick(index)}>
                <Card
                  className={cn(
                    "aspect-square overflow-hidden transition-all duration-300 gap-4",
                    current === index
                      ? "opacity-100 scale-100"
                      : "md:opacity-50 md:scale-95 cursor-pointer md:hover:opacity-80 md:hover:scale-[0.97]"
                  )}
                >
                  {slide}
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Right gradient fade */}
      <div className="absolute right-0 top-0 z-10 h-full w-[5%] bg-gradient-to-l from-white to-transparent dark:from-background"></div>
    </div>
  );
}
