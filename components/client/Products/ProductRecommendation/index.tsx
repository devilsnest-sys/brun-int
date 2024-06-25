'use client'
import React from 'react'
import { RootState } from '@libs/store'
import ProductCard from '../ProductCard'
import { useSelector } from 'react-redux'

const generateLayout = (layout: number) => {
  switch (layout) {
    case 1:
      return 'grid grid-cols-1 gap-x-8 gap-y-12';
    case 5:
      return 'grid grid-cols-5 gap-x-8 gap-y-12';
    default:
      return 'grid grid-cols-2 gap-8 sm:gap-20';
  }
}

const ProductRecommendation = ({ layout = 2 }: { layout?: number }) => {

  const { productListing } = useSelector((state: RootState) => state.productListing)

  return (
    <section className='max-w-7xl mx-auto mt-5 sm:mt-10'>
      <h4 className="text-sm">YOU MAY ALSO LIKE</h4>
      <div className={`products__card__container ${generateLayout(layout)}`}>
        {
          productListing.map((product, index) => <ProductCard key={index} {...product} />)
        }
      </div>
    </section>
  )
}

export default ProductRecommendation