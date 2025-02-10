"use cleint";

import Image from "next/image";
import { useState } from "react";

const TopProduct = ({ product }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`bg-slate-100 grid place-items-center h-72 w-72 mb-4 ${isHovered && "border-[10px]"} border-blue-500 rounded-full border-t-0  border-r-0`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className={`w-full ${isHovered ? "h-36" : "h-40"} relative`}>
          <Image src={product.images[0]} alt={product.name} fill sizes="(max-width: 768px) 50vw, 160px" className="object-contain" />
        </div>

        {isHovered && <button className="absolute h-10 w-28 mt-[14em] px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-md shadow-lg">View Shop</button>}
      </div>

      {/* Button on Hover */}

      {/* Text Content */}
      <h3 className="mt-4 text-lg text-center font-semibold text-blue-900">{product.name}</h3>
      <p className="text-gray-600 text-center">${product.price}</p>
    </div>
  );
};

export default TopProduct;
