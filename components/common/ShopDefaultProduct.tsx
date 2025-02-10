"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";

const ShopDefaultProduct = ({ product }: any) => {
  const discountedPrice = product.price - product.price * (product.discounts / 100);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="shadow-lg">
      <div className={`p-2  h-[260px] ${hovered ? "bg-slate-200" : "bg-slate-100"}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {hovered && (
          <div className="absolute ml-2 mt-[8em] z-20">
            <div className="flex flex-col justify-center items-center">
              <div className="w-8 h-8 rounded-full text-sm flex items-center justify-center text-[#2F1AC4] hover:bg-white transition-all">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
              <div className="w-8 h-8 rounded-full text-sm flex items-center justify-center text-[#2F1AC4] hover:bg-white transition-all">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="w-8 h-8 rounded-full text-sm flex items-center justify-center text-[#2F1AC4] hover:bg-white transition-all">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          </div>
        )}

        <div className="w-full z-0 h-60 relative">
          <Image src={product.images[1]} alt={product.name} fill sizes="(max-width: 768px) 50vw, 240px" className="object-contain" />
        </div>
      </div>

      <div className="flex flex-col gap-2 justify-center items-center mt-5">
        <h4 className="text-lg font-bold text-center text-[#1A0B5B]">{product.name}</h4>
        <div className="flex gap-2 justify-center">
          <span className="inline-block w-2 h-2 rounded-full bg-[#DE9034]"></span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#FB2E86]"></span>
          <span className={`inline-block w-2 h-2 rounded-full bg-[#8568FF]`}></span>
        </div>
        <div className="flex gap-5 items-center ">
          <p className="text-[#151875] text-sm font-bold">${discountedPrice}</p>
          <p className="text-pink-600 text-sm line-through">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ShopDefaultProduct;
