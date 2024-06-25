import React from 'react'
import OrdersTableHeader from './OrdersTableHeader'
import OrdersPagination from './OrdersPagination'
import OrdersTableBody from './OrdersTableBody'

const OrdersList = () => {
  return (
    <section id='OrdersList' className='text-sm'>
      <OrdersTableHeader />
      <OrdersTableBody />
      <OrdersPagination />
    </section>
  )
}

export default OrdersList