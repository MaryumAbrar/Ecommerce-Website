import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";

const RelatedProduct = ({ product }: any) => {
  const discountedPrice = product.price - product.price * (product.discounts / 100);

  return (
    <div>
      <div className="w-60 h-72 relative rounded-lg bg-slate-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 192px"
          className="object-contain"
        />
      </div>

      <div className="mt-1 flex gap-10">
        <div className="ml-1 ">
          <p className="text-sm font-bold mt-3 text-[#1A0B5B] mb-4">{product.name}</p>
          <p className="text-[#151875] text-[0.8rem] font-bold">${discountedPrice}</p>
        </div>
        <span className="mt-4">
        <Rating rating={product.rating.avg} />
        </span>
      </div>
    </div>
  );
};

export default RelatedProduct;
