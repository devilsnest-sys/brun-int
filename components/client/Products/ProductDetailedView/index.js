"use client";

import Image from "next/image";
import React, { useState } from "react";
import MyOutlinedButton from "@components/common/MyOutlinedButton";
import { ButtonType } from "@modals/common/common.types";
import { postApi } from "@Repository/Api";

const ProductDetailedView = ({ productDetail }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  const handleSizeChange = (size) => {
    setSize(size);
  };

  const payload = {
    product_id: productDetail?.id,
    size,
    quantity,
    colour: "",
  };

  const handleAddToCart = () => {
    postApi({
      url: "api/v1/cart/add",
      payload,
      successMsg: "Added to cart",
    });
  };

  const reduceQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <section
      className="ProductDetailedView flex flex-col md:flex-row gap-7 relative"
      id="ProductDetailedView"
    >
      <div className="product__images w-full flex overflow-scroll overscroll-auto md:overflow-hidden md:overscroll-none md:w-4/6 md:grid md:grid-cols-2 gap-7">
        {productDetail?.image?.map((i, index) => (
          <Image
            src={i?.image_url}
            alt="product"
            width={500}
            height={700}
            key={`Images${index}`}
          />
        ))}
      </div>
      <div className="product__content w-max md:sticky md:left-0 flex flex-col h-max md:top-28 ">
        <p className="product__name text-lg sm:text-3xl whitespace-normal">
          {productDetail?.name}
        </p>
        <p className="product__price mt-2">₹{productDetail?.price}</p>
        <div className="product__size mt-6">
          <h5 className="size__heading mb-2">CHOOSE SIZE</h5>
          <div className="size__container flex flex-wrap gap-2 justify-start items-center">
            {productDetail?.size_and_quantity?.map((sizeObj, index) => (
              <MyOutlinedButton
                key={index}
                handleClick={() => handleSizeChange(sizeObj.size)}
                active={sizeObj.size === size}
                type={ButtonType.BUTTON}
                disabled={sizeObj.quantity === 0}
              >
                {sizeObj.size}
              </MyOutlinedButton>
            ))}
          </div>
        </div>
        <div className="product__quantity mt-6">
          <h5 className="quantity__heading mb-2">QUANTITY</h5>
          <div className="quantity__container flex gap-4 border border-black text-sm w-max px-2 py-1">
            <button
              className="border-none outline-none"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
            <p>{quantity}</p>
            <button
              className="border-none outline-none"
              onClick={reduceQuantity}
            >
              -
            </button>
          </div>
        </div>
        <div className="product__action mt-6">
          <div className="action__button flex gap-2 text-sm mb-2">
            <button
              className="border-none outline-none bg-black text-white py-2 w-60 text-center"
              onClick={handleAddToCart}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailedView;
