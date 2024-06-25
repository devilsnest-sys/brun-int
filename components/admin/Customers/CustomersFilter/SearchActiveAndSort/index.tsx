import React from 'react'
import SortFilter from './SortFilter'
import CustomerActiveFilter from './CustomerActiveFilter'

const SearchActiveAndSort = () => {
  return (
    <div className='flex items-center gap-5'>
      <CustomerActiveFilter />
      <SortFilter />
    </div>
  )
}

export default SearchActiveAndSort