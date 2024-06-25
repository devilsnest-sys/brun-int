import React from 'react'
import { ORDERSDATA } from '@contants'
import OrdersTableRow from '../OrdersTableRow'
import { IOrdersTableRow } from '@modals/admin'



const OrdersTableBody = () => {
  return (
    <div className="product__table-body px-3 mb-8 space-y-3 my-3">
      {
        ORDERSDATA.map((order: IOrdersTableRow) => (
          <OrdersTableRow key={order.id} {...order} />
        ))
      }
    </div>
  )
}

export default OrdersTableBody