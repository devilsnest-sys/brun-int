import React from 'react'

const OrdersTableHeader = () => {

  return (
    <div className="table__header grid grid-cols-7 bg-[#FAFBFB] py-3 px-3 break-words">
      <p className="product__table-item">ORDER ID</p>
      <p className="product__table-item">NO OF ITEMS</p>
      <p className="product__table-item">CUSTOMER</p>
      <p className="product__table-item">DATE</p>
      <p className="product__table-item">PRICE</p>
      <p className="product__table-item">STATUS</p>
      <p className="product__table-item">ACTION</p>
    </div>
  )
}

export default OrdersTableHeader