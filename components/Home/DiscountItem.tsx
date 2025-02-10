import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DiscountItem = () => {
  return (
    <div className="mt-24 w-[90vw] md:max-w-4xl lg:max-w-6xl mx-auto">
      <h3 className="h3-bold text-center text-[#1A0B5B] mb-4">Discount Item</h3>
      <Tabs defaultValue="wood" className="w-full">
        <TabsList className="flex justify-center gap-1 md:gap-5 mb-8">
          <TabsTrigger value="wood">Wood Chair</TabsTrigger>
          <TabsTrigger value="plastic">Plastic Chair</TabsTrigger>
          <TabsTrigger value="sofa">Sofa Colletion</TabsTrigger>
        </TabsList>

        <TabsContent value="wood">
          <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
            {/* Left Section */}
            <div className="text-center md:text-left md:max-w-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">20% Discount Of All Products</h1>
              <h2 className="text-xl text-pink-500 font-semibold mb-6">Eams Sofa Compact</h2>
              <p className="text-gray-400 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
              <ul className="list-none text-left text-gray-400 flex flex-col md:flex-row md:justify-between ">
                <div className="flex flex-col gap-5">
                  <li className="flex items-center">
                    <span className="text-[#7569B2] mr-2">✔</span> Material expose like metals
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#7569B2] mr-2">✔</span> Simple neutral colours
                  </li>
                </div>
                <div className="flex flex-col gap-5">
                  <li className="flex items-center">
                    <span className="text-[#7569B2] mr-2">✔</span> Clear lines and geometric figures
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#7569B2] mr-2">✔</span> Material expose like metals
                  </li>
                </div>
              </ul>
              <button className="mt-8 px-3 py-3 bg-pink-500 text-white w-[9.5em] text-left pl-7 shadow-md hover:bg-pink-600 transition">Shop Now</button>
            </div>

            {/* Right Section */}
            <div className="relative mt-8 md:mt-0 md:ml-8 flex-shrink-0">
              <div className="absolute ml-[-2.5em] hidden sm:block sm:h-[500px] sm:w-[500px] inset-0 bg-pink-100 rounded-full -z-10"></div>
              <Image src="/images/tortuga.png" alt="Eams Sofa Compact" width={420} height={420} className="rounded-lg" />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="plastic">
          <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
            {/* Left Section */}
            <div className="text-center md:text-left md:max-w-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">20% Discount Of All Products</h1>
              <h2 className="text-xl text-pink-500 font-semibold mb-6">Eams Sofa Compact</h2>
              <p className="text-gray-400 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
              <ul className="list-none text-left text-gray-400 flex flex-col md:flex-row md:justify-between ">
                <div className="flex flex-col gap-5">
                  <li className="flex items-center">
                    <span className="text-[#7569B2] mr-2">✔</span> Material expose like metals
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#7569B2] mr-2">✔</span> Simple neutral colours
                  </li>
                </div>
                <div className="flex flex-col gap-5">
                  <li className="flex items-center">
                    <span className="text-[#7569B2] mr-2">✔</span> Clear lines and geometric figures
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#7569B2] mr-2">✔</span> Material expose like metals
                  </li>
                </div>
              </ul>
              <button className="mt-8 px-3 py-3 bg-pink-500 text-white w-[9.5em] text-left pl-7 shadow-md hover:bg-pink-600 transition">Shop Now</button>
            </div>

            {/* Right Section */}
            <div className="relative mt-8 md:mt-0 md:ml-8 flex-shrink-0">
              <div className="absolute ml-[-2.5em] inset-0 w-[500px] h-[500px] bg-pink-100 rounded-full -z-10"></div>
              <Image src="/products/p14.png" alt="Eams Sofa Compact" width={420} height={420} className="rounded-lg" />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="sofa">
          <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
            {/* Left Section */}
            <div className="text-center md:text-left md:max-w-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">20% Discount Of All Products</h1>
              <h2 className="text-xl text-pink-500 font-semibold mb-6">Eams Sofa Compact</h2>
              <p className="text-gray-400 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
              <ul className="list-none text-left text-gray-400 flex flex-col md:flex-row md:justify-between ">
                <div className="flex flex-col gap-5">
                  <li className="flex items-center">
                    <span className="text-[#7569B2] mr-2">✔</span> Material expose like metals
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#7569B2] mr-2">✔</span> Simple neutral colours
                  </li>
                </div>
                <div className="flex flex-col gap-5">
                  <li className="flex items-center">
                    <span className="text-[#7569B2] mr-2">✔</span> Clear lines and geometric figures
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#7569B2] mr-2">✔</span> Material expose like metals
                  </li>
                </div>
              </ul>
              <button className="mt-8 px-3 py-3 bg-pink-500 text-white w-[9.5em] text-left pl-7 shadow-md hover:bg-pink-600 transition">Shop Now</button>
            </div>

            {/* Right Section */}
            <div className="relative mt-8 md:mt-0 md:ml-8 flex-shrink-0">
              <div className="absolute ml-[-2.5em] inset-0 w-[500px] h-[500px] bg-pink-100 rounded-full -z-10"></div>
              <Image src="/products/p15.png" alt="Eams Sofa Compact" width={420} height={420} className="rounded-lg" />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DiscountItem;
