import React from 'react'
import OrderItems from '@components/admin/Orders/OrderItems'
import OrderInfo from '@components/admin/Orders/OrderInfo'

const OrdersDetails = ({ params }: { params: { id: string } }) => {
  return (
    <section className='ordersdetails'>
      <h2>Order: #{params.id}</h2>
      <div className="order_items__and__details flex gap-8 my-7">
        <OrderInfo />
        <OrderItems />
      </div>
    </section>
  )
}

export default OrdersDetails