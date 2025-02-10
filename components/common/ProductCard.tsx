"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const ProductCard = ({ product }: any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 flex-grow-0 shadow-lg overflow-hidden rounded-t-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="absolute ml-2 mt-1 z-20">
          <div className="flex justify-center items-center gap-4">
            <div className="w-8 h-8 rounded-full text-sm flex items-center justify-center text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] transition-all">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <div className="w-8 h-8 rounded-full text-sm flex items-center justify-center text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] transition-all">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="w-8 h-8 rounded-full text-sm flex items-center justify-center text-[#1389FF] hover:text-[#2F1AC4] hover:bg-[#EEEFFB] transition-all">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
      )}
      <div className="bg-[#F7F7F7] flex flex-col justify-center items-center h-[250px] pt-3">
        <div className={`relative w-full  ${hovered ? "h-40" : "h-44"}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 176px"
            className="object-contain"
          />
        </div>
        {hovered && (
          <button className="bg-[#08D15F] hover:bg-[#23af60] absolute mt-[200px] h-8 w-32 py-1 px-2 rounded-lg text-white">
            View Details
          </button>
        )}
      </div>

      {/* Card Content */}
      <div
        className={`flex flex-col cursor-pointer gap-1 py-3 text-center w-full ${
          hovered ? "bg-[#2F1AC4]" : "bg-white"
        }`}
      >
        <h3 className={`font-semibold text-lg ${hovered ? "text-white" : "text-[#FB2E86]"}`}>{product.name}</h3>
        <div className="flex gap-1 justify-center">
          <span className="inline-block w-4 h-1 rounded-lg bg-[#05E6B7]"></span>
          <span className="inline-block w-4 h-1 rounded-lg bg-[#FB2E86]"></span>
          <span className={`inline-block w-4 h-1 rounded-lg ${hovered ? "bg-white" : "bg-[#00009D]"}`}></span>
        </div>
        <p className={` text-sm1 ${hovered ? "text-white" : "text-[#151875]"}`}>Code - Y523201</p>
        <p className={` font-bold ${hovered ? "text-white" : "text-[#151875]"}`}>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
