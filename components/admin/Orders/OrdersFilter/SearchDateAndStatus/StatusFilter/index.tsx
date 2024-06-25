"use client"
import React from 'react'
import MyOutlinedButton from '@components/common/MyOutlinedButton';
import { EStatusFilter } from '@modals/admin';

export const textColors = {
    PENDING: 'text-yellow-400',
    COMPLETED: 'text-green-400',
    CANCELLED: 'text-red-400',
}

const StatusFilter = () => {
    const [isFilterOpen, setIsFilterOpen] = React.useState<boolean>(false);
    const [statusFilter, setStatusFilter] = React.useState<string>(EStatusFilter.COMPLETED);

    const handleSelect = (status: EStatusFilter) => {
        setStatusFilter(status);
    }

    return (
        <MyOutlinedButton handleClick={() => setIsFilterOpen(!isFilterOpen)} className='w-36 h-10 flex justify-between items-center gap-1 relative !px-4'>
            <span>{statusFilter}</span>
            <span className={`material-symbols-rounded transition-all duration-200 w-5 h-5 ${isFilterOpen && 'rotate-180'}`}>
                expand_more
            </span>
            {
                isFilterOpen &&
                <div className="colors__list absolute right-0 top-9 w-full py-2 space-y-2 bg-white border border-black">
                    {
                        Object.values(EStatusFilter).map((item, index) => (
                            <>
                                <label key={index} className={`flex items-center gap-3 px-3 cursor-pointer ${textColors[item]}`} htmlFor={`filters-${index}`} onClick={() => handleSelect(item)}>
                                    <input
                                        type="checkbox"
                                        className="mr-2 accent-black cursor-pointer"
                                        id={`filters-${index}`}
                                        checked={item === statusFilter}
                                    />
                                    {item}
                                </label>
                                {
                                    index !== Object.values(EStatusFilter).length - 1 &&
                                    <hr className='border-t border-black' />
                                }
                            </>
                        ))
                    }
                </div>
            }
        </MyOutlinedButton>
    )
}

export default StatusFilter