"use client"
import React from 'react'
import { Form, Formik } from 'formik';
import { useAddCustomer } from './addcustomer.hook';
import { addCustomerValidationSchema } from '@services';
import MyBoxInput from '@components/admin/common/MyBoxInput';
import AddButtons from '@components/admin/AddProduct/AddButtons';
import FullScreenLoader from '@components/common/FullScreenLoader';
import { addCustomerInitialValues } from '@contants/admin/customers.constant';

const NewCustomers = () => {

    const { isSubmitting, handleAddCustomer, handleCancel, isLoadingFullScreenLoader } = useAddCustomer();

    if (isLoadingFullScreenLoader) return <FullScreenLoader />

    return (
        <section id='addproduct'>
            <Formik
                initialValues={addCustomerInitialValues}
                validationSchema={addCustomerValidationSchema}
                onSubmit={(values, {resetForm}) => handleAddCustomer(values, resetForm)}
            >
                <Form className='flex flex-col text-sm w-full gap-6 max-w-[511px] mb-12'>
                    <h1 className="mb-6 mt-8">ADD NEW CUSTOMER</h1>
                    <MyBoxInput id="firstname" label="FIRST NAME" name="firstname" type="text" className="mb-6" />
                    <MyBoxInput id="lastname" label="LAST NAME" name="lastname" type="text" className="mb-6" />
                    <MyBoxInput id="email" label="EMAIL" name="email" type="email" className="mb-6" />
                    <MyBoxInput id="password" label="PASSWORD" name="password" type="password" className="mb-6" />
                    <AddButtons handleCancel={handleCancel} isLoading={isSubmitting} />
                </Form>
            </Formik>
        </section>
    )
}


export default NewCustomers