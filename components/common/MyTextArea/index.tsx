import { useField } from 'formik';
import React from 'react'

interface IMyTextArea {
    label: string;
    id: string;
    name: string;
    className?: string;
    onFocus?: () => void;
}

const MyTextArea = ({ label, id, name, className, onFocus }: IMyTextArea) => {

    const [field, meta] = useField({ name });

    return (
        <div className={`relative z-0 w-full ${className}`}>
            <textarea
                id={id}
                {...field}
                placeholder=""
                autoComplete="off"
                className="block w-full bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                onFocus={onFocus}
            />
            <label htmlFor={id} className="absolute duration-300 -top-4 -z-1 origin-0 text-gray-500">{label}</label>
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


export default MyTextArea