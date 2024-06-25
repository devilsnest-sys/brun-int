"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@libs/store';
import ProductCard from '../ProductCard';
import NoProductFound from '../NoProductFound';

const generateLayout = (layout: number) => {
  switch (layout) {
    case 1:
      return 'grid grid-cols-1 justify-between';
    case 5:
      return 'grid grid-cols-5 justify-between';
    default:
      return 'grid grid-cols-2 justify-between';
  }
}

const ProductList = ({data}) => {
  const { layout, productListing } = useSelector((state: RootState) => state.productListing)
  return (
    <section className="productlist my-8 max-w-7xl m-auto">
      <div className={`list__container ${generateLayout(layout)}`}>
        {
          data.length > 0 && data.map((product, index) => <ProductCard key={index} {...product} is2Col={layout === 2} isFirstChild={index%2 === 0} />)
        }
      </div>
      {
        productListing.length === 0 && <NoProductFound title='NO RESULTS FOUND, TRY REMOVING A FILTER' className="mt-8" />
      }
    </section>
  )
}

export default ProductList