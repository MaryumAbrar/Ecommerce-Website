"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Rat } from "lucide-react";
import Rating from "./Rating";

const ListProduct = ({ product }: any) => {
  const discountedPrice = product.price - product.price * (product.discounts / 100);

  return (
    <div className="w-full grid grid-cols-[30%_70%]  gap-5">
      <div className="w-full h-60 relative">
        <Image src={product.images[1]} alt={product.name} fill sizes="(max-width: 768px) 50vw, 240px" className="object-contain" />
      </div>

      <div className="flex flex-col gap-2 mt-12">
        <div className="flex flex-col md:max-w-[80%] lg:items-center lg:flex-row lg:justify-between lg:max-w-[40%] gap-2">
          <h4 className="text-lg font-bold text-[#1A0B5B]">{product.name}</h4>
          <div className="flex gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-[#DE9034]"></span>
            <span className="inline-block w-3 h-3 rounded-full bg-[#FB2E86]"></span>
            <span className={`inline-block w-3 h-3 rounded-full bg-[#8568FF]`}></span>
          </div>
        </div>

        <div className="flex gap-5 items-center ">
          <div className="flex gap-5 items-center ">
            <p className="text-[#151875] text-sm font-bold">${discountedPrice}</p>
            <p className="text-pink-600 text-sm line-through">${product.price}</p>
          </div>
          <Rating rating={product.rating.avg} />
        </div>

        <p className="mt-2 text-base text-slate-400 max-w-[70%]">{product.description.desc}</p>

        <div className="flex gap-5 mt-5">
          <div className="w-8 h-8 rounded-full text-sm flex items-center justify-center text-[#2F1AC4] hover:bg-slate-200 transition-all">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
          <div className="w-8 h-8 rounded-full text-sm flex items-center justify-center text-[#2F1AC4] hover:bg-slate-200 transition-all">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className="w-8 h-8 rounded-full text-sm flex items-center justify-center text-[#2F1AC4] hover:bg-slate-200 transition-all">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
