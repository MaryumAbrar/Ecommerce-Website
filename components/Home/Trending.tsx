import Link from "next/link";
import ProductCard from "../common/ProductCard";
import TrendingProduct from "../common/TrendingProduct";
import Image from "next/image";

const Trending = ({ trending }: any) => {
  return (
    <div className="w-full mt-24">
      <div className="w-[90vw] lg:max-5xl hero:max-w-6xl mx-auto">
        <h3 className="h3-bold text-center text-[#1A0B5B] mb-14">Trending Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 mx-auto gap-5 mb-10">
          {trending.slice(0, 4).map((product: any) => (
            <TrendingProduct key={product.id} product={product} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[35%_35%_30%] hero:grid-cols-[38%_38%_24%] gap-5 mb-10">
          <div className="bg-slate-100 hover:bg-slate-200 p-4 px-7">
            <h4 className="text-2xl text-[#1A0B5B] mt-5">23% off in all products</h4>
            <Link className="text-[#FB4997] underline text-base" href="#">
              Shop Now
            </Link>

            <div className="w-[25vw] max-w-[300px] h-48 relative mr-[-1em] md:mr-[-5.5em] float-end">
              <Image src="/images/image1162.png" alt="clock" fill sizes="(max-width: 768px) 50vw, 192px" className="object-contain" />
            </div>
          </div>

          <div className="bg-slate-100 hover:bg-slate-200 p-4">
            <h4 className="text-2xl text-[#1A0B5B] mt-5">23% off in all products</h4>
            <Link className="text-[#FB4997] underline text-base" href="#">
              View Collections
            </Link>

            <div className="w-[25vw] max-w-[300px] h-48 relative mr-[0.5em] float-end">
              <Image src="/images/image1161.png" alt="clock" fill sizes="(max-width: 768px) 50vw, 192px" className="object-contain" />
            </div>
          </div>

          <div >
            {trending.slice(4, 7).map((product: any) => (
              <div className="grid grid-cols-[30%_70%] gap-4 mb-5">
                <div className="bg-slate-100 py-2 grid place-items-center">
                  <div className="w-16 h-16 relative">
                    <Image src={product.images[0]} alt="clock" fill sizes="(max-width: 768px) 50vw, 64px" className="object-contain" />
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-[#1A0B5B] text-base">{product.name}</p>
                  <p className="text-[#1A0B5B] text-sm line-through">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
