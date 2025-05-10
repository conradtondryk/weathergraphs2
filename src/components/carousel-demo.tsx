import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import HumiditySlide from "./carousel slides/humidity";
import PrecipitationSlide from "./carousel slides/precipitation";
import TemperatureSlide from "./carousel slides/temperature";
import UvSlide from "./carousel slides/uv";
import WindSlide from "./carousel slides/wind";

const slides = [
  <HumiditySlide />,
  <PrecipitationSlide />,
  <TemperatureSlide />,
  <UvSlide />,
  <WindSlide />,
];

export function CarouselDemo() {
  return (
    <Carousel
      className="w-full max-w-md mx-auto"
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
