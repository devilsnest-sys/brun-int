"use client"
import React from 'react'
import MyOutlinedButton from '@components/common/MyOutlinedButton';

enum EDateFilter {
    TODAY = 'TODAY',
    YESTERDAY = 'YESTERDAY',
    WEEK = 'WEEK',
    MONTH = 'MONTH',
    MONTH_3 = '3 MONTHS',
    MONTH_6 = '6 MONTHS',
    YEAR = 'YEAR',
}

const DateFilter = () => {
    const [isFilterOpen, setIsFilterOpen] = React.useState<boolean>(false);
    const [dateFilter, setDateFilter] = React.useState<string>(EDateFilter.TODAY);

    const handleSelect = (date: EDateFilter) => {
        setDateFilter(date);
    }

    return (
        <MyOutlinedButton handleClick={() => setIsFilterOpen(!isFilterOpen)} className='w-36 h-10 flex justify-between items-center gap-1 relative !px-4'>
            <span>{dateFilter}</span>
            <span className={`material-symbols-rounded transition-all duration-200 w-5 h-5 ${isFilterOpen && 'rotate-180'}`}>
                expand_more
            </span>
            {
                isFilterOpen &&
                <div className="colors__list absolute right-0 top-9 w-full py-2 space-y-2 bg-white border border-black">
                    {
                        Object.values(EDateFilter).map((color, index) => (
                            <>
                                <label key={index} className="flex items-center gap-3 px-3 cursor-pointer" htmlFor={`filters-${index}`} onClick={() => handleSelect(color)}>
                                    <input
                                        type="checkbox"
                                        className="mr-2 accent-black cursor-pointer"
                                        id={`filters-${index}`}
                                        checked={color === dateFilter}
                                    />
                                    {color}
                                </label>
                                {
                                    index !== Object.values(EDateFilter).length - 1 &&
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

export default DateFilter