import React from 'react'
import { RootState } from '@libs/store';
import { useDispatch, useSelector } from 'react-redux';
import AdminSizeMultiSelect from './AdminSizeMultiSelect';
import { EProductSizeKeys, IProductSize } from '@modals/admin';
import { EProductSizeEnum } from '@modals/productListing/productListing.types';
import { setSelectedSizes, setSizeSpecs } from '@libs/features/admin/addproduct.slice';

const AddSize = () => {

  // const [sizeSelected, setSizeSelected] = React.useState<EProductSizeEnum[]>([]);
  const { sizes } = useSelector((state: RootState) => state.adminAddProductSlice)
  const dispatch = useDispatch();

  const handleSizeSelection = (size: EProductSizeEnum) => {
    dispatch(setSelectedSizes(size))
  }

  return (
    <section id='addsize'>
      <h2 className="mb-6 mt-8">CHOOSE SIZES AVAILABLE FOR THIS PRODUCT</h2>
      <AdminSizeMultiSelect sizeSelected={sizes} handleSizeSelection={handleSizeSelection} />
      {
        sizes.length > 0 && (
          <GetSizeDetails sizeSelected={sizes} />
        )
      }
    </section>
  )
}

export default AddSize;


const GetSizeDetails = ({ sizeSelected }: { sizeSelected: IProductSize[] }) => {
  return (
    <div className="getsizedetails border border-gray-200 p-4 mt-4">
      <GetSizeDetailshHeader />
      <GetSizeDetailsBody sizeSelected={sizeSelected} />
    </div>
  )
};


const GetSizeDetailshHeader = () => {
  return (
    <div className="grid grid-cols-5 gap-2 text-gray-500">
      <p className="text-sm font-medium">SIZE</p>
      <p className="text-sm font-medium">QUANTITY</p>
      <p className="text-sm font-medium">WEIGHT(G)</p>
      <p className="text-sm font-medium">DIMENSIONS(CM)</p>
      <p className="text-sm font-medium">SKU</p>
    </div>
  )
}

const GetSizeDetailsBody = ({ sizeSelected }: { sizeSelected: IProductSize[] }) => {
  return (
    <div className="grid grid-cols-1 gap-2">
      {
        sizeSelected.map((size, index) => (
          <GetSizeDetailsRow key={index} size={size} />
        ))
      }
    </div>
  )
}

const GetSizeDetailsRow = ({ size }: { size: IProductSize }) => {

  const dispatch = useDispatch();
  const handleOnChange = (sizeValue: EProductSizeEnum ,key: EProductSizeKeys, e: React.ChangeEvent<HTMLInputElement>) => {
    const value  = e.target.value;
    dispatch(setSizeSpecs({size: sizeValue, key, value}))
  }

  return (
    <div className="grid grid-cols-5 gap-2">
      <div className="flex items-center">
        <p className='border border-gray-200 p-2 w-full'>{size.size}</p>
      </div>
      <div className="flex items-center">
        <input type="text" className="border border-gray-200 p-2 w-full" placeholder='00' value={size.quantity} onChange={(e) => handleOnChange(size.size, EProductSizeKeys.QUANTITY, e)} />
      </div>
      <div className="flex items-center">
        <input type="text" className="border border-gray-200 p-2 w-full" placeholder='00' value={size.weight} onChange={(e) => handleOnChange(size.size, EProductSizeKeys.WEIGHT, e)} />
      </div>
      <div className="flex items-center gap-2">
        <input type="text" className="border border-gray-200 p-2 w-full" placeholder='L' value={size.length} onChange={(e) => handleOnChange(size.size, EProductSizeKeys.LENGTH, e)} />
        <input type="text" className="border border-gray-200 p-2 w-full" placeholder='W' value={size.breadth} onChange={(e) => handleOnChange(size.size, EProductSizeKeys.BREADTH, e)} />
        <input type="text" className="border border-gray-200 p-2 w-full" placeholder='H' value={size.height} onChange={(e) => handleOnChange(size.size, EProductSizeKeys.HEIGHT, e)} />
      </div>
      <div className="flex items-center">
        <input type="text" className="border border-gray-200 p-2 w-full" placeholder='00' value={size.sku} onChange={(e) => handleOnChange(size.size, EProductSizeKeys.SKU, e)} />
      </div>
    </div>
  )
}