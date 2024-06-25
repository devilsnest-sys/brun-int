"use client"
import React from 'react'
import AnalyticsCard from './AnalyticsCard';
import AnalyticsFilter from './AnalyticsFilter';
import { AnalyticsDuration } from '@modals/admin';

const OrdersAnalytics = () => {
    const [analyticsFilter, setAnalyticsFilter] = React.useState<string>(AnalyticsDuration.MONTH);
    return (
        <section id='OrdersAnalytics' className='space-y-6'>
            <h2>ORDERS</h2>
            <div className="orderanalytics grid grid-cols-4 gap-5">
                <AnalyticsCard title="TOTAL ORDERS" value="100" />
                <AnalyticsCard title="TOTAL SALES" value="₹ 1000" />
                <AnalyticsCard title="TOTAL CANCELLED ORDERS" value="100" />
                <AnalyticsFilter analyticsFilter={analyticsFilter} setAnalyticsFilter={setAnalyticsFilter} />
            </div>
        </section>
    )
}

export default OrdersAnalytics