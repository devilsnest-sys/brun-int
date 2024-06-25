"use client"
import React from 'react'
import { Formik, Form } from 'formik'
import Link from 'next/link'

import MyTextInput from '@components/common/MyTextInput'
import MyCheckBox from '@components/common/MyCheckBox'
import { signupApi, singupValidationSchema, useMakeUnauthenticatedAPICall } from '@services'
import { signupInitialValues } from '@contants/signup.constant'
import MyButton from '@components/common/MyButton'
import { ButtonType } from '@modals/common/common.types'
import { ISignupValues } from '@modals/login/login.types'
import { useRouter } from 'next/navigation'
import MyError from '@components/common/MyError'
import { saveUserIdToStorage } from '@services/tokens/tokens.service'
import { ISignupApiResponse } from '@modals/signup/signup.types'

const Signup = () => {

  const router = useRouter();
  const { callApi, error } = useMakeUnauthenticatedAPICall();

  const handleSignupSubmit = async (values: ISignupValues) => {
    const payload = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      password: values.password
    }
    try {
      const result: ISignupApiResponse = await callApi(signupApi(payload));
      saveUserIdToStorage(result.data.id)
      router.push('/login')
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
    <main className='min-h-screen flex justify-center items-center text-sm'>
      <section className="login w-64 sm:w-80 md:w-[649px]" id='singup'>
        <legend className='flex justify-between items-center mb-9'>
          <Link href='/login'>
            <span className="material-symbols-rounded scale-75">
              arrow_back_ios_new
            </span>
          </Link>
          {
            error.isError && <MyError errorMessage={error.message} />
          }
          <h5>CREATE AN ACCOUNT</h5>
          <p className="invisible">.</p>
        </legend>
        <Formik
          initialValues={signupInitialValues}
          validationSchema={singupValidationSchema}
          onSubmit={handleSignupSubmit}
        >
          <Form className='flex flex-col'>
            <MyTextInput
              id='firstName'
              label="First Name"
              name="firstName"
              type="text"
            />
            <MyTextInput
              id='lastName'
              label="Last Name"
              name="lastName"
              type="text"
              className='mt-8'
            />
            <MyTextInput
              id='email'
              label="Email Address"
              name="email"
              type="email"
              className='mt-8'
            />
            <MyTextInput
              id='password'
              label="Password"
              name="password"
              type="password"
              className='mt-8'
            />
            <MyTextInput
              id='confirmPassword'
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              className='mt-8'
            />
            <MyCheckBox name="acceptedTerms" className="mt-4">
              <p>
                I ACCEPT THE <Link href="/privacy" className='underline decoration-1'>PRIVACY STATEMENT</Link>
              </p>
            </MyCheckBox>

            <MyButton label='CREATE' type={ButtonType.SUBMIT} />
          </Form>
        </Formik>
      </section>
    </main>
  )
}

export default Signup