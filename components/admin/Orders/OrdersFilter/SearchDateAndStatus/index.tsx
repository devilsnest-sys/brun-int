import React from 'react'
import DateFilter from './DateFilter'
import StatusFilter from './StatusFilter'

const SearchDateAndStatus = () => {
  return (
    <div className='flex items-center gap-5'>
      <DateFilter />
      <StatusFilter />
    </div>
  )
}

export default SearchDateAndStatus