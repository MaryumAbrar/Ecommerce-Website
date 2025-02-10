"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import TopProduct from "../common/TopProduct";

type FeaturedProducts = {
  products: any;
};

const TopCategories = ({ products }: FeaturedProducts) => {
  const totalPages = Math.ceil((products.length-4) / 4);
  const [currentPage, setCurrentPage] = React.useState(0);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div>
      <div className="w-[90vw] md:max-4xl lg:max-w-6xl mx-auto">
        <h3 className="h3-bold text-center text-[#1A0B5B] mt-16 mb-16">Top Categories</h3>

        <Carousel>
          <CarouselContent
            className="transition-all gap-4"
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {products.slice(4,products.length-1).map((product:any, index:number) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 hero:basis-1/4">
                <Card className="border-none">
                  <TopProduct key={product.id} product={product} />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Pagination Buttons */}
        <div className="mt-12 flex justify-center gap-2 w-full">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span key={index} onClick={() => handlePageChange(index)} className={`w-3 h-3 rounded-full cursor-pointer ${currentPage === index ? "bg-[#FB2E86] transition-all" : "border-[1px] border-pink-500"}`}>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
