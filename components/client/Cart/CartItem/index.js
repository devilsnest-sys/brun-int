import Image from "next/image";
import React from "react";
import Delete from "@public/icons/common/Delete";
import { deleteApi, patchApi } from "@Repository/Api";

const CartItem = ({ data, fetchHandler }) => {
  const additionalFunctions = [fetchHandler];

  const handleRemoveItem = () => {
    deleteApi({
      url: `api/v1/cart/remove/${data?.id}`,
      additionalFunctions,
    });
  };

  const handleIncrement = () => {
    patchApi({
      url: `api/v1/cart/inc/${data?.id}`,
      payload: {},
      additionalFunctions,
    });
  };

  const handleDecrement = () => {
    if (data?.quantity > 1) {
      patchApi({
        url: `api/v1/cart/dec/${data?.id}`,
        payload: {},
        additionalFunctions,
      });
    }
  };

  return (
    <div
      //   href={`/products/dark-shenron-t-shirt2/6646c8e8780bf6d15ff91429`}
      className="flex items-center gap-6"
    >
      <Image src={""} alt="product image" width={136} height={190} />
      <div className="text__container flex flex-col md:flex-row gap-4 flex-wrap items-start md:items-center">
        <div className="CartItem__text  max-w-[194px] flex flex-col gap-6 justify-center">
          <p className="item__text text-sm">{data?.product_id}</p>
          <div className="item__size__color text-sm uppercase flex gap-5 ">
            <p className="">Size {data?.size}</p>
            <p className="">{data?.colour}</p>
          </div>
          <p className="item__price ">₹ {data?.price}</p>
        </div>
        <div className="cart__buttons flex gap-5 items-center relative z-10">
          <div className="quantity__container flex border border-black text-sm w-max py-[2px] h-max">
            <button
              className="border-none outline-none px-4"
              onClick={() => handleIncrement()}
            >
              +
            </button>
            <p>{data?.quantity}</p>
            <button
              className="border-none outline-none px-4"
              onClick={() => handleDecrement()}
            >
              {" "}
              -
            </button>
          </div>
          <Delete onClick={handleRemoveItem} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
