"use client";
import { ButtonType, IMyOutlinedButton } from '@modals/common/common.types';
import React from 'react'

const MyOutlinedButton = ({ active, handleClick, children, className, type=ButtonType.BUTTON, disabled }: IMyOutlinedButton) => {
  return (
    <button className={`myoutlinedbutton flex justify-center items-center border border-black px-2 py-[2px] sm:px-2 sm:py-1 text-xs sm:text-sm ${active && 'font-semibold'} ${className} `} onClick={handleClick} type={type} disabled={disabled}>
      {children}
    </button>
  )
}

export default MyOutlinedButton;