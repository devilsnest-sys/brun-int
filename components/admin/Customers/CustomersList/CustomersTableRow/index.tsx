'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import { ICustomersTableRow } from '@modals/admin/customers.types'

const textColors = {
    INACTIVE: 'text-yellow-400',
    ACTIVE: 'text-green-400',
}

const CustomersTableRow = ({ id, email, mob, name, orders, status }: ICustomersTableRow) => {

    const router = useRouter()

    const handleViewOrder = (id: string) => {
        router.push(`/admin/customers/${id}`)
    }

    return (
        <div className="orders__table-row grid grid-cols-6 justify-between items-center">
            <p className="orders__table-item">{name}</p>
            <p className="orders__table-item">{email}</p>
            <p className="orders__table-item">{mob}</p>
            <p className="orders__table-item">{orders}</p>
            <p className={`orders__table-item ${textColors[status]}`}>{status}</p>
            <div className="orders__table-item flex items-center">
                <MyOutlinedButton handleClick={() => handleViewOrder(id)} className='border !border-[#D5D5D5] p-2'>
                    VIEW <span className="material-symbols-rounded scale-50">
                        arrow_forward_ios
                    </span>
                </MyOutlinedButton>
            </div>
        </div>
    )
}

export default CustomersTableRow