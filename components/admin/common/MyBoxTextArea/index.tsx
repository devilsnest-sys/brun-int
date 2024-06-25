import { useField } from 'formik'
import React from 'react'

interface IMyBoxTextArea {
    label: string,
    id: string,
    name: string,
    className: string
}

const MyBoxTextArea = ({ label, id, name, className }: IMyBoxTextArea) => {

    const [field, meta] = useField({ name });

    return (
        <div className={`border border-gray-200 ${className}`}>
            <label htmlFor={id} className='block text-sm font-medium text-gray-500 p-2 '>
                {label}
            </label>
            <textarea
                id={id}
                {...field}
                rows={5}
                className='block w-full bg-transparent border appearance-none focus:outline-none focus:ring-0 border-gray-200 p-2 myboxinput'
            />
            {meta.touched && meta.error ? (
                <div className="error text-[#767676] text-sm flex gap-1 items-center">
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

export default MyBoxTextArea