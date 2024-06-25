"use client"
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import MyTextInput from '@components/common/MyTextInput'
import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import { deliveryAndBillingValidationSchema, handleDeliverySubmit } from '@services'
import MyTextArea from '@components/common/MyTextArea'
import { ButtonType } from '@modals/common/common.types'
import { deliveryInitialValues } from '@contants/checkout.constant'

const CheckoutForm = () => {

    const [isBillingAddressDifferent, setIsBillingAddressDifferent] = useState<boolean>(false);
    const [isValidating, setIsValidating] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);

    useEffect(() => {
        setIsValid(!isValidating && isValid);
    }, [isValidating, isValid]);

    return (
        <Formik
            initialValues={deliveryInitialValues}
            validationSchema={deliveryAndBillingValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
                handleDeliverySubmit(values, isBillingAddressDifferent);
                setSubmitting(false);
            }}
            validateOnChange={true}
            validateOnBlur={false}
            validate={(values) => {
                setIsValidating(true);
                deliveryAndBillingValidationSchema.isValid(values)
                    .then(valid => {
                        setIsValid(valid);
                        setIsValidating(false);
                    });
            }}
        >
            <Form className='flex flex-col text-sm w-full gap-6 md:gap-12 max-w-[649px]'>
                <p className="input__heading">DELIVERY</p>
                <MyTextInput id='country' label='COUNTRY/REGION*' name='country' type='text' />
                <MyTextInput id='firstname' label='FIRST NAME*' name='firstname' type='text' />
                <MyTextInput id='lastname' label='LAST NAME*' name='lastname' type='text' />
                <MyTextInput id='company' label='COMPANY (OPTIONAL)' name='company' type='text' />
                <MyTextInput id='phone' label='PHONE NUMBER*' name='phone' type='tel' />
                <MyTextArea id='address' label='ADDRESS*' name='address' />
                <MyTextInput id='locality' label='LOCALITY*' name='locality' type='text' />
                <MyTextInput id='state' label='STATE*' name='state' type='text' />
                <MyTextInput id='pincode' label='PINCODE*' name='pincode' type='text' />
                <MyTextInput id='moreinfo' label='MORE INFO (OPTIONAL)' name='moreinfo' type='text' />
                <div className="checkout__button__container flex gap-5 items-center">
                    <MyOutlinedButton active={isBillingAddressDifferent === false} handleClick={() => setIsBillingAddressDifferent(false)} type={ButtonType.BUTTON}>BILLING ADDRESS SAME AS DELIVERY ADDRESS</MyOutlinedButton>
                    <MyOutlinedButton active={isBillingAddressDifferent === true} handleClick={() => setIsBillingAddressDifferent(true)} type={ButtonType.BUTTON}>USE A DIFFERENT BILLING ADDRESS</MyOutlinedButton>
                </div>
                {
                    isBillingAddressDifferent && (
                        <BillingAddressForm />
                    )
                }
                <button type='submit' className={`border border-black text-black px-24 py-4 w-max ${ isValid && 'bg-black text-white'}`}>PAY NOW</button>
            </Form>
        </Formik>
    )
}

const BillingAddressForm = () => {
    return (
        <>
            <MyTextInput id='billingCountry' label='COUNTRY/REGION*' name='billingCountry' type='text' />
            <MyTextInput id='billingFirstname' label='FIRST NAME*' name='billingFirstname' type='text' />
            <MyTextInput id='billingLastname' label='LAST NAME*' name='billingLastname' type='text' />
            <MyTextInput id='billingCompany' label='COMPANY (OPTIONAL)' name='billingCompany' type='text' />
            <MyTextInput id='billingPhone' label='PHONE NUMBER*' name='billingPhone' type='tel' />
            <MyTextArea id='billingAddress' label='ADDRESS*' name='billingAddress' />
            <MyTextInput id='billingLocality' label='LOCALITY*' name='billingLocality' type='text' />
            <MyTextInput id='billingState' label='STATE*' name='billingState' type='text' />
            <MyTextInput id='billingPincode' label='PINCODE*' name='billingPincode' type='text' />
            <MyTextInput id='billingMoreinfo' label='MORE INFO (OPTIONAL)' name='billingMoreinfo' type='text' />
        </>
    )
}

export default CheckoutForm