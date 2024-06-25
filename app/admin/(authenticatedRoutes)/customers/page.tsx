import React from 'react'
import CustomersList from '@components/admin/Customers/CustomersList'
import CustomersFilter from '@components/admin/Customers/CustomersFilter'
import CustomersAnalytics from '@components/admin/Customers/CustomersAnalytics'

const Customers = () => {
  return (
    <main className='space-y-16 my-12'>
      <CustomersAnalytics />
      <CustomersFilter />
      <CustomersList />
    </main>
  )
}

export default Customers