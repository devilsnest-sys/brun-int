"use client"

import BrunB from '@public/icons/navbar/BrunB'
import BrunN from '@public/icons/navbar/BrunN'
import BrunR from '@public/icons/navbar/BrunR'
import BrunU from '@public/icons/navbar/BrunU'
import { useScrollDirection } from '@services'
import React from 'react'

const BrunLogo = ({isWhiteLogo} : {isWhiteLogo: boolean}) => {

    const scrollDirection = useScrollDirection();

    return (
        <div className="navbar__logo max-w-64 flex items-center gap-1 relative">
            <BrunB fill={isWhiteLogo ? 'white' : 'black'} className='w-6 md:w-11' />
            <BrunR fill={isWhiteLogo ? 'white' : 'black'} className={`transition-all duration-500 w-6 md:w-11 ${scrollDirection === "down" ? "-translate-x-full  md:-translate-x-[50px] scale-50" : ""}`} />
            <BrunU fill={isWhiteLogo ? 'white' : 'black'} className={`transition-all duration-500 w-6 md:w-11 ${scrollDirection === "down" ? "-translate-x-[220%] md:-translate-x-[90px] scale-50" : ""}`} />
            <BrunN fill={isWhiteLogo ? 'white' : 'black'} className={`transition-all duration-500 w-6 md:w-11 ${scrollDirection === "down" ? "-translate-x-[330%] md:-translate-x-[140px] scale-50" : ""}`} />
        </div>
    )
}

export default BrunLogo