import Image from 'next/image'
import React, { ChangeEvent, memo } from 'react'
import upload from '@public/assets/uploadimage.png'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@libs/store';
import { setProductDefaultImage, setProductImageFour, setProductImageOne, setProductImageThree, setProductImageTwo } from '@libs/features/admin/addproduct.slice';

const AddProductImages = () => {
  
  const { productDefaultImage, productImageOne, productImageTwo, productImageThree, productImageFour } = useSelector((state: RootState) => state.adminAddProductSlice);

  const dispatch = useDispatch();
  const setImageDataDefault = (value: File | null) => {
    dispatch(setProductDefaultImage(value));
  }

  const setImageDataOne = (value: File | null) => {
    dispatch(setProductImageOne(value));
  }

  const setImageDataTwo = (value: File | null) => {
    dispatch(setProductImageTwo(value));
  }

  const setImageDataThree = (value: File | null) => {
    dispatch(setProductImageThree(value));
  }

  const setImageDataFour = (value: File | null) => {
    dispatch(setProductImageFour(value));
  }

  return (
    <div id="addproductimages">
      <h2 className='mb-6 mt-8'>IMAGES</h2>
      <div className="addproductimages__container border border-gray-200">
        <p className="text-gray-500 p-2">Images will appear in the store front of your website.</p>
        <div className="images__container grid gap-3 grid-cols-4 grid-rows-2 p-5" style={{ gridTemplateRows: 'repeat(2, 230px)', gridTemplateColumns: 'repeat(4, 1fr)' }} >
          <InputImage key={1} heading='Click to upload or drag and drop' subHeading='(JPG 0r PNG  maximum 500x689)' className="col-span-2 row-span-2" imageData={productDefaultImage} setImageData={setImageDataDefault} index={0} />
          <InputImage key={2} imageData={productImageOne} setImageData={setImageDataOne} index={1} />
          <InputImage key={3} imageData={productImageTwo} setImageData={setImageDataTwo} index={2} />
          <InputImage key={4} imageData={productImageThree} setImageData={setImageDataThree} index={3} />
          <InputImage key={5} imageData={productImageFour} setImageData={setImageDataFour} index={4} />
        </div>
      </div>
    </div>
  )
}

export default memo(AddProductImages)


interface IInputImage {
  className?: string;
  heading?: string;
  subHeading?: string;
  imageData: File | null;
  index: number;
  setImageData: (value: File | null) => void;
}

const InputImage = ({ className, heading, subHeading, imageData, setImageData, index }: IInputImage) => {

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      console.log('No files selected');
      return;
    }

    const file = e.target.files[0];
    // Convert file to base64 format for FormData
    // const reader = new FileReader();
    // reader.onloadend = async () => {
    //   if (reader.result) {
    //     const blob = await new File([reader.result as string], { type: file.type })
    //     setImageData(blob); // Set state as File (converted data)
    //   } else {
    //     console.error('Failed to read image file');
    //   }
    // };
    // reader.readAsDataURL(file);

    // setImage(file)
    setImageData(file);
  }

  const handleRemoveImage = () => {
    setImageData(null);
  }

  return (
    <div className={`image__input__container ${className}`}>
      {
        imageData
          ? (
            <div className="image__preview__container w-full h-full relative cursor-pointer ">
              <Image src={URL.createObjectURL(imageData)} alt='image' fill className='rounded-md object-cover' />
              <span className="material-symbols-rounded absolute z-10 right-2 top-2" onClick={handleRemoveImage}>
                close
              </span>
            </div>
          )
          : (<label htmlFor={`imageinput${index}`} className="inputimage__container relative border border-gray-200 border-dashed rounded-md flex justify-center items-center flex-col w-full h-full cursor-pointer ">
            <Image src={upload} alt='upload' width={70} height={70} />
            {
              heading && subHeading && (
                <div className="inputimage__label__container mt-7">
                  <p className="text-[#111927]">{heading}</p>
                  <p className="text-[#6C737F]">{subHeading}</p>
                </div>
              )
            }
            <input id={`imageinput${index}`} type="file" className="inputimage invisible absolute -z-50" onChange={handleFileChange} />
          </label>)
      }
    </div>
  )
}