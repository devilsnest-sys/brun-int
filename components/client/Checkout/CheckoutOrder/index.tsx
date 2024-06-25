import React from 'react'
import CheckoutOrderItem from '../CheckoutOrderItem'
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import { ButtonType } from '@modals/common/common.types'

interface ICheckoutOrder {
    showThankyou: boolean
}

const CheckoutOrder = ({ showThankyou }: ICheckoutOrder) => {
    return (
        <div className="checkout__items border border-[#767676] p-5 md:p-10 max-w-[512px] h-max hidden md:flex flex-col gap-6 text-sm">
            {
                showThankyou && <p>YOUR ORDER</p>
            }
            <div className="items__container flex flex-col gap-6 ">
                <CheckoutOrderItem />
                <CheckoutOrderItem />
            </div>
            {
                !showThankyou && (<div className="coupon__container flex">
                    <input type="text" placeholder="ENTER COUPON CODE OR GIFT CARD" className='p-2 border border-[#767676] flex-1 outline-none' />
                    <MyOutlinedButton active handleClick={() => console.log('hello')} type={ButtonType.BUTTON} >APPLY</MyOutlinedButton>
                </div>)
            }
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

export default CheckoutOrder