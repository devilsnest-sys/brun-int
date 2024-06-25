import React from 'react'

const CustomerInfo = () => {
    return (
        <div className='order__info space-y-3 flex-1'>
            <CustomerInfoDetails />
            <CustomerLoginInfo />
        </div>
    )
}

const CustomerInfoDetails = () => {
    return (
        <div className="order__info border border-[#767676] p-5 md:p-10 h-max hidden md:flex flex-col gap-6 text-sm">
            <p className='text-base'>PERSONAL DETAILS</p>
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
                <p className="order__payment__method flex gap-2 items-center max-w-[511px]">
                    <span className="order__date__text">DELIVERY ADDRESS:</span>
                    <span className="order__date__value">Xyz , flat no 04, austin heights, mumbai, Mh- 440089</span>
                </p>
            </div>
        </div>
    )
}

const CustomerLoginInfo = () => {
    return (
        <div className="order__info border border-[#767676] p-5 md:p-10 h-max hidden md:flex flex-col gap-6 text-sm">
            <p className='text-base'>LOGIN ACTIVITY</p>
            <div className="order__details flex flex-col gap-6 text-xs">
                <p className="order__status flex gap-2 items-center">
                    <span className="order__status__text">LAST LOGIN:</span>
                    <span className="order__status__value">07-04-24, 18:00pm</span>
                </p>
            </div>
        </div>
    )
}

export default CustomerInfo