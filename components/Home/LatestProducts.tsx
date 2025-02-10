

import LatestProduct from "../common/LatestProduct";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LatestProducts = ({ products }: any) => {

  const bestSeller = products.map((product:any) => product).sort((a: any, b: any) => b.rating.avg - a.rating.avg);
  const featuredProducts = products.filter((product: any) => product.featured === true);
  const specialOffer = products.filter((product: any) => product.specialOffer === true);

  return (
    <div className="mt-24 w-[90vw] lg:max-w-6xl mx-auto">
      <h3 className="h3-bold text-center text-[#1A0B5B] mb-4">Latest Products</h3>
      <Tabs defaultValue="new" className="w-full">
        <TabsList className="flex justify-center gap-1 md:gap-5 mb-8">
          <TabsTrigger value="new">New Arrival</TabsTrigger>
          <TabsTrigger value="best">Best Seller</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="special">Special Offer</TabsTrigger>
        </TabsList>

        <TabsContent value="new">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {products.slice(0, 6).map((product: any, index: number) => (
              <div key={product.id} className={index <= 3 ? "mb-16" : ""}>
                <LatestProduct product={product} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="best">
          <div className="grid grid-cols-3 gap-5 mb-10">
            {bestSeller.slice(0, 6).map((product: any, index: number) => (
              <div key={product.id} className={index <= 3 ? "mb-16" : ""}>
                <LatestProduct product={product} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="featured">
          <div className="grid grid-cols-3 gap-5 mb-10">
            {featuredProducts.slice(0, 6).map((product: any, index: number) => (
              <div key={product.id} className={index <= 3 ? "mb-16" : ""}>
                <LatestProduct product={product} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="special">
          <div className="grid grid-cols-3 gap-5 mb-10">
            {specialOffer.slice(0, 6).map((product: any, index: number) => (
              <div key={product.id} className={index <= 3 ? "mb-16" : ""}>
                <LatestProduct product={product} />
              </div>
            ))}
          </div>
        </TabsContent>
       

      </Tabs>
    </div>
  );
};

export default LatestProducts;
