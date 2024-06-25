"use client"
import React from 'react'
import SearchIcon from '@public/icons/common/SearchIcon'

const SearchOrder = () => {

  const [search, setSearch] = React.useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

  return (
    <label htmlFor='search-order' className="search__container p-2 border border-[#E5E7EB] w-full flex">
      <SearchIcon />
      <input type="search" name="search-order" id="search-order" onChange={handleChange} value={search} placeholder='SEARCH' className='w-full bg-transparent outline-none h-full ml-3' />
    </label>
  )
}

export default SearchOrder