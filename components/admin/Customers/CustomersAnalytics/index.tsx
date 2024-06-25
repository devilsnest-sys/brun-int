"use client"
import React from 'react'
import { AnalyticsDuration } from '@modals/admin'
import AnalyticsCard from '@components/admin/Orders/OrdersAnalytics/AnalyticsCard'
import AnalyticsFilter from '@components/admin/Orders/OrdersAnalytics/AnalyticsFilter'
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import { useRouter } from 'next/navigation'

const CustomersAnalytics = () => {
  
  const [analyticsFilter, setAnalyticsFilter] = React.useState<string>(AnalyticsDuration.MONTH);

  const router = useRouter();

  const handleNewCustomers = () => {
    router.push('/admin/customers/new')
  }

  return (
    <section id='customersAnalytics' className='space-y-8'>
      <div className='flex justify-between items-center'>
      <h1>CUSTOMERS</h1>
      <MyOutlinedButton handleClick={handleNewCustomers} className='bg-black text-white text-sm'>ADD NEW CUSTOMERS</MyOutlinedButton>
    </div>
      <div className="customeranalytics grid grid-cols-4 gap-5">
        <AnalyticsCard title="TOTAL CUSTOMERS" value="100" />
        <AnalyticsCard title="TOTAL ACTIVE" value="100" />
        <AnalyticsCard title="TOTAL INACTIVE" value="100" />
        <AnalyticsFilter analyticsFilter={analyticsFilter} setAnalyticsFilter={setAnalyticsFilter} />
      </div>
    </section>
  )
}
export default CustomersAnalytics