"use client"
import React from 'react'
import ProductTableBody from '../ProductTableBody'
import ProductPagination from '../ProductPagination'
import ProductTableHeader from '../ProductTableHeader'

const ProductTable = () => {
  return (
    <section id="adminproduct__table">
      <ProductTableHeader />
      <ProductTableBody />
      <ProductPagination />
    </section>
  )
}

export default ProductTable



