import Image from 'next/image'
import React from 'react'

import product from '@public/assets/product.jpg'

const CheckoutOrderItem = () => {
  return (
    <div className="CartItem__text flex gap-6 justify-center">
      <Image src={product} alt="product image" width={136} height={190} />
      <div className="text__container max-w-[194px] flex flex-col gap-4">
        <p className="item__text text-sm">TEXTURED OVERSIZE KNIT POLO SHIRT</p>
        <div className="item__size__color text-sm uppercase flex gap-5 ">
          <p className="">Size M</p>
          <p className="">White</p>
        </div>
        <p className="item__price ">₹ 2990.00</p>
      </div>
    </div>
  )
}

export default CheckoutOrderItem