import Image from "next/image";
import React from "react";

interface ISlide {
  imageLeft?: string | null;
  imageRight?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  subtext?: string;
}

const Slide = ({ imageLeft, imageRight, subtext, title, description, buttonText }: ISlide) => {
  return (
    <div className="bg-slate-100 h-[100vh] md:h-[100%] pt-3 xl: pb-10">
         <div className="max-w-[90vw] mx-auto grid hero:max-w-[1920px] lg:grid-cols-[5%_90%]">
           <div className="hidden lg:block lg:mr-[-10em] 2xl:mr-[-16em] relative top-[-0.8em] left-[0]">
           {imageLeft && (
             <Image src={imageLeft} alt="Left Image" width={300} height={500} className="w-auto object-contain" />
           )}
           </div>
           <div className="flex flex-col justify-center items-center py-10 md:flex-row lg:ml-[10em] 3xl:ml-[0em] lg:max-w-[1200px]  hero:max-w-[1920px]">
             <div>
               <div className="mb-5 md:w-[35vw]">
                 <p className="text-[#402933] font-bold">{subtext}</p>
                 <h2 className="mt-5 mb-5 text-2xl lg:text-5xl leading-10 font-bold">{title}</h2>
                 <p className="text-gray-400 mt-3 lg:mt-5 lg:text-lg">{description}</p>
                 <button className="mt-5 px-5 py-2 md:px-10 md:py-3 bg-[#FB2E86] text-white font-bold hover:bg-pink-600">{buttonText}</button>
               </div>
             </div>
   
             {/* Right Image */}
             {imageRight && (
             <div>
               <div>
                 <Image src={imageRight} alt="Left Image" width={600} height={500} className="w-72 md:w-auto h-auto" />
               </div>
             </div>
               )}
           </div>
         </div>
       </div>
  );
};

export default Slide;
