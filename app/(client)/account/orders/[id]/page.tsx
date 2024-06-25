import CheckoutOrderItem from '@components/client/Checkout/CheckoutOrderItem'
import React from 'react'

const Order = ({ params }: { params: { id: string } }) => {

    // call an api to get order details

    return (
        <div className='order my-28 flex gap-6 flex-wrap max-w-7xl mx-auto justify-center uppercase'>
            <div className="order__left flex flex-col gap-6 md:w-1/4">
                <div className="order__details border border-[#767676] p-5">
                    <h3 className='text-base'>ORDER DETAILS</h3>
                    <p className="text-sm mt-3">ORDER ID: #1234</p>
                    <p className="text-sm">ORDER ITEMS: 2</p>
                    <p className="text-sm">ORDER DATE: 24 MARCH 2024</p>
                </div>
                <div className="order__delivery border border-[#767676] p-5">
                    <h3 className='text-base'>DELIVERY & SHIPPING</h3>
                    <p className="text-sm mt-3">DELIVERY DATE: 24 MARCH 2024</p>
                    <p className="text-sm">DELIVERY ADDRESS:  Xyz , flat no 04, austin heights, mumbai, Mh- 44008</p>
                    <p className="text-sm mt-3">SHIPPING DATE: 24 MARCH 2024</p>
                    <p className="text-sm">SHIPPING STATUS:  ITEM SHIPPED</p>
                </div>
            </div>
            <div className="order__right border border-[#767676] p-5 md:p-10 max-w-[512px] h-max hidden md:flex flex-col gap-6 text-sm">
                <p className="text-sm">BILLING ADDRESS:  Xyz , flat no 04, austin heights, mumbai, Mh- 44008</p>
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
        </div>
    )
}

export default Order