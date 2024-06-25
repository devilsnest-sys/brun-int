import CheckoutOrderItem from '@components/client/Checkout/CheckoutOrderItem'
import React from 'react'

const OrderItems = () => {
    return (
      <div className="orders__items border border-[#767676] p-5 md:p-10 max-w-[512px] h-max hidden md:flex flex-col gap-6 text-sm">
        <p>ORDER BILLING</p>
        <p className='max-w-[384px] break-words'>Billing Address : Xyz , flat no 04, austin heights, mumbai, Mh- 440089</p>
        <div className="items__container flex flex-col gap-6 ">
          <CheckoutOrderItem />
          <CheckoutOrderItem />
        </div>
        <div className="checkout__amount text-sm">
          <p className="subtotal flex justify-between items-center">
            <span className="subtotal__text">SUBTOTAL</span>
            <span className="subtotal__price">₹ 5980.00</span>
          </p>
          <p className="shipping__charges flex justify-between items-center">
            <span className="shipping__text">SHIPPING</span>
            <span className="shipping__price">FREE</span>
          </p>
          <p className="total__amount flex justify-between items-center mt-4">
            <span className="total__text">TOTAL</span>
            <span className="total__price">₹ 5980.00</span>
          </p>
        </div>
      </div>
    )
  }

export default OrderItems