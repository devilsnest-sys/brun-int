import React from 'react'

interface INoProductFound {
    title: string;
    className?: string;
}

const NoProductFound = ({ title, className }: INoProductFound) => {
    return (
        <div className={'flex justify-center items-center flex-col gap-3 ' + className}>
            <svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8918 4.51516C13.8918 2.75789 15.4767 1.33334 17.4319 1.33334C19.3869 1.33334 20.9719 2.75789 20.9719 4.51516C20.9719 5.34221 20.673 6.09556 20.1529 6.66138C19.1567 7.74511 17.6679 8.83663 17.6679 10.2425V10.7165M17.6679 10.7165C18.887 10.7023 20.111 11.041 21.1395 11.7343L33.527 20.0848C35.7044 21.5525 34.5495 24.6667 31.8279 24.6667H4.1696C1.47738 24.6667 0.304064 21.608 2.42421 20.1167L14.2504 11.7978C15.2544 11.0917 16.4587 10.7305 17.6679 10.7165Z" stroke="#1C274C" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p className=' text-center'>{title}</p>
        </div>
    )
}

export default NoProductFound