import React from 'react'
import { useField } from 'formik'

const AddPrice = () => {

  return (
    <div id='addprice'>
      <h2 className="mb12">PRICING</h2>
      <div className="input__price flex items-center gap-4">
        <AddPriceInput icon='₹' placeholder='ADD BASE PRICE (SELLING PRICE)' name='productSellPrice' type='number' />
        <AddPriceInput icon='%' placeholder='ADD DISCOUNT' name='productDiscount' type='number' />
      </div>
    </div>
  )
}

export default AddPrice

interface IAddPriceInput {
  icon: string;
  placeholder: string;
  name: string;
  type: string;
}

const AddPriceInput = ({ icon, placeholder, name, type }: IAddPriceInput) => {

  const [field, meta] = useField({ name, type });

  return (
    <div className="addpriceinput relative w-1/2">
      <label htmlFor="addpriceinput" className='border border-[#B6B6B6] py-2 flex items-center'>
        <span className="my-1 px-4 border-r border-[#B6B6B6] text-center text-xl text-[#9E9E9E]">{icon}</span>
        <input
          type={type}
          {...field}
          className="px-2 flex-1 outline-none"
          id="addpriceinput"
          placeholder={placeholder}
        />
      </label>
      {meta.touched && meta.error ? (
        <div className="error text-[#767676] text-sm flex gap-1 items-center absolute -bottom-5 left-0">
          <span className="material-symbols-rounded text-sm">
            info
          </span>
          <p>
            {meta.error}
          </p>
        </div>
      ) : null}
    </div>
  )
}