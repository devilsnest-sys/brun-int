import React from 'react'
import SearchOrder from './SearchOrder'
import SearchDateAndStatus from './SearchDateAndStatus'

const OrdersFilter = () => {
  return (
    <section id='ordersfilters' className='space-y-6'>
        <SearchOrder />
        <SearchDateAndStatus />
    </section>
  )
}

export default OrdersFilter