import BreadCrumb from '@/components/common/BreadCrumb'
import ShopDefault from '@/components/defaultGrid/ShopDefault'
import Brands from '@/components/Home/Brands'
import React from 'react'
import fs from 'fs';
import path from 'path';

const ShopGridDefault = async () => {
    const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const products = JSON.parse(jsonData);

  return (
    <div>
         <BreadCrumb  pageTitle='Shop Grid Default' /> 

         <ShopDefault products={products} /> 

         <Brands />
    </div>
  )
}

export default ShopGridDefault