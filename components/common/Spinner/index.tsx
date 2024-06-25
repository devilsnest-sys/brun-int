import React from 'react'

interface ISpinner {
    width?: number;
    height?: number;
}

const Spinner = ({width=20, height=20}: ISpinner) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 100 100' preserveAspectRatio="xMidYMid" width={width} height={height} >
            <g>
                <path stroke="none" fill="#fbfbfb" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50">
                    <animateTransform values="0 50 51;360 50 51" keyTimes="0;1" repeatCount="indefinite" dur="0.3921568627450981s" type="rotate" attributeName="transform"></animateTransform>
                </path>
                <g>
                </g></g>
        </svg>
    )
}

export default Spinner

// style="shape-rendering: auto; display: block; background: transparent;"