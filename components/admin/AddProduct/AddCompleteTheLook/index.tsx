import React from 'react'
import Image from 'next/image';
import { RootState } from '@libs/store';
import { useDispatch, useSelector } from 'react-redux';
import { ICompleteTheLookRecommendation } from '@modals/admin';
import MyOutlinedButton from '@components/common/MyOutlinedButton';
import { setCompleteTheLook } from '@libs/features/admin/addproduct.slice';

const AddCompleteTheLook = () => {

  const { products } = useSelector((state: RootState) => state.adminAddProductSlice);

  return (
    <div id="addcompletethelook">
      <h2 className="mb-6 mt-8">COMPLETE THE LOOK RECOMMENDATIONs</h2>
      <div className="dropdown__container flex items-center gap-4">
        <SelectCompleteTheLook title='COMPLETE THE LOOK' options={products} />
        <MyOutlinedButton className='!py-[6px] !px-4 !text-xl'>+</MyOutlinedButton>
      </div>
    </div>
  )
}

export default AddCompleteTheLook

interface ISelectCompleteTheLook {
  title: string;
  options: ICompleteTheLookRecommendation[];
}

const SelectCompleteTheLook = ({ title, options }: ISelectCompleteTheLook) => {

  const [value, setValue] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleSelect = (option: ICompleteTheLookRecommendation) => {
    setValue(option.product_name);
    setOpen(false);
    const payload = {
      id: option.id,
      product_name: option.product_name,
    }
    dispatch(setCompleteTheLook(payload))
  }

  return (
    <div className='flex-1 flex flex-col gap-4 border border-gray-200 p-2'>
      <div className="select-header flex justify-between items-center w-full cursor-pointer" onClick={() => setOpen(!open)}>
        <p>{value ? value : title}</p>
        <span className={`material-symbols-rounded transition-all duration-200 ${open && 'rotate-180'}`}>
          expand_more
        </span>
      </div>
      <div className={`select-body flex-col gap-2 pt-2 ${open ? 'flex' : 'hidden'}`}>
        {
          options.length === 0
            ? <p className='text-gray-500 text-sm'>No products found</p>
            : options.map((option, index) => (
              <div key={index} className='select-option flex items-center gap-3 cursor-pointer' onClick={() => handleSelect(option)}>
                {
                  option.image && option.image.image_url
                    ? <Image src={option.image.image_url} alt='product' width={30} height={30} className='rounded-full bg-cover aspect-square' />
                    : <div className='w-8 h-8 bg-gray-200 rounded-full text-black flex justify-center items-center'>NA</div>
                }
                <p>{option.product_name}</p>
              </div>
            ))
        }
      </div>
    </div>
  )
}