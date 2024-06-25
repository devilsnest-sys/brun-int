import CustomerInfo from '@components/admin/Customers/CustomerInfo'
import CustomerOrderHistory from '@components/admin/Customers/CustomerOrderHistory'
import React from 'react'

const CustomerDetails = ({ params }: { params: { id: string } }) => {
    console.log(params.id)
    return (
      <section className='ordersdetails'>
        <h2>CUSTOMERS DETAILS</h2>
        <div className="order_items__and__details flex gap-8 mt-7">
          <CustomerInfo />
          <CustomerOrderHistory />
        </div>
      </section>
    )
  }

export default CustomerDetails