'use client'
import MyBoxInput from "@components/admin/common/MyBoxInput"
import MyBoxTextArea from "@components/admin/common/MyBoxTextArea"

const AddMetaData = () => {
    return (
        <div id='addmetadata'>
            <h1 className="mb-6 mt-8">ADD NEW PRODUCT</h1>
            <MyBoxInput id="slugText" label="SLUG" name="slugText" type="text" className="mb-10" />
            <MyBoxInput id="metatitle" label="META TITLE" name="metaTitle" type="text" className="mb-10" />
            <MyBoxTextArea id="metadescription" label="META DESCRIPTION" name="metaDescription" className="mb-6" />
        </div>
    )
}

export default AddMetaData