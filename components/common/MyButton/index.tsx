import { ButtonType } from '@modals/common/common.types';
import React from 'react'
import Spinner from '../Spinner';

interface IMyButton {
    label: string;
    type?: ButtonType.SUBMIT | ButtonType.BUTTON;
    isLoading?: boolean;
}

const MyButton = ({ label, type = ButtonType.BUTTON, isLoading }: IMyButton) => {
    return (
        <button type={type} className='bg-black text-white px-24 py-4 w-max mx-auto mt-11 text-sm font-semibold'>
            {
                isLoading ? <Spinner /> :  label
            }
        </button>
    )
}

export default MyButton