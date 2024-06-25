'use client'
import React from 'react'
import MyOutlinedButton from '@components/common/MyOutlinedButton'

const CustomersPagination = () => {
  const handleNext = () => {
    console.log('next')
  }

  const handlePrev = () => {
    console.log('prev')
  }


  return (
    <div className='flex items-center justify-between mb-28'>
      <PaginationOffsetDropdown />
      <div className="flex gap-1 cursor-pointer select-none ">
        <div className="homepage__carousel__icon bg-[#F1F1F1] px-2 py-1 grid place-items-center" onClick={handlePrev}>
          <span className="material-symbols-rounded opacity-75 text-sm md:text-base">
            arrow_back_ios_new
          </span>
        </div>
        <div className="homepage__carousel__icon bg-[#F1F1F1] px-2 py-1 grid place-items-center" onClick={handleNext}>
          <span className="material-symbols-rounded opacity-75 text-sm md:text-base">
            arrow_forward_ios
          </span>
        </div>
      </div>
    </div>
  )
}

const PaginationOffsetDropdown = () => {
  const [offset, setOffset] = React.useState(10);
  const [isOffsetDropdownOpen, setIsOffsetDropdownOpen] = React.useState(false);
  const handleSetOffset = (value: number) => {
    setOffset(value);
    setIsOffsetDropdownOpen(false);
  }

  return (
    <div className="pagination__offset relative flex items-center gap-3">
      <span>SHOW</span>
      <MyOutlinedButton handleClick={() => setIsOffsetDropdownOpen(!isOffsetDropdownOpen)}>
        <span>{offset}</span>
        <span className={`material-symbols-rounded transition-all duration-200 ${isOffsetDropdownOpen && 'rotate-180'}`}>
          expand_more
        </span>
      </MyOutlinedButton>
      <div
        className={`pagination__offset-dropdown absolute top-8 right-0 bg-white shadow-md px-[1.08rem] cursor-pointer border border-black transition-all duration-200 ${isOffsetDropdownOpen ? 'block' : 'hidden'}`}
      >
        <ul>
          <li onClick={() => handleSetOffset(10)}>10</li>
          <li onClick={() => handleSetOffset(15)}>15</li>
          <li onClick={() => handleSetOffset(20)}>20</li>
          <li onClick={() => handleSetOffset(25)}>25</li>
        </ul>
      </div>
    </div>
  )
}


export default CustomersPagination