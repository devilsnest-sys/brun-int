import React from 'react'
import SearchCustomers from './SearchCustomers'
import SearchActiveAndSort from './SearchActiveAndSort'

const CustomersFilter = () => {
  return (
    <section id='ordersfilters' className='space-y-6'>
      <SearchCustomers />
      <SearchActiveAndSort />
    </section>
  )
}

export default CustomersFilter