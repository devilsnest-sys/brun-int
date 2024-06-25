import React from 'react'
import Category from './Category';
import SubCategory from './SubCategory';
import { RootState } from '@libs/store';
import { IAddCategory, IFeatured } from '@modals/admin';
import { HOMEPAGECATEGORYOPTIONS } from '@contants';
import { Option } from 'react-multi-select-component';
import { useDispatch, useSelector } from 'react-redux';
import { MultiSelect } from 'react-multi-select-component';
import MyBoxInput from '@components/admin/common/MyBoxInput';
import { setHomepageProduct } from '@libs/features/admin/addproduct.slice';

const AddCategory = ({ handleGetSubCategories, isSubCategoryLoading }: IAddCategory) => {

  const dispatch = useDispatch();
  const { categories, subCategories, homepageProduct } = useSelector((state: RootState) => state.adminAddProductSlice)

  const handleHomeProductChange = (selected: IFeatured[]) => {
    dispatch(setHomepageProduct(selected));
  }

  return (
    <section id="addcategory" className='flex flex-col w-full gap-4'>
      <h2 className='mb-6 mt-8'>CATEGORY</h2>
      <Category key="categorycomponent" title='CATEGORY' options={categories} handleClick={handleGetSubCategories} />
      <SubCategory key="subcategorycomponent" title='SUB CATEGORY' options={subCategories} isLoading={isSubCategoryLoading} />
      <MultiSelect
        options={HOMEPAGECATEGORYOPTIONS}
        value={homepageProduct as unknown as Option[]}
        onChange={handleHomeProductChange}
        labelledBy={"Select"}
        hasSelectAll={false}
        className='uppercase '
        disableSearch={true}
      />
      <ProductColor />
    </section>
  )
}

export default AddCategory

const ProductColor = () => {
  return (
    <div className='flex items-center gap-4 mt-4'>
      <MyBoxInput id='colorname' label='COLOR NAME' name='productColorName' type='text' className='w-1/2' />
      <MyBoxInput id='colorcode' label='COLOR CODE' name='productColorCode' type='text' className='w-1/2' />
    </div>
  )
}