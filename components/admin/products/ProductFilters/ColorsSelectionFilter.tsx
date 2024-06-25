"use client";
import React from 'react'
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import ColorsFilter from '@components/client/Products/MoreFilters/ColorsFilter';

const ColorsSelectionFilter = () => {

    const [SearchColorFilter, setSearchColorFilter] = React.useState<string | null>(null);
    const [isColorFilterOpen, setIsColorFilterOpen] = React.useState<boolean>(false);

    const handleColorSelected = (color: string) => {
        setSearchColorFilter(color);
    }

    return (
        <MyOutlinedButton handleClick={() => setIsColorFilterOpen(!isColorFilterOpen)}>
            <div className="flex items-center gap-1 relative">
                <span>COLORS</span>
                <span className={`material-symbols-rounded transition-all duration-200 w-5 h-5 ${isColorFilterOpen && 'rotate-180'}`}>
                    expand_more
                </span>
                {
                    isColorFilterOpen &&
                    <div className="colors__container absolute right-0 top-8">
                        <ColorsFilter colorSelected={SearchColorFilter} handleColorSelection={handleColorSelected} />
                    </div>
                }
            </div>
        </MyOutlinedButton>
    )
}

export default ColorsSelectionFilter