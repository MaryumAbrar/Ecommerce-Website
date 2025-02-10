import BreadCrumb from "@/components/common/BreadCrumb"
import ShopDefault from "@/components/defaultGrid/ShopDefault"
import Brands from "@/components/Home/Brands"


const ShopList = async () => {

  const products = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`).then(res => res.json());


  return (
    <div>
      <BreadCrumb pageTitle='Shop List' />
      
      <ShopDefault View="list" products={products}  />

      <Brands />      
    </div>
  )
}

export default ShopList