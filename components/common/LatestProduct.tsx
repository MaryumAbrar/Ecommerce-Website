"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";

const LatestProduct = ({ product }: any) => {
  const discountedPrice = product.price - product.price * (product.discounts / 100);
  const onSale = product.discounts > 10;
  const [hovered, setHovered] = useState(false);

  return (
    <div className="shadow-lg">
      <div className={`p-2  h-[260px] ${hovered ? "bg-white" : "bg-slate-100"}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {onSale && (
          <div className="absolute w-56 h-16 ml-[-4em]">
          <div className="w-full h-full relative z-20">
            <Image src="/images/Sale.svg" alt={product.name} fill sizes="(max-width: 768px) 50vw, 224px" className="object-contain" />
          </div>
        </div>
        )}

        {hovered && (
          <div className="absolute ml-2 mt-[8em] z-20">
            <div className="flex flex-col justify-center items-center">
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

        <div className="w-full z-0 h-64 relative">
          <Image src={product.images[0]} alt={product.name} fill sizes="(max-width: 768px) 50vw, 256px" className="object-contain" />
        </div>
      </div>

      <div className="flex justify-between items-center mt-5">
        <p className="text-base font-bold text-center text-[#1A0B5B]">{product.name}</p>

        <div className="flex gap-5 items-center ">
          <p className="text-[#151875] text-sm font-bold">${discountedPrice}</p>
          <p className="text-red-600 text-sm line-through">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
