'use client'
import React from 'react'
import { useAdminProductListing } from './productlisting.hooks'
import FullScreenLoader from '@components/common/FullScreenLoader'
import ProductTable from '@components/admin/products/ProductTable'
import ProductHeader from '@components/admin/products/ProductHeader'
import ProductSearch from '@components/admin/products/ProductSearch'
import ProductFilters from '@components/admin/products/ProductFilters'

const ProductListings = () => {

  const {isLoadingFullScreenLoader} = useAdminProductListing();

  if(isLoadingFullScreenLoader) return <FullScreenLoader />

  return (
    <section id='product-listings' className='product-listing space-y-6 mt-6'>
      <ProductHeader />
      <ProductSearch />
      <ProductFilters />
      <ProductTable />
    </section>
  )
}

export default ProductListings