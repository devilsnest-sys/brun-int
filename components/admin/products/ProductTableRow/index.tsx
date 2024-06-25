import Image from "next/image"
import product from '@public/assets/product.jpg'
import MyOutlinedButton from "@components/common/MyOutlinedButton"
import { useSelector } from "react-redux"
import { RootState } from "@libs/store"

const ProductTableRow = () => {

  const isEditAll = useSelector((state: RootState) => state.adminProductListing.isEditAllOpen)
  const handleDelete = () => {
    console.log('delete')
  }

  const handleEdit = () => {
    console.log('edit')
  }

  return (
    <div className="product__table-row grid grid-cols-10 items-center">
      <div className="product__table-item col-span-3 flex gap-3 items-center">
        {
          isEditAll && <input
            type="checkbox"
            className="mr-2 accent-black"
          />
        }
        <Image src={product} width={65} height={54} alt="product" />
        <p className="product__name">POLO T-SHIRT</p>
      </div>
      <p className="product__table-item">POLO</p>
      <p className="product__table-item">5</p>
      <p className="product__table-item">₹ 2999</p>
      <p className="product__table-item">99</p>
      <p className="product__table-item">IN STOCK</p>
      <p className="product__table-item">401_1BBXBK</p>
      <div className="product__table-item flex items-center">
        <MyOutlinedButton handleClick={handleEdit} className='border border-[#979797] p-2'>
          <span className="material-symbols-rounded scale-75">
            edit_square
          </span>
        </MyOutlinedButton>
        <MyOutlinedButton handleClick={handleDelete} className='border border-[#979797] p-2'>
          <span className="material-symbols-rounded scale-75">
            delete
          </span>
        </MyOutlinedButton>
      </div>
    </div>
  )
}

export default ProductTableRow;