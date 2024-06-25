"use client"
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import { ButtonType } from '@modals/common/common.types'
import React from 'react'

interface ICartNavbar {
  activeTab: number,
  setActiveTab: (tab: 1 | 2) => void
}

const CartNavbar = ({activeTab, setActiveTab} : ICartNavbar) => {

  return (
    <div className="account__tabs__header flex items-center gap-4">
      <MyOutlinedButton active={activeTab === 1} handleClick={() => setActiveTab(1)} type={ButtonType.BUTTON}>CART</MyOutlinedButton>
      <MyOutlinedButton active={activeTab === 2} handleClick={() => setActiveTab(2)} type={ButtonType.BUTTON}>WISHLIST</MyOutlinedButton>
    </div>
  )
}

export default CartNavbar