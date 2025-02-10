import Brands from "@/components/Home/Brands";
import DiscountItem from "@/components/Home/DiscountItem";
import Featured from "@/components/Home/Featured";
import Hero from "@/components/Home/Hero";
import LatestBlogs from "@/components/Home/LatestBlogs";
import LatestProducts from "@/components/Home/LatestProducts";
import NewsLetter from "@/components/Home/NewsLetter";
import ShopexOffer from "@/components/Home/ShopexOffer";
import TopCategories from "@/components/Home/TopCategories";
import Trending from "@/components/Home/Trending";
import Unique from "@/components/Home/Unique";



export const revalidate = 3600

export default async function Home() {
  const [featuredProducts, latestProducts,trendingProducts,topCategories] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/featuredProducts`).then(res => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/latestProducts`).then(res => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/trendingProducts`).then(res => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/topCategories`).then(res => res.json()),
  ]);

  return (
      <>
        {/* Hero Section */}
          <Hero />   

          {/* Featured Section */}
          <Featured products={featuredProducts} />

          {/* Latest Products Section */}
          <LatestProducts products={latestProducts} />

          {/* Shopex Offer */}
          <ShopexOffer />

          {/* Unique Section */}
          <Unique />

          <Trending trending={trendingProducts} />

          <DiscountItem />

          <TopCategories products={topCategories} />

          <NewsLetter />

          <Brands />

          <LatestBlogs />
      </>
  );
}
