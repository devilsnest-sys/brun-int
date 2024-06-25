'use client'
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import { useRouter } from 'next/navigation'
import React from 'react'

const CustomerOrderHistory = () => {

    const router = useRouter();

    const handleViewOrder = () => {
        router.push('/admin/orders/123')
    }

    return (
        <div className="orders__items border border-[#767676] p-5 md:p-10 max-w-[512px] h-max hidden md:flex flex-col gap-6 text-sm mb-12">
            <p>ORDER HISTORY</p>
            <div className='flex flex-col gap-3 w-full sm:w-80'>
                <div className="order__view__id flex justify-between items-center">
                    <p className="text-sm">Order ID #123</p>
                    <MyOutlinedButton active={false} handleClick={handleViewOrder} className='w-max'>VIEW ORDER</MyOutlinedButton>
                </div>
                <div className="order__view__date flex justify-between items-center">
                    <p className="text-sm">ON THE WAY</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerOrderHistory