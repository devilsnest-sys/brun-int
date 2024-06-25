"use client"
import CheckoutOrderItem from '@components/client/Checkout/CheckoutOrderItem'
import MyTextArea from '@components/common/MyTextArea';
import MyTextInput from '@components/common/MyTextInput';
import { returnInitialValues } from '@contants/orders.constant';
import { returnValidationSchema } from '@services/client/orders/orders.service';
import { Form, Formik } from 'formik';
import React, { useState } from 'react'

const ReturnRequest = ({ params }: { params: { id: string } }) => {

  const [isReturnRequested, setIsReturnRequested] = useState<boolean>(false);

  // TODO
  return (
    <div className="returnorder my-28 flex gap-5 md:gap-16 flex-wrap max-w-6xl mx-auto justify-center uppercase">
      {
        isReturnRequested ? (
          <ReturnRequestSuccess />
        ) : (
          <ReturnRequestForm />
        )
      }
      <div className="cancelorder__right border border-[#767676] p-5 md:p-10 max-w-[512px] h-max hidden md:flex flex-col gap-6 text-sm">
        <div className="items__container flex flex-col gap-6 ">
          <CheckoutOrderItem />
          <CheckoutOrderItem />
        </div>
        <div className="checkout__amount text-sm">
          <p className="subtotal flex justify-between items-center">
            <span className="subtotal__text">SUBTOTAL</span>
            <span className="subtotal__price">₹ 5980.00</span>
          </p>
          <p className="total__amount flex justify-between items-center mt-4">
            <span className="total__text">TOTAL REFUND</span>
            <span className="total__price">₹ 5980.00</span>
          </p>
        </div>
      </div>
    </div>
  )
}

const ReturnRequestSuccess = () => {
  return (
    <div className="returnorder__left flex flex-col gap-1 justify-start max-w-[542px]">
      <h1 className="text-2xl font-bold mb-3">RETURN REQUEST SENT</h1>
      <p className='text-sm'>WE WILL SENT A CONFIRMATION TO:</p>
      <p className='text-sm font-semibold mb-3'>johnsmith@gmail.com</p>
      <p className='text-sm'>YOUR ORDER NUMBER IS:</p>
      <p className='text-sm font-semibold mb-3'>1234</p>
      <p className='text-sm'>WILL PICKUP BY:</p>
      <p className='text-sm font-semibold mb-3'>24 MARCH 2024</p>
      <p className='text-sm'>PICKUP ADDRESS:</p>
      <p className='text-sm font-semibold mb-3'>John Smith 123, Example Street, Example Locality Example State, Example Country Pincode: 123456</p>
    </div>
  )
}


const ReturnRequestForm = () => {
  const [isValidating, setIsValidating] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleReturn = (values: any) => {
    // TODO
    alert('Return request sent')
  }
  return (
    <div className="returnorder__left">
      <Formik
        initialValues={returnInitialValues}
        validationSchema={returnValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleReturn(values);
          setSubmitting(false);
        }}
        validateOnChange={true}
        validateOnBlur={false}
        validate={(values) => {
          setIsValidating(true);
          returnValidationSchema.isValid(values)
            .then(valid => {
              setIsValid(valid);
              setIsValidating(false);
            });
        }}
      >
        <Form className='flex flex-col text-sm w-full gap-6 md:gap-12 max-w-[649px]'>
          <p className="input__heading">ENTER PICKUP ADDRESS</p>
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
          <button type='submit' className={`border border-black text-black px-24 py-4 w-max ${isValid && 'bg-black text-white'}`}>REQUEST RETURN</button>
        </Form>
      </Formik>
    </div>
  )
}

export default ReturnRequest