'use client'

import Link from 'next/link'
import { Form, Formik } from 'formik'
import { useAdminLogin } from './adminlogin.hook'
import MyButton from '@components/common/MyButton'
import MyTextInput from '@components/common/MyTextInput'
import { ButtonType } from '@modals/common/common.types'
import { adminloginInitialValues, adminloginValidationSchema } from '@services/admin/adminLogin.service'

const AdminLogin = () => {

    const { handleAdminLoginSubmit, isLoading } = useAdminLogin();

    return (
        <main className='min-h-screen w-full flex justify-center items-center'>
            <section className="login w-64 sm:w-80 md:w-[649px]" id='login'>
                <legend className='flex flex-col justify-center items-center mb-11 '>
                    <h5>LOG IN INTO YOUR ACCOUNT</h5>
                </legend>
                <Formik
                    initialValues={adminloginInitialValues}
                    validationSchema={adminloginValidationSchema}
                    onSubmit={handleAdminLoginSubmit}
                >
                    <Form className='flex flex-col text-sm w-full'>
                        <MyTextInput
                            id='email'
                            label="Email Address"
                            name="email"
                            type="email"
                        />
                        <MyTextInput
                            id='password'
                            label="Password"
                            name="password"
                            type="password"
                            className='mt-8'
                        />
                        <Link href="/request-password-reset" className='underline decoration-1 mt-3'>FORGET YOUR PASSWORD?</Link>

                        <MyButton label='LOG IN' type={ButtonType.SUBMIT} isLoading={isLoading} />

                        <Link href="/signup" className='underline decoration-1 text-center mt-3'>CREATE AN ACCOUNT</Link>
                    </Form>
                </Formik>
            </section>
        </main>
    )
};

export default AdminLogin;