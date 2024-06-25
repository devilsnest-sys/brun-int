"use client"
import React from 'react'
import { IAddButtons } from '@modals/admin'
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import { ButtonType } from '@modals/common/common.types'
import Spinner from '@components/common/Spinner'

const AddButtons = ({handleCancel, isLoading}: IAddButtons) => {
  return (
    <section id="addbuttons" className='flex items-center justify-end gap-4'>
      <MyOutlinedButton className='!px-16 !py-2' disabled={isLoading} handleClick={handleCancel}>CANCEL</MyOutlinedButton>
      <MyOutlinedButton className='!px-16 !py-2 bg-black text-white' disabled={isLoading} type={ButtonType.SUBMIT}>
        {isLoading ? <Spinner /> : 'ADD'}
      </MyOutlinedButton>
    </section>
  )
}

export default AddButtons