import Image from 'next/image'
import Link from 'next/link';

const TrendingProduct = ({product}:any) => {
    const discountedPrice = product.price - (product.price * (product.discounts / 100));
  
  return (
    <Link href={'#'} className='p-3 shadow-md bg-white'>
        <div className='bg-slate-100 py-10 mb-4'>
          <div className="w-full h-48 relative">
              <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-contain"
              />
            </div>
        </div>
        <p className='text-base font-bold text-center text-[#1A0B5B] mb-4'>{product.name}</p>

        <div className='flex justify-center items-center gap-4'>
        <p className='text-[#151875] text-sm font-bold'>${discountedPrice}</p>
        <p className='text-[#ACABC3] text-sm line-through'>{product.price}</p>
        </div>

    </Link>
  )
}

export default TrendingProduct