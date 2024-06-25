import { IBrunLogo } from '@modals/home/home.types'
import React from 'react'

const BrunB = ({fill, className} : IBrunLogo) => {
    return (
        <svg width="72" height="74" viewBox="0 0 72 74" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M66.2 37C69.6925 41.0423 71.6256 46.2691 71.6321 51.6873C71.5935 57.6435 69.2665 63.34 65.1629 67.5242C61.0593 71.7083 55.5151 74.0375 49.7494 73.9995H0V0.000487093H49.7495C55.5117 -0.0386916 61.0533 2.28701 65.1566 6.46653C69.2598 10.6461 71.5889 16.3375 71.6321 22.2901C71.6297 27.7158 69.6964 32.9512 66.2 37Z" fill={fill} />
        </svg>

    )
}

export default BrunB