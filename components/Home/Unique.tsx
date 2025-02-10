import Image from "next/image";

const Unique = () => {
  return (
    <div className="w-full bg-slate-100 mt-20 py-2 flex justify-center items-center">
      <div className="w-[90vw] flex flex-col md:max-w-5xl md:flex-row gap-3">
        <Image src="/images/sofa1.png" alt="Unique 1" height={300} width={500} className="h-full" />
        <div className="flex flex-col mt-16">
          <h3 className="h5-bold text-[#1A0B5B] mb-4">Unique Features Of leatest & Trending Poducts</h3>
         <div className="flex mb-6 gap-2">
            <span className="inline-block mt-[0.45em] w-3 h-3 bg-[#F52B70] rounded-full flex-shrink-0" aria-hidden="true"></span>
            <p className="text-[#ACABC3]">All frames constructed with hardwood solids and laminates</p>
         </div>
    
         <div className="flex mb-6 gap-2">
            <span className="inline-block mt-[0.45em] w-3 h-3 bg-[#2B2BF5] rounded-full flex-shrink-0" aria-hidden="true"></span>
            <p className="text-[#ACABC3]">Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p>
         </div>

         <div className="flex mb-6 gap-2">
            <span className="inline-block mt-[0.45em] w-3 h-3 bg-[#2BF5CC] rounded-full flex-shrink-0" aria-hidden="true"></span>
            <p className="text-[#ACABC3]">Arms, backs and seats are structurally reinforced</p>
         </div>

        <div className="flex items-center gap-4">
         <button className="mt-5 px-6 py-2 bg-[#FB2E86] text-white font-bold hover:bg-pink-600">
           Add To Cart
          </button>
            <p className="text-sm text-[#151875] mt-5">B&B Italian Sofa <br />$32.00</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;
