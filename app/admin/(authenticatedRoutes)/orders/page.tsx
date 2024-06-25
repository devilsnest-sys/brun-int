import OrdersAnalytics from '@components/admin/Orders/OrdersAnalytics'
import OrdersFilter from '@components/admin/Orders/OrdersFilter'
import OrdersList from '@components/admin/Orders/OrdersList'
import React from 'react'

const Orders = () => {
  return (
    <main className='space-y-16'>
      <OrdersAnalytics />
      <OrdersFilter />
      <OrdersList />
    </main>
  )
}

export default Orders