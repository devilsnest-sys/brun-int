import { IBrunLogo } from '@modals/home/home.types'
import React from 'react'

const BrunN = ({ fill, className }: IBrunLogo) => {
    return (
        <svg width="73" height="74" viewBox="0 0 73 74" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M72.4368 0V73.9036C64.931 73.9324 57.4256 73.9613 49.9204 73.9901L22.9408 49.9687V74H0.804688V0.090785C17.3036 14.779 33.8023 29.4672 50.3007 44.1555C50.3039 29.4695 50.3075 14.7834 50.3112 0.0974189L72.4368 0Z" fill={fill} />
        </svg>

    )
}

export default BrunN