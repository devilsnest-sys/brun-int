"use client"
import React from 'react'
import { useField } from 'formik';
import { IMyTextInput } from '@modals/login/login.types';

const MyBoxInput = ({ label, id, name, type, className, onFocus }: IMyTextInput) => {

    const [field, meta] = useField({ name, type });

    return (
        <div className={`relative z-0 w-full ${className}`}>
            <input
                id={id}
                type={type}
                {...field}
                placeholder=""
                autoComplete="off"
                className="myboxinput block w-full bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 p-2 myboxinput"
                onFocus={onFocus}
            />
            <label htmlFor={id} className="myboxinputlabel absolute duration-300 top-2 left-2 -z-1 origin-0 text-gray-500 myboxinputlabel">{label}</label>
            {meta.touched && meta.error ? (
                <div className="error text-[#767676] text-sm flex gap-1 items-center absolute -bottom-5 left-0">
                    <span className="material-symbols-rounded text-sm">
                        info
                    </span>
                    <p>
                        {meta.error}
                    </p>
                </div>
            ) : null}
        </div>
    )
}


export default MyBoxInput