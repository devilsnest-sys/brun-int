import React from 'react'

const OrderInfo = () => {
    return (
        <div className='order__info space-y-3 flex-1'>
            <OrderInfoDetails />
            <OrderInfoCustomer />
            <OrderInfoDelivery />
            <OrderInfoPayment />
        </div>
    )
}

const OrderInfoDetails = () => {
    return (
        <div className="order__info border border-[#767676] p-5 md:p-10 h-max hidden md:flex flex-col gap-6 text-sm">
            <p className='text-base'>ORDER DETAILS</p>
            <div className="order__details flex flex-col gap-6 text-xs">
                <p className="order__status flex gap-2 items-center">
                    <span className="order__status__text">ORDER ID:</span>
                    <span className="order__status__value"># 123</span>
                </p>
                <p className="order__date flex gap-2 items-center">
                    <span className="order__date__text">ORDER DATE:</span>
                    <span className="order__date__value">12th June 2021</span>
                </p>
                <p className="order__payment__method flex gap-2 items-center">
                    <span className="order__payment__method__text">ORDER ITEM:</span>
                    <span className="order__payment__method__value">03</span>
                </p>
            </div>
        </div>
    )
}

const OrderInfoCustomer = () => {
    return (
        <div className="order__info border border-[#767676] p-5 md:p-10 h-max hidden md:flex flex-col gap-6 text-sm">
            <p className='text-base'>CUSTOMER DETAILS</p>
            <div className="order__details flex flex-col gap-6 text-xs">
                <p className="order__status flex gap-2 items-center">
                    <span className="order__status__text">NAME:</span>
                    <span className="order__status__value">JOHN DOE</span>
                </p>
                <p className="order__date flex gap-2 items-center">
                    <span className="order__date__text">MOB NUMBER:</span>
                    <span className="order__date__value">1234567890</span>
                </p>
                <p className="order__payment__method flex gap-2 items-center">
                    <span className="order__payment__method__text">EMAIL ID:</span>
                    <span className="order__payment__method__value">JOHN.DOE@GMAIL.COM</span>
                </p>
            </div>
        </div>
    )
}

const OrderInfoDelivery = () => {
    return (
        <div className="order__info border border-[#767676] p-5 md:p-10 h-max hidden md:flex flex-col gap-6 text-sm">
            <p className='text-base'>DELIVERY & SHIPPING</p>
            <div className="order__details flex flex-col gap-6 text-xs">
                <p className="order__status flex gap-2 items-center">
                    <span className="order__status__text">DELIVERY DATE:</span>
                    <span className="order__status__value">24 MARCH 2024</span>
                </p>
                <p className="order__date flex gap-2 items-center max-w-[511px]">
                    <span className="order__date__text">DELIVERY ADDRESS:</span>
                    <span className="order__date__value">Xyz , flat no 04, austin heights, mumbai, Mh- 440089</span>
                </p>
                <p className="order__payment__method flex gap-2 items-center mt-3">
                    <span className="order__payment__method__text">SHIPPING DATE:</span>
                    <span className="order__payment__method__value">21 APIRL 2024</span>
                </p>
                <p className="order__payment__method flex gap-2 items-center">
                    <span className="order__payment__method__text">SHIPPING STATUS:</span>
                    <span className="order__payment__method__value">ITEM SHIPPED</span>
                </p>
            </div>
        </div>
    )
}

const OrderInfoPayment = () => {
    return (
        <div className="order__info border border-[#767676] p-5 md:p-10 h-max hidden md:flex flex-col gap-6 text-sm">
            <p className='text-base'>PAYMENT DETAILS</p>
            <div className="order__details flex flex-col gap-6 text-xs">
                <p className="order__status flex gap-2 items-center">
                    <span className="order__status__text">PAYMENT STATUS:</span>
                    <span className="order__status__value">PAID</span>
                </p>
                <p className="order__date flex gap-2 items-center max-w-[511px]">
                    <span className="order__date__text">PAYMENT MODE:</span>
                    <span className="order__date__value">ONLINE UPI #987654321</span>
                </p>
                <p className="order__payment__method flex gap-2 items-center">
                    <span className="order__payment__method__text">PAYMENT DATE:</span>
                    <span className="order__payment__method__value">21 APIRL 2024</span>
                </p>
            </div>
        </div>
    )
}
export default OrderInfo