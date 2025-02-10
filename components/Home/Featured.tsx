"use client";

import React from "react";
import ProductCard from "../common/ProductCard";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

type FeaturedProducts = {
  products: any;
};

const Featured = ({ products }: FeaturedProducts) => {
  const totalPages = Math.ceil((products.length-4) / 4);
  const [currentPage, setCurrentPage] = React.useState(0);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div>
      <div className="w-[90vw] md:max-w-6xl mx-auto">
        <h3 className="h3-bold text-center text-[#1A0B5B] mb-12">Featured Products</h3>

        <Carousel>
          <CarouselContent
            className="transition-all gap-4"
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {products.slice(4,products.length-1).map((product:any, index:number) => (
              <CarouselItem key={index} className="pl-1 sm:basis-1/2 md:1/3 lg:basis-1/4">
                <Card className="border-none">
                  <ProductCard key={product.id} product={product} />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Pagination Buttons */}
        <div className="mt-12 flex justify-center gap-2 w-full">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span key={index} onClick={() => handlePageChange(index)} className={`w-4 h-[5px] rounded-lg cursor-pointer ${currentPage === index ? "w-8 bg-[#FB2E86] transition-all" : "bg-gray-400"}`}>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
