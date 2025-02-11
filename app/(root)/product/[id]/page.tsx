import BreadCrumb from "@/components/common/BreadCrumb";
import Rating from "@/components/common/Rating";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { faFacebookF, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import RelatedProduct from "@/components/common/RelatedProduct";


const ProductDetails = async ({ params }: any) => {
  const { id } = await params;

  let product = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`,{cache: "no-store",}).then((res) => res.json());
  let discountPrice = product.price - product.price * (product.discounts / 100);

  return (
    <div>
      <BreadCrumb pageTitle="Product Details" />

    {/* Product */}
      <div className="w-[90vw] grid grid-cols-1 shadow-lg p-5 xl:grid-cols-2 xl:gap-8 mt-6 max-w-6xl mx-auto">
        {/* Product Image Gallery */}
        <div className="grid sm:max-h-[487px] gap-2 sm:grid-cols-[30%_70%]">
          <div className="flex justify-center sm:justify-start sm:flex-col gap-[10px]">
            {product.images.slice(1, 4).map((img: any, index: number) => (
              <div className="relative w-[20vw] h-[20vw] sm:w-[151px] sm:h-[156px] bg-slate-100 rounded-md">
                <Image
                  key={index}
                  src={img}
                  alt={`Gallery Image ${index + 1}`}
                 fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <div className="relative h-[40vh] w-[77vw] sm:w-[375px] sm:h-[487px] bg-slate-100 rounded-md">
            <Image src={product.images[0]} alt={product.name} fill sizes="100vw" className="object-contain" />
          </div>
        </div>

        {/* Product Information */}
        <div className="mt-16">
          <h1 className="text-2xl md:text-4xl font-bold text-[#0D134E]">{product.name}</h1>
          <div className="flex items-center mt-2">
            <Rating ml="2px" rating={product.rating.avg} />{" "}
            <span className="ml-2 text-sm text-[#151875]">({product.rating.count})</span>
          </div>
          <div className="mt-3 flex items-center space-x-4">
            <span className="text-[#151875] font-semibold">${discountPrice}</span>
            <span className="text-[#FB2E86] line-through">${product.price}</span>
          </div>
          <div className="mt-2">
            <h4 className="text-[#151875] font-semibold">Color</h4>
          </div>
          <p className="mt-4 text-gray-400">{product.description.desc}</p>

          <div className="mt-8 flex items-center gap-7">
            <h4 className="cursor-pointer ml-16 text-[#0D134E] underline text-">Add to Cart</h4>
            <FontAwesomeIcon className="cursor-pointer" icon={faRegularHeart} />
          </div>

          <div className="mt-6 flex items-center gap-2">
            <h4 className="text-[#151875] font-semibold">Categories:</h4>
            {
                product.categories.map((category: any, index: number) => (
                    <span key={index} className="text-slate-400 text-sm">
                        {category}
                        {index !== product.categories.length - 1 && ", "}
                    </span>
                ))
            }
          </div>

          <div className="mt-6 flex items-center gap-2">
            <h4 className="text-[#151875] font-semibold">Tags</h4>

            {
                product.tags.map((tag: any, index: number) => (
                    <span key={index} className="text-slate-400 text-sm">
                        {tag}
                        {index !== product.categories.length - 1 && ", "}
                    </span>
                ))
            }
          </div>

          <div className="mt-4 flex items-center gap-5">
            <h4 className="text-[#151875] font-semibold">Share</h4>
            <div className="flex space-x-2 -mt-1">
              <Link href="https://facebook.com" aria-label="Facebook" className="">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-gray-100 w-2 p-[2px] h-2 bg-[#151875] rounded-full hover:bg-[#14164d]"
                />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-gray-100 w-2 p-[2px] h-2 bg-[#FB2E86] rounded-full hover:bg-[#14164d]"
                />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-gray-100 w-2 p-[2px] h-2 bg-[#151875] rounded-full hover:bg-[#14164d]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

    {/* Details */}
    
    <div className="mt-24 bg-slate-100 py-24">
        <div className="w-[95vw] md:max-w-6xl mx-auto">
        <Tabs defaultValue="description" className="w-full">
        <TabsList className="flex gap-3 md:gap-20 mb-8">
          <TabsTrigger className="sm:text-xl" value="description">Description</TabsTrigger>
          <TabsTrigger className="sm:text-xl" value="additional">Additional Info</TabsTrigger>
          <TabsTrigger className="sm:text-xl" value="reviews">Reviews</TabsTrigger>
          <TabsTrigger className="sm:text-xl" value="video">Video</TabsTrigger>
        </TabsList>

        <TabsContent value="description">
          <h4 className="text-[#0D134E] text-lg">Varius tempor.</h4>
          <span className="text-gray-400 mt-4 text-sm">{product.description.desc}</span>

          
          <h4 className="text-[#0D134E] mt-6 text-lg">More Details</h4>
          {product.description.More_Details.map((item:any, index:number)=>(
            <p key={index} className="flex gap-3 mt-3 items-center">
                <span  ><FontAwesomeIcon icon={faArrowRight} /></span>
                <span className="text-gray-400 text-sm" >{item}</span>
            </p>
          ))}
        </TabsContent>

        <TabsContent value="additional">        
          <span className="text-gray-400 mt-4 ">{product.additionalInfo}</span>
        </TabsContent>

        <TabsContent value="reviews">        
          <div className="flex flex-col gap-4">
            {
                product.reviews.map((review:any, index:number)=>(
                    <div key={index} className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <img src={review.image} className="w-14 h-14 rounded-full" alt="review" />
                            <h4 className="text-[#0D134E] text-lg">{review.reviewer}</h4>
                        <Rating ml="2px" rating={review.stars} />
                        </div>
                        <span className="text-gray-400">{review.comment}</span>
                    </div>
                ))
            }
          </div>
        </TabsContent>

        
        <TabsContent value="video">        
          <div className="flex h-80 w-full justify-center">
            <iframe
              width="560"
              height="560"
              src={`https://www.youtube.com/embed/${product.video}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="max-w-full h-auto"
            ></iframe>
          </div>
        </TabsContent>
        </Tabs>
        </div>


    </div>


    {/* Related Products */}
    <div className="mt-20 w-[90vw] lg:max-w-6xl mx-auto">
     <h2 className="font-bold text-[#0D134E] text-3xl">Related Products</h2>
        
        <div className="grid place-content-center sm:place-content-start sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
            <RelatedProduct product={product} />
            <RelatedProduct product={product} />
            <RelatedProduct product={product} />
            <RelatedProduct product={product} />
        </div>
        

    </div>

    </div>
  );
};

export default ProductDetails;
