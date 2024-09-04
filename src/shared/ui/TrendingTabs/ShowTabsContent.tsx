import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import TabCard from "./TabCard";

const ShowTabsContent = ({ items }: any) => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        orientation="horizontal"
      >
        <CarouselContent>
          {items.length < 1 ? (
            <h1 className="px-5">Sorry! No Data Found</h1>
          ) : (
            items.map((item: Record<string, any>, index: any) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <TabCard item={item} />
                </div>
              </CarouselItem>
            ))
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default ShowTabsContent;
