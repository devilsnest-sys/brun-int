"use client"
import MyButton from '@components/common/MyButton'
import MyTextInput from '@components/common/MyTextInput'
import { ButtonType } from '@modals/common/common.types'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'

import * as Yup from 'yup'

const initialValues = {
  password: '',
  confirmPassword: ''
}

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

const validationSchema = Yup.object({
  password: Yup.string()
    .required("Please enter a password")
    // check minimum characters
    .min(8, "Password must have at least 8 characters")
    // different error messages for different requirements
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  confirmPassword: Yup.string()
    .required("Please re-type your password")
    // use oneOf to match one of the values inside the array.
    // use "ref" to get the value of passwrod.
    .oneOf([Yup.ref("password")], "Passwords does not match")
});


const ResetPassword = () => {
  
  const [showSuccess, setShowSuccess] = useState(false)
  
  const handleSubmit = (values: { password: string, confirmPassword: string }) => {
    if (values.password && values.confirmPassword) setShowSuccess(true)
    console.log(values)
  }

  return (
    <main className='min-h-screen flex justify-center items-center'>
      <section className="request-password-reset w-64 sm:w-80 md:w-[649px]" id='ResetPassword'>
        <legend className='flex flex-col justify-center items-center mb-11 '>
          <h5>RESET YOUR PASSWORD</h5>
          {
            showSuccess && (
              <p className='text-[#767676] text-sm my-2'>PASSWORD CHANGED SUCCESSFULLY.</p>
            )
          }
        </legend>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className='flex flex-col text-sm w-full'>
            <MyTextInput
              id='password'
              label="ENTER NEW PASSWORD"
              name="password"
              type="password"
              onFocus={() => setShowSuccess(false)}
            />
            <MyTextInput
              id='confirmpassword'
              label="RE ENTER NEW PASSWORD"
              name="confirmPassword"
              type="password"
              className='mt-8'
              onFocus={() => setShowSuccess(false)}
            />

            <MyButton label='CONTINUE' type={ButtonType.SUBMIT} />
          </Form>
        </Formik>
      </section>
    </main>
  )
}

export default ResetPassword