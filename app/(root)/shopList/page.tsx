import BreadCrumb from "@/components/common/BreadCrumb"
import ShopDefault from "@/components/defaultGrid/ShopDefault"
import Brands from "@/components/Home/Brands"
import fs from 'fs';
import path from 'path';

const ShopList = async () => {

  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);


  return (
    <div>
      <BreadCrumb pageTitle='Shop List' />
      
      <ShopDefault View="list" products={products}  />

      <Brands />      
    </div>
  )
}

export default ShopList