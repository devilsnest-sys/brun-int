import React from 'react'
import CustomersTableRow from '../CustomersTableRow'
import { CUSTOMERSDATA } from '@contants/admin/customers.constant'
import { ICustomersTableRow } from '@modals/admin/customers.types'

const CustomersTableBody = () => {
  return (
    <div className="customer__table-body px-3 mb-8 space-y-3 my-3">
      {
        CUSTOMERSDATA.map((order: ICustomersTableRow) => (
          <CustomersTableRow key={order.id} {...order} />
        ))
      }
    </div>
  )
}

export default CustomersTableBody