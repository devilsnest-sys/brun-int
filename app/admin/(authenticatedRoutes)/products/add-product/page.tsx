'use client'
import React from 'react'
import { Form, Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { useAddProduct } from './useaddproduct.hook'
import { addProductInitialValues } from '@contants'
import { addProductValidationSchema } from '@services'
import AddSize from '@components/admin/AddProduct/AddSize'
import AddPrice from '@components/admin/AddProduct/AddPrice'
import AddButtons from '@components/admin/AddProduct/AddButtons'
import AddCategory from '@components/admin/AddProduct/AddCategory'
import FullScreenLoader from '@components/common/FullScreenLoader'
import AddMetaData from '@components/admin/AddProduct/AddMetaData'
import AddBasicDetails from '@components/admin/AddProduct/AddBasicDetails'
import AddProductImages from '@components/admin/AddProduct/AddProductImages'
import AddCompleteTheLook from '@components/admin/AddProduct/AddCompleteTheLook'

const AddProduct = () => {

  const router = useRouter();
  const { handleGetSubCategories, isSubCategoryLoading, isLoadingFullScreenLoader, restOfTheFields, handleAddProduct, isSubmitting } = useAddProduct();

  const handleCancel = () => {
    router.refresh();
    window.location.reload();
  }

  if(isLoadingFullScreenLoader) return <FullScreenLoader />

  return (
    <section id='addproduct'>
      <Formik
        initialValues={addProductInitialValues}
        validationSchema={addProductValidationSchema}
        onSubmit={(values) => handleAddProduct(values, restOfTheFields)}
      >
        <Form className='flex flex-col text-sm w-full gap-6 max-w-[1048px] mb-12'>
          <AddMetaData />
          <AddBasicDetails />
          <AddProductImages />
          <AddCategory handleGetSubCategories={handleGetSubCategories} isSubCategoryLoading={isSubCategoryLoading} />
          <AddSize />
          <AddPrice />
          <AddCompleteTheLook />
          <AddButtons handleCancel={handleCancel} isLoading={isSubmitting} />
        </Form>
      </Formik>
    </section>
  )
}

export default AddProduct