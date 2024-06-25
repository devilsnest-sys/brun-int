import MyBoxInput from '@components/admin/common/MyBoxInput'
import MyBoxTextArea from '@components/admin/common/MyBoxTextArea'
import React from 'react'

const AddBasicDetails = () => {
  return (
    <div id="addbasicdetails">
      <h1 className="mb-6 mt-8">BASIC DETAILS</h1>
      <MyBoxInput id="productname" label="PRODUCT NAME" name="productName" type="text" className="mb-10" />
      <MyBoxTextArea id="writeproductdescription" label="WRTIE DESCRIPTION" name="productDescription" className="mb-6" />
    </div>
  )
}

export default AddBasicDetails