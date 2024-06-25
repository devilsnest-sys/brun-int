"use client"
import CheckoutOrderItem from '@components/client/Checkout/CheckoutOrderItem'
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import { ButtonType } from '@modals/common/common.types'
import { useRouter } from 'next/navigation'
import React from 'react'

const CancelReturn = ({ params }: { params: { id: string } }) => {

  // TODO
  const router = useRouter();
  const [showConfirm, setShowConfirm] = React.useState(false);

  const handleConfirm = () => {
    // call an api to cancel the order
    setShowConfirm(true);
  }

  const handleGoBack = () => {
    router.back();
  }

  const handleContinueShopping = () => {
    router.push('/');
  }

  const handleViewOrders = () => {
    router.push('/account/orders');
  }

  return (
    <div className='cancelreturn my-28 flex gap-6 flex-wrap max-w-6xl mx-auto justify-between uppercase'>
      {
        showConfirm ?
          <div className="cancelreturn__left max-w-[542px]">
            <h1 className='text-3xl'>RETURN CANCELLELATION REQUEST SENT</h1>
            <p className='text-sm mt-4'>WE WILL SENT A CONFIRMATION TO:</p>
            <p className='text-sm mb-4 font-semibold'>johnsmith@gmail.com</p>
            <div className="button__container flex justify-between items-center mt-4">
              <MyOutlinedButton active={false} type={ButtonType.BUTTON} handleClick={handleContinueShopping} className='bg-black text-white w-52'>CONTINUE SHOPPING</MyOutlinedButton>
              <MyOutlinedButton active={false} type={ButtonType.BUTTON} handleClick={handleViewOrders} className='w-52'>VIEW ORDERS</MyOutlinedButton>
            </div>
          </div>
          : <div className="cancelreturn__left max-w-[542px]">
            <h1 className='text-3xl'>ARE YOU SURE YOU WANT TO CANCEL THE RETURN?</h1>
            <div className="button__container flex justify-between items-center mt-4">
              <MyOutlinedButton active={false} type={ButtonType.BUTTON} handleClick={handleConfirm} className='bg-black text-white w-52'>CONFIRM</MyOutlinedButton>
              <MyOutlinedButton active={false} type={ButtonType.BUTTON} handleClick={handleGoBack} className='w-52'>GO BACK</MyOutlinedButton>
            </div>
          </div>
      }

      <div className="cancelreturn__right border border-[#767676] p-5 md:p-10 max-w-[512px] h-max hidden md:flex flex-col gap-6 text-sm">
        <p className="">YOUR ORDER</p>
        <div className="items__container flex flex-col gap-6 ">
          <CheckoutOrderItem />
          <CheckoutOrderItem />
        </div>
        <div className="checkout__amount text-sm">
          <p className="subtotal flex justify-between items-center">
            <span className="subtotal__text">SUBTOTAL</span>
            <span className="subtotal__price">₹ 5980.00</span>
          </p>
          <p className="subtotal flex justify-between items-center">
            <span className="subtotal__text">SHIPPING</span>
            <span className="subtotal__price">FREE</span>
          </p>
          <p className="total__amount flex justify-between items-center mt-4">
            <span className="total__text">TOTAL REFUND</span>
            <span className="total__price">₹ 5980.00</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CancelReturn