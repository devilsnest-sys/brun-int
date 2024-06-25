import React from 'react'
import CustomersTableBody from './CustomersTableBody'
import CustomersPagination from './CustomersPagination'
import CustomersTableHeader from './CustomersTableHeader'

const CustomersList = () => {
  return (
    <section id='OrdersList' className='text-sm'>
      <CustomersTableHeader />
      <CustomersTableBody />
      <CustomersPagination />
    </section>
  )
}

export default CustomersList