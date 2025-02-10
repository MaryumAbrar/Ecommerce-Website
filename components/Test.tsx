"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

export default function Test() {
  const totalItems = 5; // Total number of items
  const itemsPerPage = 4; // Items to show per page (adjust as needed)
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = React.useState(0);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="w-full max-w-6xl">
      <Carousel>
        <CarouselContent
          className="transition-transform"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
          }}
        >
          {Array.from({ length: totalItems }).map((_, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* Pagination Buttons */}
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <Button
            key={index}
            onClick={() => handlePageChange(index)}
            className={`px-3 py-2 rounded-lg ${
              currentPage === index
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
}
