import MyOutlinedButton from '@components/common/MyOutlinedButton'
import React from 'react'
import EditAndDelete from './EditAndDelete';
import ColorsSelectionFilter from './ColorsSelectionFilter';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@libs/store';
import { IProductListingCategoryList } from '@modals/admin';
import { setCategoryFilters } from '@libs/features/admin/adminProductListing.slice';

const ProductFilters = () => {

  const categoryList = useSelector((state: RootState) => state.adminProductListing.categoryList)
  const categoryFilter = useSelector((state: RootState) => state.adminProductListing.categoryFilter)
  const dispatch = useDispatch();

  const handleSelectedCategory = (category: IProductListingCategoryList | null) => () => {
    if(!category) return dispatch(setCategoryFilters(null))
    dispatch(setCategoryFilters(category.id))
  }

  return (
    <div className="adminproduct__filters flex justify-between">
      <div className="filters__container flex items-center gap-3 flex-wrap">
        <MyOutlinedButton active={!categoryFilter} handleClick={handleSelectedCategory(null)}>ALL PRODUCTS</MyOutlinedButton>
        {
          categoryList.map((category) => (
            <MyOutlinedButton key={category.id} active={category.id === categoryFilter} handleClick={handleSelectedCategory(category)}>{category.category_name}</MyOutlinedButton>
          ))
        }
        <ColorsSelectionFilter />
      </div>
      <EditAndDelete />
    </div>
  )
}

export default ProductFilters