import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CartItem from "../CartItem";
import MyOutlinedButton from "@components/common/MyOutlinedButton";
import { getAccessTokenFromStorage } from "@services/tokens/tokens.service";
import { ButtonType } from "@modals/common/common.types";
import { getApi } from "@Repository/Api";

const CartBody = () => {
  const router = useRouter();
  const [Item, setItem] = useState({
    data: {
      fetchProducts: [],
      totalAmount: 0,
    },
  });

  useEffect(() => {
    const userId = getAccessTokenFromStorage();
    if (!userId) {
      router.replace("/login");
    }
  }, []);

  const fetchHandler = () => {
    getApi({
      url: "api/v1/cart/fetch-items",
      setResponse: setItem,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);


  return (
    <section
      id="cartbody"
      className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:relative min-h-screen"
    >
      {Item.data.fetchProducts.length > 0 ? (
        <>
          <div className="cart__container flex flex-col gap-4">
            {Item.data.fetchProducts.map((item, idx) => (
              <CartItem key={idx} data={item} fetchHandler={fetchHandler} />
            ))}
          </div>
          <div className="cart__checkout border border-[#767676] p-5 md:p-10 max-w-[430px] h-max flex flex-col gap-6 text-sm md:sticky md:top-14">
            <p>TAX INCLUDED. SHIPPING AND DISCOUNTS CALCULATED AT CHECKOUT</p>
            <div className="checkout__price flex justify-between items-center ">
              <p className="">Total</p>
              <p className="">₹{Item?.data?.totalAmount}</p>
            </div>
            <MyOutlinedButton
              active
              handleClick={() => console.log("checkout")}
              className="!w-max !py-2 !px-8 md:!py-4 md:!px-16 m-auto"
              type={ButtonType.BUTTON}
            >
              CHECKOUT
            </MyOutlinedButton>
          </div>
        </>
      ) : (
        <p className="empty__cart">NO ITEMS FOUND IN CART.</p>
      )}
    </section>
  );
};

export default CartBody;
