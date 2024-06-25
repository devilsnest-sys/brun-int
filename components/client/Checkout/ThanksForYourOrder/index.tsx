"use client";
import MyOutlinedButton from '@components/common/MyOutlinedButton';
import { ButtonType } from '@modals/common/common.types';
import React from 'react'

const ThanksForYourOrder = () => {

  return (
    <aside className='thanksforyouorder space-y-6'>
      <h2 className="thanks__heading text-base">THANK YOU FOR YOUR ORDER!</h2>
      <div className="delivery__address space-y-4 text-sm">
        <div className="delivery__address__email">
          <p className="thanks__subheading">WE SENT AN ORDER CONFIRMATION TO:</p>
          <p className="subheading__value font-semibold">john@doe.com</p>
        </div>
        <div className="delivery__order__number">
          <p className="thanks__subheading">YOUR ORDER NUMBER IS:</p>
          <p className="subheading__value font-semibold">213546</p>
        </div>
        <div className="delivery__date">
          <p className="thanks__subheading">WILL DELIVER BY:</p>
          <p className="subheading__value font-semibold">Thursday, NOV 16</p>
        </div>
        <div className="delivery__address">
          <p className="thanks__subheading">TO THE ADDRESS:</p>
          <p className="subheading__value font-semibold">42, Ground Floor, M K M Chambers, K H Road, Chennai</p>
        </div>
        <div className="delivery__buttons flex gap-4 items-center">
          <MyOutlinedButton active handleClick={() => console.log('continue SHOPPING')} className='!px-12 !py-2' type={ButtonType.BUTTON}>CONTINUE SHOPPING</MyOutlinedButton>
          <MyOutlinedButton active={false} handleClick={() => console.log('view orders')} className='!px-12 !py-2' type={ButtonType.BUTTON}>VIEW ORDERS</MyOutlinedButton>
        </div>
      </div>
    </aside>
  )
}

export default ThanksForYourOrder