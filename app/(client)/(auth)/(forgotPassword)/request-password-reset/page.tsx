"use client"
import MyButton from '@components/common/MyButton'
import MyError from '@components/common/MyError'
import MyTextInput from '@components/common/MyTextInput'
import { ButtonType } from '@modals/common/common.types'
import { useMakeUnauthenticatedAPICall } from '@services'
import { requestResetPasswordApi } from '@services/client/resetPassword/resetPassword.service'
// import { useRequestResetPasswordMutation } from '@services/resetPassword/resetPassword.service'
import { Form, Formik } from 'formik'
import React from 'react'

import * as Yup from 'yup'

const initialValues = {
    email: ''
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
});

const RequestPasswordReset = () => {

    // const [requestPasswordReset, { isError }] = useRequestResetPasswordMutation();

    const { callApi, error } = useMakeUnauthenticatedAPICall();

    const handleSubmit = async (values: { email: string }) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        const isValidEmail = emailRegex.test(values.email);
        if (!isValidEmail) return;

        try {
            // const response = await requestPasswordReset(values).unwrap();
            const result = await callApi(requestResetPasswordApi(values));
            console.log(result)
        } catch (error) {
            console.log('something went wrong while resetting password.', error)
        }
    }

    return (
        <main className='min-h-screen flex justify-center items-center'>
            <section className="request-password-reset w-64 sm:w-80 md:w-[649px]" id='RequestPasswordReset'>
                <legend className='flex flex-col justify-center items-center mb-11 '>
                    <h5>REQUEST PASSWORD RESET</h5>
                    <p className='text-[#767676] text-sm my-2 text-center'>RECOVERY EMAIL WILL BE SENT TO YOUR REGISTERED EMAIL ADDRESS.</p>

                    {
                        error.isError && <MyError errorMessage={error.message} />
                    }
                </legend>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className='flex flex-col text-sm w-full'>
                        <MyTextInput
                            id='email'
                            label="Email Address"
                            name="email"
                            type="email"
                            onFocus={() => { }}
                        />

                        <MyButton label='CONTINUE' type={ButtonType.SUBMIT} />
                    </Form>
                </Formik>
            </section>
        </main>
    )
}

export default RequestPasswordReset