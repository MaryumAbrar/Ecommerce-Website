import BreadCrumb from '@/components/common/BreadCrumb'
import ShopDefault from '@/components/defaultGrid/ShopDefault'
import Brands from '@/components/Home/Brands'
import React from 'react'

const ShopGridDefault = async () => {

  const products = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`).then(res => res.json());

  return (
    <div>
         <BreadCrumb  pageTitle='Shop Grid Default' /> 

         <ShopDefault products={products} /> 

         <Brands />
    </div>
  )
}

export default ShopGridDefault