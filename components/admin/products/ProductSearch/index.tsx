"use client"
import { setSearchQuery } from '@libs/features/admin/adminProductListing.slice'
import SearchIcon from '@public/icons/common/SearchIcon'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const ProductSearch = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState('')

  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null); // Use state for timeout ID

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      dispatch(setSearchQuery(value));
    }, 500);
    setTimeoutId(newTimeoutId);
  };

  useEffect(() => {
    // Cleanup function to clear the timeout on unmount
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <label htmlFor='search-product' className="search__container p-2 border border-[#E5E7EB] w-full flex">
      <SearchIcon />
      <input type="search" name="search-product" id="search-product" onChange={handleChange} value={search} placeholder='SEARCH BY PRODUCT NAME OR SKU' className='w-full bg-transparent outline-none h-full ml-3' />
    </label>
  )
}

export default ProductSearch