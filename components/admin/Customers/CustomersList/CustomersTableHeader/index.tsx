import React from 'react'

const CustomersTableHeader = () => {
  return (
    <div className="table__header grid grid-cols-6 bg-[#FAFBFB] py-3 px-3 break-words">
      <p className="customers__table-item">CUSTOMER</p>
      <p className="customers__table-item">EMAIL</p>
      <p className="customers__table-item">MOB NUMBER</p>
      <p className="customers__table-item">ORDERS</p>
      <p className="customers__table-item">STATUS</p>
      <p className="customers__table-item">ACTION</p>
    </div>
  )
}

export default CustomersTableHeader